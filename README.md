http://45.90.123.6:3000/nazmul/subscription/otp/request  bdapps api:https://developer.bdapps.com/subscription/otp/request
request body: {appId, password, mobile} 

http://45.90.123.6:3000/nazmul/subscription/otp/verify  bdapps api: https://developer.bdapps.com/subscription/otp/verify
request body: { appId, password, referenceNo,otp } 

http://45.90.123.6:3000/nazmul/subscription/unsubscribe/  bdapps api: https://developer.bdapps.com/subscription/send
request body: {appId, password, mobile} 

http://45.90.123.6:3000/nazmul/subscription/subscribe/  bdapps api: https://developer.bdapps.com/subscription/send
request body: {appId, password, mobile} 

http://45.90.123.6:3000/nazmul/subscription/subscription/status bdapps api: https://developer.bdapps.com/subscription/getStatus
request body: {appId, password, mobile} 
