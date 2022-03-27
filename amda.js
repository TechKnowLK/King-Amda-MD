/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   * Recode By Faiz.
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessage, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@danielteodoro/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const fake = '<./King Amda Developers.>'
const pasi = require('./config.js')
const { servers, yta, ytv } = require('./lib/y2mate.js')
let yts = require('yt-search')
let fetch = require('node-fetch')
const mycap = '*ඇම්ඩා තමයි හොදටම කරෙ.🤪*'

// Quick Setting, untuk lengkap cek di config.js
ownerNumber = ["94786238616@s.whatsapp.net"] // ganti ke no lu, jan apus @s.whatsapp.net nya?
modelmenu = 'image' // model menu
gapikey =  // free apikey dapuhy
testBanh = true // antilink gc setting

module.exports = kingamda = async (kingamda, m, chatUpdate) => {
    try {
  
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
      
        // var prefix = prefa ? /.[.]/gi.test(body) ? body.match(/.[.]]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
		const type = Object.keys(m.message)[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isCreator = [kingamda.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        // const ispasiya = [kingamda.user.id, ...947862386616].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == kingamda.user.id ? true : false
        const text = args.join(" ")
        const q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
	     
	    // Group
        const groupMetadata = m.isGroup ? await kingamda.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	    const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : 1
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const groupMembers = m.isGroup ? groupMetadata.participants : ''
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
       kingamda.createMessage = async (jid, content, options) => {
            return await generateWAMessage(jid, content, {...options,userJid: kingamda.authState.creds.me.id,upload: kingamda.waUploadToServer})
            }
			
			
	
			
            
        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return kingamda.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return kingamda.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return kingamda.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return kingamda.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return kingamda.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        const reply = (teks) => {
            kingamda.sendMessage(from, teks, text, {quoted:m})
        }
// cart arsky
		const troli = {
                         "key": {
                         "remoteJid": "status@broadcast", 
                         "participant": '0@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 0, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `${botName}`, 
                         "orderTitle": '<./King Amda Developers>', 
                         "sellerJid": '94763398959@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
							  
							  const peksaya = {
                         "key": {
                         "remoteJid": "94763398959-1633244783@g.us", 
                         "participant": '94763398959@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 2022, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `Hello ${pushname}! get greetings from the owner.`, 
                         "orderTitle": 'get greetings from owner King Amda', 
                         "sellerJid": '94763398959@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
		    kingamda.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            let mime = (message).mimetype || ''
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

//? tiktok Button 
        //tiktokbutton
        const tiktokbutton = async (id, text1, desc1, yo) => {
            var tiktokbutton = await generateWAMessageFromContent(from, {
                "templateMessage": {
                  "hydratedTemplate": {
                    ...yo.message,
                    "hydratedContentText": text1,
                    "hydratedFooterText": desc1,
                    "hydratedButtons": [
                    //   {
                    //     "urlButton": {
                    //       "displayText": "My GitHub",
                    //       "url": "https://www.github.com/Kingamdabota"
                    //     }
                    //   },
                    //   {
                    //     "callButton": {
                    //       "displayText": "Call Me",
                    //       "phoneNumber": "94763398959"
                    //     }
                    //   },
                      {
                        "quickReplyButton": {
                          "displayText": "Orginal",
                          "id": `.jdnfjdbhshjbefyewsjdsnfedswweifhs ${q}`
                        }
                      },
                      {
                        "quickReplyButton": {
                          "displayText": "With Out Watermark",
                          "id": `.jdnfjdbhshjbefyewsjdsnfedswweifhs2 ${q}`,
                        }
                      },
                      {
                        "quickReplyButton": {
                          "displayText": "Audio",
                          "id": `.jdnfjdbhshjbefyewsjdsnfedswweifhs3 ${q}`
                        }
                      }
                    ]
                  }
                }
              }, {})
            kingamda.relayMessage(id, tiktokbutton.message, { messageId: tiktokbutton.key.id })
            }           


//? ytmp3 Template
        //songtemplate
        const songtemplate = async (id, text1, desc1, yo) => {
            var songtemplate = await generateWAMessageFromContent(from, {
                "templateMessage": {
                  "hydratedTemplate": {
                    ...yo.message,
                    "hydratedContentText": text1,
                    "hydratedFooterText": desc1,
                  }
                }
              }, {})
            kingamda.relayMessage(id, songtemplate.message, { messageId: songtemplate.key.id })
            }



//? Play Button 
        //playbutton
        const playbutton = async (id, text1, desc1, yo) => {
            var playbuttons = await generateWAMessageFromContent(from, {
                "templateMessage": {
                  "hydratedTemplate": {
                    ...yo.message,
                    "hydratedContentText": text1,
                    "hydratedFooterText": desc1,
                    "hydratedButtons": [
                    //   {
                    //     "urlButton": {
                    //       "displayText": "My GitHub",
                    //       "url": "https://www.github.com/Kingamdabota"
                    //     }
                    //   },
                    //   {
                    //     "callButton": {
                    //       "displayText": "Call Me",
                    //       "phoneNumber": "94763398959"
                    //     }
                    //   },
                      {
                        "quickReplyButton": {
                          "displayText": "Audio",
                          "id": `.ytmp3 ${q}`
                        }
                      },
                      {
                        "quickReplyButton": {
                          "displayText": "Video",
                          "id": `.ytmp4 ${q}`,
                        }
                      }
                    ]
                  }
                }
              }, {})
            kingamda.relayMessage(id, playbuttons.message, { messageId: playbuttons.key.id })
            }

		
        //SendButton5
        const sendButton5 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
        //   {
        //     "urlButton": {
        //       "displayText": "My GitHub",
        //       "url": "https://www.github.com/Kingamdabota"
        //     }
        //   },
        //   {
        //     "callButton": {
        //       "displayText": "Call Me",
        //       "phoneNumber": "94763398959"
        //     }
        //   },
          {
            "quickReplyButton": {
              "displayText": "PING!",
              "id": `${prefix}ping`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script Bot",
              "id": `${prefix}sc`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
kingamda.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
// menu
// textMenu


menu = `
*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*
    *👑 KING AMDA BOT-MD 👑*
*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*

*USER INFO*

*නම* ➔ ${pushname}
*නම්බර් එක* ➔ ${m.sender}

┌──⫸ *Group Menu*
│
│◈ ${prefix}hidetag (teks)
│◈ ${prefix}add (tag)
│
└─────────────⫸

┌──⫸ *Downloader Menu*
│
│◈ ${prefix}ytmp3 (url)
│◈ ${prefix}ytmp4 (url)
│◈ ${prefix}play (සින්දුවෙ නම)
│◈ ${prefix}fb (url)
│◈ ${prefix}tiktok (url)
│
└─────────────⫸

┌──⫸ *Search Menu*
│
│◈ ${prefix}pinterest
│◈ ${prefix}tr (query)
│◈ ${prefix}gimg (query)
│
└─────────────⫸

┌──⫸ *Random Menu*
│
│◈ ${prefix}loli
│◈ ${prefix}qr (query)
│◈ ${prefix}neko
│◈ ${prefix}base64
│◈ ${prefix}base32
│◈ ${prefix}base64decode
│◈ ${prefix}base32decode
│◈ ${prefix}covid (query)
│◈ ${prefix}shorturl (link)
│
└─────────────⫸

┌──⫸ *Main Menu*
│
│◈ ${prefix}ping
│◈ ${prefix}owner
│◈ ${prefix}menu
│◈ ${prefix}delete
│◈ ${prefix}sticker
│◈ ${prefix}sgif
│◈ ${prefix}tomp4
│◈ ${prefix}tourl
│
└─────────────⫸

┌──⫸ *Owner Menu*
│
│◈ ${prefix}chat [option]
│◈ ${prefix}public
│◈ ${prefix}self
│◈ ${prefix}setmenu
│◈ ${prefix}setppbot
│
└─────────────⫸
`

        // Public & Self
        if (!kingamda.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        switch(command) {
       case 'menu':
       case 'help':
       case 'amda':

       //TODO: Image eka venas karanna one

       if (modelmenu == 'image') {
       await sendButton5(from, menu, fake, await kingamda.createMessage(from, {image: {url: "./lib/kingamda.jpg", caption: menu},}))
       } 

    //    else if (modelmenu == 'image') 

    //    {
    //    await sendButton5(from, menu, fake, await kingamda.createMessage(from, {image: {url: "./lib/amda.jpg", caption: menu}}))
    //    } 
       break
	   
	   case 'tr':
       case 'translate': {
		   if (!q) return m.reply('*කමාන්ඩ් එක Use කරන්නෙ ඔහොම නෙවෙයි අනෙ...😌* \n\n*[Ex-]*\n   .tarnslate en දැන් සැපද')
			   Tr = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/translate?translateto=sinhala&text=${q}&apikey=kingamda`)
		   translatedtext = `*King Amda Bot Translator🔎*\n

Orignal Text : _${Tr.result.result.original_text}_
Original Text Language : _${Tr.result.result.original_text_lang}_
Translated Text : _${Tr.result.result.translated_text}_
Translated Text Language : _${Tr.result.result.translated_text_lang}_`
		   
		   kingamda.sendMessage(m.chat, {text: translatedtext})
		   break
	   }
	   
	case 'setantilink':
    case 'antilink': {
		if (!q) return m.reply('🤠ඔහොම නෙවෙයි Antilink on කරන්නද off කරන්නද කියලා ගහන්න.\n\n Ex-\n    .antilink on/off')
		    	if (!isGroup) return
if (!isGroupAdmins) return m.reply(mess.admin)

if (q == 'on') tesBanh = true
if (q == 'off') testBanh = false
m.reply(`*සාර්තනව Antilink ${q} කරන ලදි.😌*`)
// else {
//                             m.reply(`Masukan opts :\n⭔on\n⭔ioff`)
//                             }
break
}
	
//         case 'yts':{
//             if (!q) return m.reply('*සර්ච් කරන්නෙ මොකක්ද ඔනෙ කියලා දෙන්න🙂*\n\n*[Ex-]*\n   .yts den sepada')
//             // if (!isUrl) return
//        yt = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/yt/search2?query=${q}&apikey=kingamda`)
//        yts = `*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*
//        *🎥  YT SEARCH🎥*
// *《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*`
//         ytr = `*◪  නම ➜* ${yt.result[0].title}`
//        //  jasjus = `YTMP3 DOWNLOADER\nTitle : ${yt.result.title}\nSize : ${yt.result.size}\nDesc : ${yt.result.desc}\nQuality : ${yt.result.quality}\n\n*Mohon tunggu.. kurang lebih 1 menit*`
//        kingamda.sendMessage(m.chat, {text:ytr}, {quoted: m})
//        sendFileFromUrl(m.chat, yt.result.dl_link, m)
     




//         // kingamda.sendMessage(id, templateMessage, /*{text: yts2}, {quoted: m}*/ )
//         // // sendFileFromUrl(m.chat, yt.result.url, m)
//         break
//         }       


	   case 'ytmp3':{
		   if (!q) return m.reply('*ලින්ක් එකක් දෙම්න🙂*')
			   if (!isUrl) return
		  yt = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/download/ytmp3?url=${q}&apikey=kingamda`)
		  samaremassage = `*🎥 YTMP3 DOWNLOADER*\n\n*◪  නම ➜* ${yt.result.title}\n\n*◪  ලින්ක් එක ➜* ${yt.result.dl_link}`
          //  jasjus = `YTMP3 DOWNLOADER\nTitle : ${yt.result.title}\nSize : ${yt.result.size}\nDesc : ${yt.result.desc}\nQuality : ${yt.result.quality}\n\n*Mohon tunggu.. kurang lebih 1 menit*`
       
          
          await songtemplate(from, samaremassage, fake, await kingamda.createMessage(from, {image: {url: `${yt.result.thumb}`, caption: samaremassage},}))
        //   kingamda.sendMessage(m.chat, {text: '*_Downloading Your Song_ 🕓*'}, {quoted: m})
        //   kingamda.sendMessage(m.chat, {image: {url: `${yt.result.title}`},caption: "Hi it's button message",})
        setTimeout(function(){
            kingamda.sendMessage(m.chat, {text: '*_Downloading Your Song_ 🕓*'}, {quoted: m})
            setTimeout(function(){
                kingamda.sendMessage(m.chat, {text: '*_Uploading Your Song_ 😌*'}, {quoted: m})
                setTimeout(function(){
                    sendFileFromUrl(m.chat, yt.result.dl_link, m)

                },2); 

            }, 1500); 

        }, 500);  
        //  sendFileFromUrl(m.chat, yt.result.dl_link, m)
		  break
	   }
	   
	   case 'ytmp4':
       case 'video':{
		   if (!q) return m.reply('*ලින්ක් එකක් දෙම්න🙂*')
			   if (!isUrl) return
		  yt = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/download/ytmp4?url=${q}&apikey=kingamda`)
		  samaremassage = `*🎥 YTMP4 DOWNLOADER*\n\n*◪  නම ➜* ${yt.result.title}\n\n*◪  File size එක ➜* ${yt.result.filesizeF}\n\n*◪  ලින්ක් එක ➜* ${yt.result.dl_link}`
          //  jasjus = `YTMP3 DOWNLOADER\nTitle : ${yt.result.title}\nSize : ${yt.result.size}\nDesc : ${yt.result.desc}\nQuality : ${yt.result.quality}\n\n*Mohon tunggu.. kurang lebih 1 menit*`
       
          
          await songtemplate(from, samaremassage, fake, await kingamda.createMessage(from, {image: {url: `${yt.result.thumb}`, caption: samaremassage},}))
        //   await songtemplate(from, samaremassage, fake, await kingamda.createMessage(from, {video: {url: `${yt.result.dl_link}`, caption: samaremassage},}))
        
          //   kingamda.sendMessage(m.chat, {text: '*_Downloading Your Song_ 🕓*'}, {quoted: m})
        //   kingamda.sendMessage(m.chat, {image: {url: `${yt.result.title}`},caption: "Hi it's button message",})
        setTimeout(function(){
            kingamda.sendMessage(m.chat, {text: '*_Downloading Your Video_ 🕓*'}, {quoted: m})
            setTimeout(function(){
                kingamda.sendMessage(m.chat, {text: '*_Uploading Your Video_ 😌*'}, {quoted: m})
                setTimeout(function(){
                    // sendFileFromUrl(m.chat, yt.result.dl_link, m)

                },0); 

            }, 1500); 

        }, 500);  
        cap = "*ඇම්ඩා තමයි හොදටම කරෙ..🤪*"
        await songtemplate(from, cap, fake, await kingamda.createMessage(from, {video: {url: `${yt.result.dl_link}`, caption: cap},}))
		  break
	   }
	
	//   case 'kbbi':
	//   if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
	// 	  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	//   biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	//   kingamda.sendMessage(m.chat, {text: biba}, {quoted: m})
	//   break
	
	  
       case 'hidetag':
       case 'invisibletag':

                if (!isGroup) return m.reply(mess.group)
                kingamda.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
	   
	   case 'play':
       case 'song': {
		   if (!q) return m.reply('*කො සින්දුවේ නම සගො😂*\n\n*[Ex]-*\n   .song podda')
			   
		  yts = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/yt/search?query=${q}&apikey=kingamda`)
		  playmassage = `*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*
      *🎧සින්දුවේ විස්තරේ🎧*
*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*


*◪  නම ➜* ${yts.result.result.title}\n
*◪  ID එක ➜* ${yts.result.result.id}\n
*◪  විව්ස් ➜* ${yts.result.result.views}\n
*◪  කාල සීමාව ➜* ${yts.result.result.duration}\n
*◪  උඩුගතකල දිනය ➜* ${yts.result.result.uploadedAt}
➽─────────────────❥


┌──⫸
│
│ *<./KING AMDA DEVELOPERS.>*
│ _Made❤️By_
│    *_Pasindu Samara$ingha😌_*
│
└─────────────⫸`

          
          await playbutton(from, playmassage, fake, await kingamda.createMessage(from, {image: {url: `${yts.result.result.bestThumbnail.url}`, caption: playmassage},}))
		//   kingamda.sendMessage(m.chat, {text: djasjus}, {quoted: m})
          
		//   sendFileFromUrl(m.chat, yt.url, m)
		  break
	   }

                        //     case 'setmenu':
                        //     if (!q) return m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                        //     if (q == "gif") {
                        //     modelmenu = "gif"
                        //     m.reply("Done change menu to "+q)
                        //     } 

                        //     else if (q == "image") {
                        //   modelmenu = "image"
                        //     m.reply("Done change menu to "+q)
                        //     } 

                        //     else {
                        //     m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                        //     }
                        //     break
	    case 'sc': {
	    m.reply('*<./KING AMDA DEVELOPERS.>*\n\n```Owner```➜ \n*😌 _Pasindu Samara$ingha_*\n\n```King Amda Md Bot Link```➜ \n*🤪 _www.github.com/Kingamdabota/KingAmda-MD_*\n\n\n```Follow Me On Github```➜\n*_www.github.com/Kingamdabota_*\n\n```Subscribe My Youtube```➜\n*_https://www.youtube.com/channel/UC7Tzl9sfmJa_cQS_nPgKtHQ_*' )
            }
            break
     

			   
			   
			   
			   
    
               case 'sticker': case 's': case 'stickergif': case 'sgif': {
		if (!quoted) throw `ඔහොම නෙවෙයි අනේ.. 🤦‍♂️\n\nපොටො/විඩියො එකකට කැප්ශන් එකක් විදිහට හරි රිප්ලයි එකක් විදිහට හරි දෙන්න ${prefix + command}`
		
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await kingamda.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('🤣සමුසෙ හිතුවද සකො මෙකෙ ෆිල්ම් වගෙ ස්ටිකර් හදන්න පුලුවන් කියලා.\n\nඔල්මාද බඩුවක්නෙ ඔයා. අඩුම තප්පර 10 වගෙ විඩියො එකක් දෙන්න')
		    let media = await quoted.download()
		    let encmedia = await kingamda.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else {
              throw '*ඔහොම නෙවෙයි අනේ.. 🤦‍♂️*\n\n```පොටො/විඩියො එකකට කැප්ශන් එකක් විදිහට හරි රිප්ලයි එකක් විදිහට හරි දෙන්න```'
        	}
	    }
	    break
	    case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kingamda.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kingamda.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kingamda.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kingamda.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await kingamda.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
			
			
			
            case 'chat': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    kingamda.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    kingamda.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    kingamda.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    kingamda.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    kingamda.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    kingamda.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    kingamda.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await kingamda.groupInviteCode(m.chat)
                kingamda.sendText(m.chat, `*${groupMetadata.subject} Wa Group Link*\n\n*🙂ලින්ක් එක ➜* \n*https://chat.whatsapp.com/${response}*`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                kingamda.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
			
            break
			
			// case 'hilih': {
			// 	if (!q) return reply ('masukan query')
			// 		dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
			// 	kingamda.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
			// 	break
			// }
			
			
				   
			 
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kingamda.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kingamda.sendMessage(m.chat, { image: buffer }, { quoted: troli})
                    fs.unlinkSync(ran)
                })
            }
            break
			
			
			
			
			
			
			case 'gimg':{
				if (!q) return m.reply('masukan query!')
					m.reply(`*${q} Images සොයමින් පවති.😁*`)
					G = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/gimg?query=${q}&apikey=kingamda`)
                    cap = '*ඇම්ඩා තමයි හොදටම කරෙ🤪*'
				kingamda.sendMessage(m.chat, { image: { url: G.result.result.img1 }, caption: cap })
                kingamda.sendMessage(m.chat, { image: { url: G.result.result.img2 }, caption: cap })
                kingamda.sendMessage(m.chat, { image: { url: G.result.result.img3 }, caption: cap })
                kingamda.sendMessage(m.chat, { image: { url: G.result.result.img4 }, caption: cap })
                kingamda.sendMessage(m.chat, { image: { url: G.result.result.img5 }, caption: cap })
				.catch((err) => {
                    for (let x of ownerNumber) {
                        reply(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                   m.reply(`*මොනාත ඒ හෙව්වෙ 🤧 එහෙම එකක් හොයගන්න නැ සගො*`)
			})
				break
				
			}
            case 'pinterest': {
                m.reply(mess.wait)
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                kingamda.sendMessage(m.chat, { image: { url: result }, caption: '*Media Url එක* ➜ '+result })
            }
            break
            // case 'wallpaper': {
            //     m.reply(mess.wait)
            //     anu = await wallpaper(q)
            //     result = anu[Math.floor(Math.random(), anu.length)]
            //     kingamda.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            // }
            break
// 			case 'iklan': 
// var templatetun = proto.Message.fromObject({
//                        templateMessage: proto.TemplateMessage.fromObject({
//                                hydratedTemplate: {
//                                  hydratedContentText: `Pasang Iklan Hubungi wa.me/6285793887010`,

//                                     hydratedButtons: [{
//                                         urlButton: {
//                                             displayText: 'Info Selengkapnya',
//                                             url: 'https:/'
//                                         }
//                                     }, {
//                                         callButton: {
//                                             displayText: 'Hubungi FaizGans',
//                                             phoneNumber: '6285793887010s.whatsapp.net'
//                                         }
//                                     }, {
// 									"quickReplyButton": {
// 										"displayText": 'Chat Owner',
// 										"id": "#owner"
// 									},
// 									"index": 2
// 								},
// 								{
// 									"quickReplyButton": {
// 										"displayText": undefined,
// 										"id": "#tos"
// 									},
// 									"index": 3
// 								},
// 								{
// 									"quickReplyButton": {
// 										"displayText": undefined,
// 										"id": "NAN"
// 									}
//                      }]
//                                 }
//                             })
//                         })
// var p = generateWAMessageFromContent(from, templatetun, {})
//                         await kingamda.relayMessage(from, p.message, { messageId: p.key.id });
// break
// 			 case 'lirik':
// 				   if (!q) return reply('masukan nama lagu!')
// 					   m.reply('mencari lirik...')
// 				   var Lirik = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/liriklagu?query=${q}&apikey=sQMpXbHimbTkxGC`)
// kingamda.sendMessage(from, {text: Lirik.result}, {quoted: m})
// break
//             case 'wikimedia': {
//                 m.reply(mess.wait)
//                 anu = wikimedia(q)
//                 result = anu[Math.floor(Math.random(), anu.length)]
//                 kingamda.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
//             }
//             break
//             case 'porno': case 'porn': case 'bokep': {
//  m.reply('Bokeppp tross')
// 			}
//             break
//             case 'hentai': {
//                 m.reply('Bokeppp tross')
// 				/*
//                 anu = await hentai()
//                 result = anu[Math.floor(Math.random(), anu.length)]
//                 kingamda.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: troli })
//           */
// 		  }
//             break
//             case 'quotesanime': case 'quoteanime': {
//                 m.reply(mess.wait)
//                 anu = await quotesAnime()
//                 result = anu[Math.floor(Math.random(), anu.length)]
//                 kingamda.sendMessage(m.chat, { text: `~_${result.quotes}\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}` })
//             }
//             break
            case 'public': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                kingamda.public = true
                m.reply('*_බොට් Public ආකාරයෙන් ක්‍රියා කරයි😇_*')
            }
            break
            case 'self':
            case 'privet': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                kingamda.public = false
                m.reply('*_බොට් Privet ආකාරයෙන් ක්‍රියා කරයි😇_*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*\n             *BOT INFOMATION*\n*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*\n\n
*🚀Response වේගය* ${latensi.toFixed(4)} _Second_\n\n*⚙️බොට් ️ ධාවන කාලය* - ${runtime(process.uptime())}

*📦 Server විස්තරෙ*\n
*RAM එක* : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*_NodeJS Memory Usaage_*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `*_Total CPU Usage_*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = `BEGIN:VCARD\n` // metadata of the contact card
                    + `VERSION:3.0\n` 
                    + `N:;${ownerName};;;`
                    + `FN:${ownerName}\n` // full name
                    + `ORG:Owner - ${ownerName};\n` // the organization of the contact
                    + `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerForOwnerCommand}\n` // WhatsApp ID + phone number
                    + `END:VCARD`
                kingamda.sendMessage(m.chat, { contacts: { displayName: '<./KINGAMDA DEVELOPERS.>', contacts: [{ vcard }] } }, )
            }
            break
		// 	case 'kick': {
		// 		 if (!isCreator) 
                 
                
  		// if (!m.isGroup) return m.reply(mess.group)
		// 		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		// 		await kingamda.groupParticipantsUpdate(m.chat, [users], 'remove')
		// 		m.reply(`Sukses kick ${users}`)
		// 		}
		// 		break
		// 	case 'add': {
		// 		//  if (!isGroupAdmins) return m.reply(mess.admin)
        //         if (!isCreator) return m.reply(mess.owner)
  		// if (!m.isGroup) return m.reply(mess.group)
		// 		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		// 		await kingamda.groupParticipantsUpdate(m.chat, [users], 'add')
		// 		m.reply(`sukses add ${users}`)
				
		// 		}
		// 		break
		// 	case 'promote': {
		// 		  if (!isGroupAdmins) return m.reply(mess.admin)
        //         if (!isCreator) return m.reply(mess.botAdmin)
  		// if (!m.isGroup) return m.reply(mess.group)
		// 		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		// 		await kingamda.groupParticipantsUpdate(m.chat, [users], 'promote')
		// 		m.reply('sukses promote!')
		// 		}
		// 		break
		// 	case 'demote': {
		// 		 if (!isGroupAdmins) return m.reply(mess.admin)
        //         if (!isBotAdmins) return m.reply(mess.botAdmin)
  		// if (!m.isGroup) return m.reply(mess.group)
		// 		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		// 		await kingamda.groupParticipantsUpdate(m.chat, [users], 'demote')
		// 		m.reply('sukses demote!')
		// 		}
		// 		break
				
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
			case 'userpp':
            case 'pp':     {
         if (!m.quoted) return m.reply('*Dp එක ගන්න ඔනෙ කෙනාගෙ මැසෙජ් එකකට රිප්ලයි කරන්න🥰*')
        pimg = await kingamda.profilePictureUrl(m.quoted.sender, 'image')
        kingamda.sendMessage(from, { image: { url: pimg},caption: mycap})
       }
break
			
           case 'loli': 
           case 'neko': 
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,mycap,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('*🤔මොකක් හරි අව්ලක් වහෙ සාගො.. තව ටිකකින් ට්‍රයි කරන්න*'())
                })
		break

//TODO: Me tika Add karanna 
                case 'tiktok':{
                    if (!q) return m.reply("*ලින්ක් එකක් දිපියාව් මට..😅*")
                    if (!isUrl) return m.reply("*ගම්ජා ගහලද ඉන්නෙ සගො හරි හමන් ලින්ක් එකක් දෙම්න මට.😅*")
                    let tiktokinfo = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/download/tiktok2?url=${q}&apikey=kingamda`)
                        tiktokcap=`*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*
   *😌TIKTOK DOWNLOADER😌*
*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*


┌──⫸ *කර්තෘ විස්තර*
│
│ *◪ නම ➜* ${tiktokinfo.result.author_details.name}
│ *◪ Following ➜* ${tiktokinfo.result.author_details.following}
│ *◪ ලයික් ගණන ➜* ${tiktokinfo.result.author_details.like}
│ *◪ විඩියො ගණන ➜* ${tiktokinfo.result.author_details.videos}
│
└─────────────⫸

┌──⫸ *විඩියො විස්තර*
│
│ *◪ Quality එක ➜* ${tiktokinfo.result.video_details.quality}
│ *◪ Duration එක ➜* ${tiktokinfo.result.video_details.duration}
│ *◪ ලයික් ගණන ➜* ${tiktokinfo.result.video_details.like}
│ *◪ ShareCount එක ➜* ${tiktokinfo.result.video_details.shareCount}
│ *◪ CommentCount එක ➜* ${tiktokinfo.result.video_details.commentCount}
│ *◪ සින්දුවෙ නම ➜* ${tiktokinfo.result.music_data.musicName}
│
└─────────────⫸
┌──⫸
│
│ *<./KING AMDA DEVELOPERS.>*
│ _Made❤️By_
│    *_Pasindu Samara$ingha😌_*
│
└─────────────⫸
`


await tiktokbutton(from, tiktokcap, fake, await kingamda.createMessage(from, {image: {url: `${tiktokinfo.result.image_url}`, caption: tiktokcap},}))                    

                }
                break

                case 'jdnfjdbhshjbefyewsjdsnfedswweifhs':{
                    let tiktokdlori = await fetchJson(`https://kingamda-restapi.herokuapp.com/api/download/tiktok2?url=${q}&apikey=kingamda`)
                    // sendFileFromUrl(m.chat, tiktokdlori.result.video_url, m)
                    
                    await songtemplate(from, mycap, fake, await kingamda.createMessage(from, {video: {url: `${tiktokdlori.result.video_url}`, caption: mycap},}))
                }
                break
                case 'jdnfjdbhshjbefyewsjdsnfedswweifhs2':{
                    let tiktokdlori = `https://api.dapuhy.xyz/api/socialmedia/tiktoknowm?url=${q}&apikey=OSuDZukzPWE49ro`
                    // sendFileFromUrl(m.chat, tiktokdlori.result.nowatermark, m)
                    
                    await songtemplate(from, mycap, fake, await kingamda.createMessage(from, {video: {url: `${tiktokdlori}`, caption: mycap},}))
                }
                // case 'jdnfjdbhshjbefyewsjdsnfedswweifhs3':{
                //     let tiktokdlori = await fetchJson(`https://zenzapi.xyz/downloader/musically?url=${q}&apikey=amda`)
                //     sendFileFromUrl(m.chat, tiktokdlori.result.audio_original)
                //     // await songtemplate(from, mycap, fake, await kingamda.createMessage(from, {audio: {url: `${tiktokdlori.result.audio}`},}))
                // }
                break





                case 'fb':
                    case'facebook':{
                        if(!q) return m.reply('*කො ලින්ක් එක සගො*')
                      let fblink  = await fetchJson(`https://api.xteam.xyz/dl/fbv2?url=${q}&APIKEY=da5fb2b73ae3e451`) 
                        fbdl = `*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*
   *😌FACEBOOK DOWNLOADER😌*
*《《────── « ⋅ʚ♡ɞ⋅ » ─────》》*

*◪ Title එක ➜* ${fblink.result.meta.title}
*◪ Link එක ➜* ${fblink.result.url[0].source}
*◪ File Type එක ➜* ${fblink.result.meta.name}

┌──⫸
│
│ *<./KING AMDA DEVELOPERS.>*
│ _Made❤️By_
│    *_Pasindu Samara$ingha😌_*
│
└─────────────⫸
`
                    // sendFileFromUrl(m.chat, fblink.result.url[0].url)
                      await songtemplate(from, fbdl, fake, await kingamda.createMessage(from, {image: {url: `${fblink.result.thumb}`, caption: fbdl},}))
                      setTimeout(function(){
                      kingamda.sendMessage(m.chat, {text: '*_Downloading Your Video_ 🕓*'}, {quoted: m})
                      setTimeout(function(){
                          kingamda.sendMessage(m.chat, {text: '*_Uploading Your Video_ 😌*'}, {quoted: m})
                      },1000);
                    },1000);
                      sendFileFromUrl(m.chat, fblink.result.url[0].url)
                    }
                    break

                case 'base64':
                    case 'base32':{
                    if(!q)return m.reply(`ඔයාගෙ Text එක Enter කරන්න.`)
                    let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/base?apikey=kingamda&type=${command}&encode=${q}`)
                   let basetext = `*Original Text:* ${url.result.string}
*Encoded Text :*  ${url.result.encode}`
                    await songtemplate(from,basetext,  fake, await kingamda.createMessage(from, {text: basetext }))
                }
                break

                case 'decodebase64': {
                    if(!q)return m.reply(`ඔයාගෙ Text එක Enter කරන්න.`)

                    let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/base?apikey=kingamda&type=base64&decode=${q}`)
                    basetext = `*Encrypted Text:* ${url.result.enc}\n
*Decoded Text :*  ${url.result.string}`
                    await songtemplate(from,basetext,  fake, await kingamda.createMessage(from, {text: basetext }))
                }
                break
                   case 'decodebase32': {
                    if(!q)return m.reply(`ඔයාගෙ Text එක Enter කරන්න.`)

                    let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/base?apikey=kingamda&type=base32&decode=${q}`)
                    basetext = `*Encrypted Text:* ${url.result.enc}\n
*Decoded Text :* ${url.result.string}`
                    await songtemplate(from,basetext,  fake, await kingamda.createMessage(from, {text: basetext }))
                }
                break
                case 'covid' : {
                    if(!q)return m.reply(`*ඔන රට දෙන්න*\n\n.covid LK`)

                    let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/info/covidinfo?country=${q}&apikey=kingamda`)
                    let mourl = await fetchJson (`https://covid19.mathdro.id/api/countries/${q}/confirmed`)
                    covidmassage = `《《────── « ⋅ʚ♡ɞ⋅ » ─────》》
      😷COVID INFOMATION😷
《《────── « ⋅ʚ♡ɞ⋅ » ─────》》

*◪ රට ➜* ${mourl[0].countryRegion}
*◪ රොගින් ගණන ➜* ${url.result.confirmed.value}
*◪ සුව උවන් ගණන ➜* ${url.result.recovered.value}
*◪ මරණ ගණන ➜* ${url.result.deaths.value}
`
                    await songtemplate(from, covidmassage, fake, await kingamda.createMessage(from, {image: {url: `https://www.e-ir.info/wp-content/uploads/2021/01/covid-4948866_1920.jpg`, caption: covidmassage},}))
                }
                break

                case 'shorturl': {
                    if(!q)return m.reply(`*ලින්ක් එකක් දෙම්න සගො😋*`)
                    let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/short/tinyurl?url=${q}&apikey=kingamda`)
                    shortmas=`*◪ Original Url ➜* ${url.result.original_url}
                    
*◪ Short Url ➜* ${url.result.short_url}
`
await songtemplate(from, shortmas, fake, await kingamda.createMessage(from, {image: {url: `https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png`, caption: shortmas},}))
              
                }break

                case 'removebg':{
                    let media = await kingamda.downloadAndSaveMediaMessage(quoted)
                    if (/image/.test(mime)) {
                        let anu = await TelegraPh(media)
                        let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/removebg?url=${anu}&apikey=kingamda`)
                        await songtemplate(from, mycap, fake, await kingamda.createMessage(from, {image: {url: `${url.result.result.url}`, caption: mycap},}))
                      
                        // sendFileFromUrl(m.chat, url.result.result.url)
                    } }
                    break

                    case 'emoji2img':{
                            let url = await fetchJson (`https://kingamda-restapi.herokuapp.com/api/maker/emoji2png?apikey=kingamda&text=${q}`)
                            await songtemplate(from, mycap, fake, await kingamda.createMessage(from, {image: {url: `${url.result}`, caption: mycap},}))
                          
                            // sendFileFromUrl(m.chat, url.result.result.url)
                        } 
                        break

                    case 'qr':    {
                        let url = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=c4c4c4&bgcolor=2a302c&margin=18&format=png&data=${q}`
                        sendFileFromUrl(m.chat, url,)
                        // await songtemplate(from, mycap, fake, await kingamda.createMessage(from, {image: {url: `${url}`, caption: mycap},}))
                    }
                    break
        //   case 'waifu': 
        //   case 'shinobu': 
        //   case 'megumin': 
        //   case 'bully': 
        //   case 'cuddle': 
        //   case 'cry': 
        //   case 'hug': 
        //   case 'awoo': 
        //   case 'kiss': 
        //   case 'lick': 
        //   case 'pat': 
        //   case 'smug': 
        //   case 'bonk': 
        //   case 'yeet': 
        //   case 'blush': 
        //   case 'smile': 
        //   case 'wave': 
        //   case 'highfive': 
        //   case 'handhold': 
        //   case 'nom': 
        //   case 'bite': 
        //   case 'glomp': 
        //   case 'slap': 
        //   case 'kill': 
        //   case 'happy': 
        //   case 'wink': 
        //   case 'poke': 
        //   case 'dance': 
        //   case 'cringe': 
        //       await m.reply('Loading..')
        //       let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        //         await sendFileFromUrl(from,waifu.url,`Done`,m)
        //         .catch((err) => {
        //             for (let x of ownerNumber) {
        //                 sendMess(x, `${prefix+command} Error: \n\n` + err)
        //             }
        //             m.reply('Sedang Error !! Coba Beberapa Saat Lagi')
        //         })
		// break
                            
                  
            /*case 'tes': case 'menu': case 'help': case '?': {
                anu = `
┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ ${prefix}pinterest
│⭔ ${prefix}wallpaper
│⭔ ${prefix}wikimedia
│
└───────⭓

┌──⭓ *Random Menu*
│
│⭔ ${prefix}porno
│⭔ ${prefix}hentai
│⭔ ${prefix}quotesanime
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu
│⭔ ${prefix}delete
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│
└───────⭓
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/kingamdam.mp4') }, { upload: kingamda.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/kingamda-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kingamda.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator && !m.key.fromMe) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator && !m.key.fromMe) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && !m.key.fromMe) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
      if (budy.includes('https://chat.whatsapp.com/')) {
      	if (tesBanh == false) return
      	if (!isGroup) return
if (isGroupAdmins) return reply('The group boss is free, right? :v')
kingamda.sendMessage(m.chat, {text: 'Link Detected, Kick User!'}, {quoted: troli})
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
await kingamda.groupParticipantsUpdate(m.chat, [kic], 'remove')
	  }	  

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Amda.js Updated`))
	delete require.cache[file]
	require(file)
})
