import express from 'express';

import { index } from 'controllers/signup.controller'

export default express.Router().post('/', index);