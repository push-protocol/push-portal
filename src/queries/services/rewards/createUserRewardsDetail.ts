import axios from "axios";

import { createUserRewardsDetailModel } from "../../models";
import { getRewardsBaseURL } from "../../../queries/baseURL";

export const createUserRewardsDetail = (payload: any) =>
  axios({
    method: "POST",
    url: `${getRewardsBaseURL()}/v2/users/`,
    data: {
      userWallet: payload.userWallet,
      data: payload.data,
      // pgpPublicKey: payload.pgpPublicKey,
      verificationProof: payload.verificationProof,
      refPrimary: payload.refPrimary,
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => createUserRewardsDetailModel(response.data));
