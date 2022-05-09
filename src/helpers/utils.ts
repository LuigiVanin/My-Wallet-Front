function convertToDecimal(data: any) {
    return String(parseFloat(data).toFixed(2)).replace(".", ",");
}

export { convertToDecimal };
