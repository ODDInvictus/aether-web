import { Backend } from '$lib/backend';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
  Backend.play('spotify:track:5BB0Jzw60KyfSTyjJqtely')

  return new Response();
};