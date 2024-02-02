import FormCounter from "./forms/FormCounter";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";
import Button from "./Button";
import { useReducer, useState } from "react";
// import Success from "./forms/Success";
import { initialState, reducer } from "./DataCenter";
import { useAddress, useContract, useContractWrite  } from "@thirdweb-dev/react";
import {contractAddress, contractABI } from "@/constants";
import Review from "./forms/Review";
import { toast } from "react-toastify";

// function args 
// string memory name,
// string memory symbol,
//uint256 _totalSupply,
//uint _holdingCap,
//uint256 _buyTax,
//uint256 _sellTax,
//uint8 _tokenDecimals,
//address _ownerAddress,
//uint256 teamAllocation,
//address teamAllocationAddress,

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalSteps = 5;
  const [currStep, setCurrStep] = useState(1);
  const address = useAddress();
  const {contract} = useContract(contractAddress, contractABI)

  const decimals = 18
  const {mutateAsync, isLoading, error} = useContractWrite (contract, "createToken")
  
  const handelNextStep = () => {
    if (currStep < totalSteps) setCurrStep((currStep) => currStep + 1);
  };

  const handlePreviousStep = () => {
    if (currStep > 1) setCurrStep((currStep) => currStep - 1);
  };

  const handleCreateToken = async () => {
    if(!address) return toast.error("please connect your wallet")
    try{
      await mutateAsync({
        args: [
          state.tokenName, 
          state.tokenSymbol, 
          state.totalSupply, 
          state.limitPerWallet, 
          state.buyTax,
          state.sellTax,
          decimals,
          address,
          state.teamAllocation,
          state.teamPayoutAddress
        ]
      })
      toast.success("Token created succesfully")
    }catch(err){
      toast.error(err.message)
    }
    
  }

  return (
    <div className="mb-10">
      <FormCounter currStep={currStep} />
      {currStep == 1 && <Form1 state={state} dispatch={dispatch} />}
      {currStep == 2 && <Form2 state={state} dispatch={dispatch} />}
      {currStep == 3 && <Form3 state={state} dispatch={dispatch} />}
      {currStep == 4 && <Form4 state={state} dispatch={dispatch} />}
      {currStep == 5 && <Review state={state} />}
      <Button
        onNextStep={handelNextStep}
        onPreviousStep={handlePreviousStep}
        currStep={currStep}
        onHandleCreateToken = {handleCreateToken}
        isLoading = {isLoading}
      />
    </div>
  );
};

export default Form;
