import types from "../types";
import BitcoinService from "../../services/BitcoinService";


export const getBitcoinRate = () => {
    return (dispatch) => {
        return BitcoinService.getRate()
            .then(response => {
                dispatch({ type: types.Get_RATE, data: response })
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const getTransByDay = () => {
    return (dispatch) => {
        return BitcoinService.getConfirmedTransactions()
            .then(response => {
                dispatch({ type: types.TRANS_PER_DAY, data: response })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getMarketPrice = () => {
    return (dispatch) => {
        return BitcoinService.getMarketPrice()
            .then(response => {
                dispatch({ type: types.GET_MARKET_PRICE, data: response })
            })
            .catch(error => {
                throw (error);
            });
    };
};