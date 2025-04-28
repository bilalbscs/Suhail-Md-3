const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923349852285";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923349852285";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923349852285";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_16_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3ZGR3pSM2JEOVNGeElUVzlSTXp4bU84UjdqQnM0RXZpN3ZkdUZ6R3paQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieTBialRUc1BTdzI1ZU9tcElhUjR0QVwiLFxuICBcInBob25lSWRcIjogXCI3NGM4NDdkYS0zNmViLTQ3NzEtYjQ4ZC01OGI2NmRiNDI3NjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTIxLFxuICAgICAgMjQ4LFxuICAgICAgMjgsXG4gICAgICAxNDYsXG4gICAgICAxOTYsXG4gICAgICA2MyxcbiAgICAgIDQ1LFxuICAgICAgMTc0LFxuICAgICAgMTYyLFxuICAgICAgMTAwLFxuICAgICAgMTUzLFxuICAgICAgMTgzLFxuICAgICAgMjUyLFxuICAgICAgMTczLFxuICAgICAgMjEwLFxuICAgICAgOSxcbiAgICAgIDE3NyxcbiAgICAgIDYxLFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgNTAsXG4gICAgICA2OSxcbiAgICAgIDE3MCxcbiAgICAgIDE3MCxcbiAgICAgIDMzLFxuICAgICAgMTcsXG4gICAgICAzNyxcbiAgICAgIDUxLFxuICAgICAgMTE5LFxuICAgICAgMjMzLFxuICAgICAgNCxcbiAgICAgIDk0LFxuICAgICAgMTcsXG4gICAgICAxOCxcbiAgICAgIDE3MyxcbiAgICAgIDEwNyxcbiAgICAgIDkxLFxuICAgICAgMTI2LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlY1S1c4VjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0OTg1MjI4NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAoiBiaWxhbCB+XCIsXG4gICAgXCJsaWRcIjogXCIyMjg1MzU0NzgyOTI1Nzk6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHY2eEt3RkVMNmV2TUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpMllnYkFzMTc0S28zY0I5RlhOZmRhbFNRR0lHK3BFYWEvYjJsTzhVNzJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIno5ZGg2WUtQSVRNS2VFM1FiUjlqSHYxaHl0YTNyOCttNnN4ZFR5RTdiVDIyUWFjdDF0UkRqS2pUQTNWc0FibGJwQU5lWGlKOXpCRTFOVzRLUTU3ZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm4vbng1V2dVWE9mMnh0eUVjM083S0xzc0NDYm1qOHFnU0c2QUxQU1N5TWUxNEtyaDg5Z0VhY2NBMzNhTm1KVkdObjRHdGRxQWg0bmVib1VGeGlDa2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM0OTg1MjI4NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTgxNzQxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9GdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0Z2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieGYwUmpTYktqclZucm9LV3YyZGFHZHMxUStFUHlhYm5pRTRDN3R5MEdGZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDM1NTgxODE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDU4MTc0MTQ1NTZcIn0iCn0="; SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "AB_bot",
  ownername:process.env.OWNER_NAME|| "itx bilal AB:0126",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "بلالAB"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
