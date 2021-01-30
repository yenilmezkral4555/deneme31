const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(![""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "748948569611829298"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_1:760534107674378282>`,
'1': `<a:1_1:760534098640633866>`,
'2': `<a:2_1:760534101903147028>`,
'3': `<a:3_1:760534102356262915>`,
'4': `<a:4_1:760534101484371969>`,                       
'5': `<a:5_1:760534084975460413>`,
'6': `<a:6_1:760534045859512410>`,
'7': `<a:7_1:760534100452048917>`,
'8': `<a:8_1:760534108824010792>`,
'9': `<a:9_1:760534108086206484>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_1:760534107674378282>`,
'1': `<a:1_1:760534098640633866>`,
'2': `<a:2_1:760534101903147028>`,
'3': `<a:3_1:760534102356262915>`,
'4': `<a:4_1:760534101484371969>`,                       
'5': `<a:5_1:760534084975460413>`,
'6': `<a:6_1:760534045859512410>`,
'7': `<a:7_1:760534100452048917>`,
'8': `<a:8_1:760534108824010792>`,
'9': `<a:9_1:760534108086206484>`}[d];})}

///////
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:0_1:760534107674378282>`,
'1': `<a:1_1:760534098640633866>`,
'2': `<a:2_1:760534101903147028>`,
'3': `<a:3_1:760534102356262915>`,
'4': `<a:4_1:760534101484371969>`,                       
'5': `<a:5_1:760534084975460413>`,
'6': `<a:6_1:760534045859512410>`,
'7': `<a:7_1:760534100452048917>`,
'8': `<a:8_1:760534108824010792>`,
'9': `<a:9_1:760534108086206484>`}[d];})}
  
  
  var taglılar = 0;
let tag = "⌬";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:0_1:760534107674378282>`,
'1': `<a:1_1:760534098640633866>`,
'2': `<a:2_1:760534101903147028>`,
'3': `<a:3_1:760534102356262915>`,
'4': `<a:4_1:760534101484371969>`,                       
'5': `<a:5_1:760534084975460413>`,
'6': `<a:6_1:760534045859512410>`,
'7': `<a:7_1:760534100452048917>`,
'8': `<a:8_1:760534108824010792>`,
'9': `<a:9_1:760534108086206484>`}[d];})}

  

  
  
  
var booster = message.guild.roles.cache.get("750098656991903755").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:0_1:760534107674378282>`,
'1': `<a:1_1:760534098640633866>`,
'2': `<a:2_1:760534101903147028>`,
'3': `<a:3_1:760534102356262915>`,
'4': `<a:4_1:760534101484371969>`,                       
'5': `<a:5_1:760534084975460413>`,
'6': `<a:6_1:760534045859512410>`,
'7': `<a:7_1:760534100452048917>`,
'8': `<a:8_1:760534108824010792>`,
'9': `<a:9_1:760534108086206484>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
<a:hareketlikalpsol:760124902576881675> **Toplam Üye** •\n ${üyesayısı}  

<a:ayrenki:765526006462939147> **Aktif Üye**  •\n ${cevirimici} 

<a:like:765972667072380968> **Tagımızda Toplam ** •\n${taglılar} 

<a:mavitik:760124926991925280> **Sesteki Üye** •\n ${sessayı}  

<a:NightBoost:769571355959230474> **Sunucuyu boostlayan kişi sayısı** •\n ${booster}
`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}