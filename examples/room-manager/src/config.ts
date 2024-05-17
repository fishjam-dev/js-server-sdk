/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import 'dotenv/config';

export default {
  port: parseInt(process.env.PORT!),
  webhookUrl: process.env.WEBHOOK_URL!,
  fishjamUrl: process.env.FISHJAM_URL!,
  serverToken: process.env.FISHJAM_SERVER_TOKEN!,
  enableSimulcast: process.env.ENABLE_SIMULCAST ? process.env.ENABLE_SIMULCAST === 'true' : true,
  maxPeers: process.env.MAX_PEERS ? parseInt(process.env.MAX_PEERS) : undefined,
  peerlessPurgeTimeout: process.env.PEERLESS_PURGE_TIMEOUT ? parseInt(process.env.PEERLESS_PURGE_TIMEOUT) : undefined,
};
