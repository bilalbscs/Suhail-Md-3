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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_51_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU4bDQ4ZlM1OWV0dGdxdzdpdExvUzJTMVdzVWFyOFA2alZQUmxPemVHeGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzQ5ODUyMjg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNUI0MDI1MkQ2MzJBNDYyQUY3NUQ2QkZGMjc2ODE0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDUzODAzMDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2VNY3UxWkdUaXltMzc2NFdZMDdiUVwiLFxuICBcInBob25lSWRcIjogXCJlZTY5ZmNiZS1kZTkwLTRmYzEtYTAwZS03M2QzMTVjMzA1ZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTQsXG4gICAgICA2MixcbiAgICAgIDQ2LFxuICAgICAgMTQ1LFxuICAgICAgMTAwLFxuICAgICAgODcsXG4gICAgICA4MCxcbiAgICAgIDEwOCxcbiAgICAgIDIsXG4gICAgICA1OSxcbiAgICAgIDIyMCxcbiAgICAgIDg3LFxuICAgICAgMTQsXG4gICAgICAxODQsXG4gICAgICAxODAsXG4gICAgICAxOTAsXG4gICAgICAxODUsXG4gICAgICA2MSxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAxMzIsXG4gICAgICAxMjksXG4gICAgICAyNDUsXG4gICAgICAyMzUsXG4gICAgICAyLFxuICAgICAgMTA4LFxuICAgICAgNjQsXG4gICAgICAxMDcsXG4gICAgICAxODYsXG4gICAgICA0NixcbiAgICAgIDE0NSxcbiAgICAgIDE0NixcbiAgICAgIDIwMSxcbiAgICAgIDE4OCxcbiAgICAgIDExMSxcbiAgICAgIDI1MixcbiAgICAgIDg3LFxuICAgICAgMTQsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1QTk3QThMQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ5ODUyMjg1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCiIGJpbGFsIH5cIixcbiAgICBcImxpZFwiOiBcIjIyODUzNTQ3ODI5MjU3OToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcjZ4S3dGRU12SG9jQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImkyWWdiQXMxNzRLbzNjQjlGWE5mZGFsU1FHSUcrcEVhYS9iMmxPOFU3MmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUt6czBsdG9jT2wvUzVNSFFtTlVRelRkTE5PUmxWQlQ5bFpHWWdha2VjN2FuMFltMS9zYSs3TE9nSnQ4eXhORTV0a1hNTGt6OG5FOWxFL1FJUTVoQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHVGV0dsVkNMZkFEa244QlI4a0NnWmd4NFRnLzl3aVNiZFErNnROajBESlJXaml6NkZsazVudkNrTG9vT0JzZFNwaXNvN0hCTEhRa2I0cm9WTExnQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ5ODUyMjg1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1MzgwMzAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWV3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiZ2hYUGpkcjlFdVRnblZTMXhLMDMrVSsydVc0UzdnK3U3Z1cvMHpvclN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzU1ODE4MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTM4MDMwNTA0OVwifSIKfQ=="  // PUT your SESSION_ID 


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
