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
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website =process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/gMBQ83cX/6e8ce32267eac153fef757586296b86d.jpg"; // SET LOGO FOR IMAGE 
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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_28_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpBWkR3ZW94eGVMS3lsYWY1Zi9FWUQrZHAyQ0lVN2Z5SEQwTWhnTmRsOVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtOLXh3YUxaU2FLbkZYNWJUQWloRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTYwYzFmMmYtZjU1My00MDIzLTgwMzEtNjU4ZGRlOGY3ZGFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDIxMCxcbiAgICAgIDUyLFxuICAgICAgNzEsXG4gICAgICAxNzgsXG4gICAgICAxNzUsXG4gICAgICA5NyxcbiAgICAgIDE5MSxcbiAgICAgIDE2LFxuICAgICAgMTU1LFxuICAgICAgNzMsXG4gICAgICA5MixcbiAgICAgIDIxNixcbiAgICAgIDEzMCxcbiAgICAgIDg4LFxuICAgICAgMTcxLFxuICAgICAgNzUsXG4gICAgICA2LFxuICAgICAgMjI0LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDMyLFxuICAgICAgMTc3LFxuICAgICAgMjE0LFxuICAgICAgNzUsXG4gICAgICAxNjIsXG4gICAgICAxNTcsXG4gICAgICA0NCxcbiAgICAgIDI1NSxcbiAgICAgIDE0MyxcbiAgICAgIDg4LFxuICAgICAgNzMsXG4gICAgICAyNTQsXG4gICAgICAyMDUsXG4gICAgICAxNTIsXG4gICAgICA3OCxcbiAgICAgIDIzNSxcbiAgICAgIDEwNyxcbiAgICAgIDI0NCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNUxXQ0Q4N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ5ODUyMjg1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCiIGJpbGFsIH5cIixcbiAgICBcImxpZFwiOiBcIjIyODUzNTQ3ODI5MjU3OToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQejZ4S3dGRU1EVmhjRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImkyWWdiQXMxNzRLbzNjQjlGWE5mZGFsU1FHSUcrcEVhYS9iMmxPOFU3MmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTdvNjdveThEd3FDaWoxRStWekRHUEZad0FKbUEwckdJUkJUSERxeGowOEJhQUlPbVNqaDloQjZRNnhVUVZGUXhmQnFxOWxCcFBRV0V3enV5cU1kQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVEhTZHJCOHJRLzVSKzVzdTNGSlVYb1BQcHhtbW53cHpLeUJsM3ZXUU0wV2RRSTRTaWNGdG9mZGhITkVDRFozU0s4NTk3cjE3d2F0ZUM2NFZldUJrQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ5ODUyMjg1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MDIwNDg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0Z3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRncuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKSFNjUmpnQnBycVFrYVF1dWxXazZyZURlZldRUGNnVWM4ZHJwd3FFNTJrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzU1ODE4MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcwMjA0MjA1MDdcIn0iCn0="; SESSION_ID 


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
