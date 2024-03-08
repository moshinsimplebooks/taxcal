function ReqObj (values, yearTotAmt,source,taxType){
    const data = {
        ...values,
        yearTotAmt,
        source,
        taxType,
        id: uuidv4(),
    };
    return data
}
export default ReqObj