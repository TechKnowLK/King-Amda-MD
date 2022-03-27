/**
 *  
   
//? /$$   /$$ /$$                            /$$$$$$                      /$$                                
//? | $$  /$$/|__/                           /$$__  $$                    | $$                                
//? | $$ /$$/  /$$ /$$$$$$$   /$$$$$$       | $$  \ $$ /$$$$$$/$$$$   /$$$$$$$  /$$$$$$                       
//? | $$$$$/  | $$| $$__  $$ /$$__  $$      | $$$$$$$$| $$_  $$_  $$ /$$__  $$ |____  $$                      
//? | $$  $$  | $$| $$  \ $$| $$  \ $$      | $$__  $$| $$ \ $$ \ $$| $$  | $$  /$$$$$$$                      
//? | $$\  $$ | $$| $$  | $$| $$  | $$      | $$  | $$| $$ | $$ | $$| $$  | $$ /$$__  $$                      
//? | $$ \  $$| $$| $$  | $$|  $$$$$$$      | $$  | $$| $$ | $$ | $$|  $$$$$$$|  $$$$$$$                      
//? |__/  \__/|__/|__/  |__/ \____  $$      |__/  |__/|__/ |__/ |__/ \_______/ \_______/                      
//?                          /$$  \ $$                                                                        
//?                         |  $$$$$$/                                                                        
//?                          \______/                                                                         
//?             /$$$$$$$                                /$$                                                  
//?            | $$__  $$                              | $$                                                  
//?            | $$  \ $$  /$$$$$$  /$$    /$$ /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
//?            | $$  | $$ /$$__  $$|  $$  /$$//$$__  $$| $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/
//?            | $$  | $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$| $$  \ $$| $$  \ $$| $$$$$$$$| $$  \__/|  $$$$$$ 
//?            | $$  | $$| $$_____/  \  $$$/ | $$_____/| $$| $$  | $$| $$  | $$| $$_____/| $$       \____  $$
//?            | $$$$$$$/|  $$$$$$$   \  $/  |  $$$$$$$| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$       /$$$$$$$/
//?            |_______/  \_______/    \_/    \_______/|__/ \______/ | $$____/  \_______/|__/      |_______/ 
//?                                                                  | $$                                    
//?                                                                  | $$                                    
 
   //* Create By Pasindu Samarasingha
   //* Contact Me on wa.me/94763398959
   //* Follow https://github.com/Kingamdabota
*/


const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	dappa: 'https://api.dapuhy.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.dapuhy.xyz': 'DappaAnjing',
}

// Other
global.owner = ['94786238616']
global.ownerForOwnerCommand = ['+94786238616']
global.packname = '<./King Amda Developers.>'
global.author = undefined // ? let the sticker be cool, if you don't want to change it to the 'author'
global.sessionName = 'session'
global.botName = '<./King Amda MD.>'
global.ownerName = 'Pasindu Samara$ingha'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync('./lib/kingamda.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = {
    WELCOMEIMG: process.env.WELCOME_IMG === undefined ? 'https://i.ibb.co/YkjwKJv/image.png' : process.env.WELCOME_IMG,
    BYEIMG: process.env.BYE_IMG === undefined ? 'https://i.ibb.co/KhSX2tv/image.png' : process.env.BYE_IMG,
    WELCOMEMSG: process.env.WELCOME_MSG === undefined ? '' : process.env.WELCOME_MSG,
    BYEMSG: process.env.BYE_MSG === undefined ? '' : process.env.BYE_MSG,
    PREFIX: process.env.PREFIX === undefined ? '' : process.env.PREFIX,
    DAPUHYAPI1: 'DappaAnjing',
    DAPUHYAPI2: 'sQMpXbHimbTkxGC',
}
