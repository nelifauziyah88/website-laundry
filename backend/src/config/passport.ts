import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import {
  findByGoogleId,
  findByEmail,
  createUserWithGoogle,
  linkGoogleToExisting,
} from "../models/authModel";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const email = profile.emails?.[0]?.value ?? "";
        const nama = profile.displayName ?? "Pengguna";
        const avatarUrl = profile.photos?.[0]?.value ?? null;

        let user = await findByGoogleId(googleId);

        if (!user && email) {
          const existing = await findByEmail(email);
          user = existing
            ? await linkGoogleToExisting(existing.id, googleId, avatarUrl)
            : await createUserWithGoogle(nama, email, googleId, avatarUrl);
        }

        if (!user) {
          return done(new Error("Gagal memproses akun Google"), undefined);
        }

        return done(null, user);
      } catch (error) {
        return done(error as Error, undefined);
      }
    }
  )
);

export default passport;
