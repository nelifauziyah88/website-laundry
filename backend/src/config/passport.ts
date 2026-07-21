import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import {
  findByEmail,
  findByGoogleId,
  linkGoogleToExisting,
} from "../models/authModel";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleCallbackUrl =
  process.env.GOOGLE_CALLBACK_URL ||
  "http://localhost:4000/api/auth/google/callback";

if (!googleClientId || !googleClientSecret) {
  throw new Error(
    "GOOGLE_CLIENT_ID dan GOOGLE_CLIENT_SECRET wajib diisi di file .env"
  );
}

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: googleCallbackUrl,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const googleId = profile.id;

        const email = profile.emails?.[0]?.value
          ?.trim()
          .toLowerCase();

        const avatarUrl =
          profile.photos?.[0]?.value ?? null;

        // Cek apakah akun sebelumnya sudah pernah ditautkan ke Google.
        let user = await findByGoogleId(googleId);

        if (user) {
          return done(null, user);
        }

        // Google tidak memberikan email.
        if (!email) {
          return done(null, false, {
            message:
              "Email tidak tersedia dari akun Google.",
          });
        }

        // Cek apakah email Google sudah terdaftar di database.
        const existingUser = await findByEmail(email);

        if (!existingUser) {
          return done(null, false, {
            message:
              "Email Google ini belum terdaftar sebagai admin.",
          });
        }

        // Hubungkan akun database dengan akun Google.
        user = await linkGoogleToExisting(
          existingUser.id,
          googleId,
          avatarUrl
        );

        return done(null, user);
      } catch (error) {
        console.error("Google authentication error:", error);
        return done(error as Error);
      }
    }
  )
);

export default passport;