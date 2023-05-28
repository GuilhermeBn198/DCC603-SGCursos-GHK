import express from 'express'

export const index = async (req: express.Request, res: express.Response) => {
  return res.status(200).json({ welcome: 'Welcome Stranger!' });
};