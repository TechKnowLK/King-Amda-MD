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

//! ️⚠️ PLEASE DO NOT RECODE THIS SECTION, EASY ERROR IF RECORD WRONG!
//! ️⚠️RECODE WITH HEART, LET'S NO ERROR!


require('./config')
//const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage } = require("@adiwajshing/baileys-md")
const { 
default: makeWASocket, 
DisconnectReason, 
AnyMessageContent, 
delay, 
useSingleFileAuthState 
} = require('@danielteodoro/baileys-md')
const { state, loadState, saveState } = useSingleFileAuthState(`./session.data.json`)
const pino = require('pino')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const fs = require('fs')
const chalk = require('chalk')
const fetch = require('node-fetch')
const CFonts = require('cfonts')
const FileType = require('file-type')
const { smsg, isUrl, generateMessageTag } = require('./lib/myfunc')
const pasi = require('./config.js')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')


async function startKingAmda() {
    const amda = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['KingAmda Multi Device'],
        auth: state
    })

    amda.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!amda.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(amda, mek)
        require("./amda")(amda, m, chatUpdate)
        } catch (err) {
            console.log(err)
        }
    })

    amda.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await amda.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await amda.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = pasi.WELCOMEIMG
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await amda.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = pasi.BYEIMG
                }

                if (anu.action == 'add') {
                    amda.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*\n              *😋 WELCOME 😇*\n*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*\n\n*🙏😉🙏*\n *සාදරයෙන් පිලිගන්නවා ${metadata.subject} වෙත @${num.split("@")[0]}*\n\n${pasi.WELCOMEMSG}\n *මුලින්ම ගෲප් ඩිස්ක්‍රිප්ශන් එක කියලවම වැඩ පටන් ගන්න😌* \n\n ${metadata.desc}` })
                } else if (anu.action == 'remove') {
                    //TODO: Remove Eka Kolitiyata hadanna one
                    
                    amda.sendMessage(anu.id, { image: { url: pasi.BYEIMG }, contextInfo: { mentionedJid: [num] }, caption: `*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*\n              *😒 Good Bye 👋*\n*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*\n\n  @${num.split("@")[0]} Leaving from ${metadata.subject}\n\n${pasi.BYEMSG}` })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting index
    CFonts.say('King Amda\nMulti-device', {
        font: 'block',
        align: 'center',
        color: 'white'
      })
      CFonts.say('King Amda Developers.', {
        font: 'simple',
        align: 'center',
        color: 'cyanBright'
      })
      CFonts.say(`Made By:- Pasindu Samara$ingha`, {
        font: 'console',
        align: 'center',
        color: 'yellow'
      })
      var time= 2000;
      setTimeout(function(){
        console.log('<./King Amda MD> Bot Connecting...🕑  \n')
        setTimeout(function(){
            console.log('     Installing Plugins...🚀  ')
            setTimeout(function(){
                console.log('     Loading Language...⚙️')
                setTimeout(function(){
                    console.log('     Installing Other Tools...⚙️  \n\n')
                    setTimeout(function(){
                        console.log('<./King Amda MD> Bot Starting...🚀  \n')
                        // setTimeout(function(){
                        //     amda.ev.on('connection.update', async (update) => {
                        //         const { connection, lastDisconnect } = update
                        //         if (connection === 'close') {
                        //             lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startKingAmda() : console.log('Koneksi Terputus...')
                        //         }
                        //         console.log('<./King Amda MD> Bot Connected...❤️  ', update)
                        //     })

                        // }, 1500); 

                    }, time); 

                }, time); 

            }, time); 

        }, time); 

    }, 1000); 

    amda.public = true
    amda.modelmenu = "gif"

    amda.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startKingAmda() : console.log('Koneksi Terputus...')
        }
        setTimeout(function(){
            console.log('<./King Amda MD> Bot Connected...❤️  ', update)
                            
        }, 10000); 
        
    })

    amda.ev.on('creds.update', saveState)

    // Function Buat Send, jangan di otak atik dick

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    amda.sendText = (jid, text, quoted = '', options) => amda.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    amda.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await amda.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    amda.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await amda.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    amda.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await amda.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    amda.sendTextWithMentions = async (jid, text, quoted, options = {}) => amda.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
	 
	  amda.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await amda.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    amda.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await amda.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	 
	 
	 
	 
	 
	 
    amda.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0]
        let extension = mime.split('/')[1]
        trueFileName = attachExtension ? (filename + '.' + extension) : filename
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    amda.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await amda.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    amda.getFile = async (path) => {
        let res
		let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
		if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}

		return {
			res,
			...type,
			data
		}
    }

    return amda
}

startKingAmda()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Index.js Updated`))
	delete require.cache[file]
	require(file)
})
