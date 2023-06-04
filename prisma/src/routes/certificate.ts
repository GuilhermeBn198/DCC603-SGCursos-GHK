import express from "express";

import { listCertificatesByUser } from "controllers/certificates.controller";

export default express
  .Router().get('/:userId', listCertificatesByUser)
