import Stripe from 'stripe';

export const Stripe = new Stripe(process.env.STRIPE_SECRET_KEY)