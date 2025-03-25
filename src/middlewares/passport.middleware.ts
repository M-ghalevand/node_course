import bcrypt from 'bcrypt';
import { prismaClient } from 'db';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

interface UserInstance {
  id: number;
  email: string;
  password: string;
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email: string, password: string, done) => {
      try {
        const user = await prismaClient.user.findUnique({ where: { email } });

        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await User.findByPk(id);

    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
