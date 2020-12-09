const { utilFrom } = require('../util/util')
module.exports = {
    buildRes(respondeBody, from){
        let dto = {};
        switch(respondeBody.status == 201 && from){
            case utilFrom.metric:
                dto = respondeBody.data
                break;
        }

        return dto;
    },

    error(erro, from){
        let dto = {};

        if(!erro.response){
           return dto = { error: { 
                    message: "malformed request",
                    code: '01'
                } 
            }
        };
        
        switch(erro.response.status === 404 && from){
            case utilFrom.clinic:
                dto = { error: { 
                    message: from + ' not found',
                    code: '02'
                    } 
                };
                break;
            case utilFrom.physician:
                dto = { error: { 
                    message: from + ' not found',
                    code: '03'
                    } 
                };
                break;
            case utilFrom.patient:
                dto = { error: { 
                    message: from + ' not found',
                    code: '04'
                    } 
                };
                break;
            case utilFrom.metric:
                dto = { error: { 
                    message: from + ' not found',
                    code: '05'
                    } 
                };
                break;
            default:
                dto = {
                        error: {
                            message: "malformed request",
                            code: '01'
                        }
                    }
        };

        switch(erro.response.status != 404 && from){
            case utilFrom.clinic:
                dto = { error: { 
                    message: from + ' not found',
                    code: '06'
                    } 
                };
                break;
            case utilFrom.physician:
                dto = { error: { 
                    message: from + ' service not available',
                    code: '07'
                    } 
                };
                break;
            case utilFrom.patient:
                dto = { error: { 
                    message: from + ' service not available',
                    code: '08'
                    } 
                };
                break;
            case utilFrom.metric:
                dto = { error: { 
                    message: from + ' service not available',
                    code: '09'
                    } 
                }
                break;
            };
       
         return dto;
    }
};