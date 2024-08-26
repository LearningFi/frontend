import { ethers } from "ethers";
import governanceAbi from "./ABIs/Governance.json"

export const getGovernanceContract= (providerOrSigner: any) => {
    new ethers.Contract(
        process.env.NEXT_PUBLIC_LearningFiGovernance  || "",
        governanceAbi,
        providerOrSigner
    )
}