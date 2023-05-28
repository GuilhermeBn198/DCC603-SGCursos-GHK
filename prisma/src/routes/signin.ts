import express from 'express';

import { index } from 'controllers/signin.controller'

export default express.Router().get('/', index);