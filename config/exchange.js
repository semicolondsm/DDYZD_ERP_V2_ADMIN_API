let exchange = (status) => {
    switch(status){
        case 0:
            return "승인 거절";
            break;
        case 1:
            return "승인 완료";
            break;
        case 2:
            return "요청 중";
            break;
        default:
            console.log("ERROR!!");
    }
}

module.exports = { exchange };