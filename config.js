function importAll(r) {
  return r.keys().map(r)
}

let passwordHints = [
  "The 1st letter is N",
  "The 2nd letter is i",
  "The 3rd letter is n",
  "The 4th letter is 4",
  "The 5th letter is B",
  "The 6th letter is o",
  "The 7th letter is 8",
  "The 8th letter is 0",
  "The 9th letter is 1",
  "The 10th letter is 9",
]

let hintImages = importAll(
  require.context("./src/images/regina-kecil", false, /\.(png|jpe?g|svg)$/)
)

module.exports = {
  zoomLink:
    "https://us04web.zoom.us/j/78749690867?pwd=cFJJc0JwNUJYT3BHaktpeVVQM3ZEQT09",
  abram: {
    name: "Me",
    messages: [""],
    images: importAll(
      require.context("./src/images/abram", false, /\.(png|jpe?g|svg)$/)
    ),
    videos: [],
  },
  families: [
    {
      name: "Mommy & Daddy",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dui magna. Duis eu placerat massa, id maximus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sodales nibh at nulla accumsan, in congue nibh convallis. Nam facilisis purus quis maximus hendrerit. Pellentesque condimentum augue vel leo fringilla gravida. Suspendisse in tristique velit. Phasellus porttitor lorem sed nunc elementum, vehicula pellentesque justo imperdiet. Aenean vel est sed dui eleifend sodales. Nulla at efficitur nunc. Maecenas varius, metus eu ultricies ullamcorper, leo ex sodales urna, sed aliquam neque mauris vel eros. Vivamus ullamcorper efficitur tincidunt.",
      ],
      images: importAll(
        require.context("./src/images/mommy-daddy", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: [],
    },
    {
      name: "Opung",
      messages: ["Hahaha karena ngebut, jadi gasempet nanya opung deh hehehe"],
      images: importAll(
        require.context("./src/images/opung", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: [],
    },
    {
      name: "Gaby, Abey, and Aldrick",
      messages: [
        "Happy 23rd Birthday, My Twinnie, My Sissy, My Cousin, My Doctor, Ka Regina Elaine Uli Hutagalung! Thankful for everything we went through together, Ka (even when you push me down the stairs LOL), and I’m wishing all the very best for you and your future plans. May God bless you with a long, happy and healthy life full of love from your family and friends, Ka. I love you SOOOO much! See you soon, Dr. Twin 🤗❤️ - Gaby",
        'Its yo birthdayyy🎂🎉🎁! Ka dutsiee selamat bertambah umur ya. Semua memori sama kaka itu ibarat Chitato karena kalau kita lagi bareng "life is never flat" EAAAAAAAAA #cornyjokes4u. Terimakasih untuk warna dalam hidupku dan banyak kenangan indah (tulus-monokrom) wishnya, semangat dalam menempuh perjalanan kedokter ya ka! Praying fo uuu, and Thank you for being my kaka for a lifetime. I love you so much - Abey',
      ],
      images: importAll(
        require.context("./src/images/gaby-dkk", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: importAll(
        require.context("./src/videos/gaby-dkk", false, /\.(mov|mp4)$/)
      ),
    },
    {
      name: "Adriel",
      messages: [
        "selamat menikmati masa-masa kesukaran ini sebelum nanti bakal menikmati hasilnya di hari-hari depan. Semangat bu dok!",
      ],
      images: importAll(
        require.context("./src/images/adriel", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: [],
    },
    {
      name: "Ipeh & Anet",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dui magna. Duis eu placerat massa, id maximus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sodales nibh at nulla accumsan, in congue nibh convallis. Nam facilisis purus quis maximus hendrerit. Pellentesque condimentum augue vel leo fringilla gravida. Suspendisse in tristique velit. Phasellus porttitor lorem sed nunc elementum, vehicula pellentesque justo imperdiet. Aenean vel est sed dui eleifend sodales. Nulla at efficitur nunc. Maecenas varius, metus eu ultricies ullamcorper, leo ex sodales urna, sed aliquam neque mauris vel eros. Vivamus ullamcorper efficitur tincidunt.",
      ],
      images: importAll(
        require.context(
          "./src/images/jennifer-dkk",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
      videos: [],
    },
    {
      name: "Tasya, Caryn, and Edgey",
      messages: [
        "Happy 23 birthday kaka Nina! My sister, my day one, role model, best listener & supporter, I hope you have an amazing day because you deserve it!!! WOW it’s been a minute since I spent ur birthday with you - but I know we’ll make it happen one day 🥰❤️ but gila bgt I’m remembering alllll our memories and weird n funny inside jokes dari cool girlz, jetakers haha, and the abey ninu kecekoki stuff lmfaooo 😂 I hope that made u giggle I know you’ve been under a lot of pressure lately from medschool, but I KNOW God is with you through it all!!!! I’ll be praying for your journey to MD ka I believe in you 🥺💕 thank you kaka for always being there for me through the toughest times, and I’m sooo glad that we could catch up and watch movies even during quarantine! Pls stay safe in the hospital & keep ur immune system up hehe ;3 anyways shoutout abang abram for doing all this - as always langgeng ya! That’s it from me ka - I LOVE YOU & MISS YOU SO MUCH. ENJOY YOUR BIRTHDAY! IT’S NINA DAY!!! WOOOHOOOO!!! 🥳🥳 - Tasya",
        "HAPPY BIRTHDAY KA NINA! I want to wish you a very good birthday, and thank you for all the moments we have spent together. When we come back to visit again I will make any cake or desert you like, I’ll do this just for you. I also want to thank you for being the person who always cares for others, because are always welcoming and make people want to be around you. So thank you for being the ka Nina who will always care for her buddies. - Caryn",
        "Happy birthday ka nina hope you have a good birthday and I hope I can vist you soon and eat at the shushi train- Eggie",
      ],
      images: importAll(
        require.context("./src/images/tasya-dkk", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: importAll(
        require.context("./src/videos/tasya-dkk", false, /\.(mov|mp4)$/)
      ),
    },
    {
      name: "Dwight & Dyvette",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dui magna. Duis eu placerat massa, id maximus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sodales nibh at nulla accumsan, in congue nibh convallis. Nam facilisis purus quis maximus hendrerit. Pellentesque condimentum augue vel leo fringilla gravida. Suspendisse in tristique velit. Phasellus porttitor lorem sed nunc elementum, vehicula pellentesque justo imperdiet. Aenean vel est sed dui eleifend sodales. Nulla at efficitur nunc. Maecenas varius, metus eu ultricies ullamcorper, leo ex sodales urna, sed aliquam neque mauris vel eros. Vivamus ullamcorper efficitur tincidunt.",
      ],
      images: importAll(
        require.context("./src/images/dwight-dkk", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: [],
    },
    {
      name: "Steven & Carrie",
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dui magna. Duis eu placerat massa, id maximus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sodales nibh at nulla accumsan, in congue nibh convallis. Nam facilisis purus quis maximus hendrerit. Pellentesque condimentum augue vel leo fringilla gravida. Suspendisse in tristique velit. Phasellus porttitor lorem sed nunc elementum, vehicula pellentesque justo imperdiet. Aenean vel est sed dui eleifend sodales. Nulla at efficitur nunc. Maecenas varius, metus eu ultricies ullamcorper, leo ex sodales urna, sed aliquam neque mauris vel eros. Vivamus ullamcorper efficitur tincidunt.",
      ],
      images: [],
      videos: [],
    },
  ],
  friends: [
    {
      name: "Afiah Salsabila",
      messages: [
        "Happy birthday uli, wish u all da best! :3 semoga makin cantik, pinter, sukses, and jago nge-burn orang XD love youuu",
      ],
      images: importAll(
        require.context("./src/images/afiah", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: importAll(
        require.context("./src/videos/afiah", false, /\.(mov|mp4)$/)
      ),
    },
    {
      name: "Matthew",
      messages: [
        "Happy birthday ulii, thank you banget udah ketawa kalo gue ketawa dan biasanya lebih kenceng dari gue jadi gue ga malu sendiri. Hope you have a blessed year ahead, and may life be kind to you like you've been kind to people around you. GBU!",
      ],
      images: [],
      videos: [],
    },
    {
      name: "Samuel Juanputra",
      messages: [
        "Happy birthday Uli!!! God bless your and your family (and your relationship ;) ) always!",
      ],
      images: [],
      videos: [],
    },
    {
      name: "Uccbaby",
      messages: [
        "Regninaaaaaaa!!!!! Happiest birthday to you my luv! Semoga selalu sehat, selalu bahagia, selalu bisa overcome your obstacles no matter how hard they may seem, I know for sure you'll be able to get through them!",
        "",
        "I've got so much love for you cheery girl ♡ so happy to be able to see you grow since 2015, and blossom! Honestly, I can already see you as a kind-hearted & loving & no-BS doctor.. and we are so close to becoming one, time flies so quickly omg. Thank you for being a ray of sunshine Reeg, medschool has been super fun because we've got you, whoop koas bonam bismillah. Thank you Reg! I love you 💜",
      ],
      images: importAll(
        require.context("./src/images/ucca", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: [],
    },
    {
      name: "Hilmen",
      messages: [
        "Uy broditta, teman seperjuangan dari masa fetus botak sampe berambut gembrot dan nanti SpJP. Selamat ulang tahun yang ke 23 atau 22 lu sama kan kek gw becanda reg he 19 agustus 97 kok apal gw keknya nomor plat mobil? ato itu rora. Semoga panjang umur, diberikan kebahagiaan dunia dan akhirat, dan dapet semua cita-citanya. Pasti bisa lah ya nebak w sapa. Aamiin",
      ],
      images: importAll(
        require.context("./src/images/hilman", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: [],
    },
    {
      name: "Deya mirello",
      messages: [
        "Reginong bebbb, happy birthday cantiiikk. Bertemu lagi dengan ulang tahunmuw tahun ini. Jadi inget ulang tahun lo tahun lalu di Melb hihi. Bayanginnya aja seneng. Walaupun tahun ini gabisa ngerayain bareng karena keabalan ini, semoga kita bisa jalan2 lg seneng2 lg. Semoga dengan pengalaman kehidupan selama 23 tahun ini bisa bertambah dewasa, bijak, dan menjadi orang yang lebih baik. Ashek HAHA. Selain itu, kita taulah ya seberapa kita berjuang sampe di titik koas ini ditambah kondisi pandemi yang suka bikin panas hati. Dari segala usaha dalam hal akademik atau apapun gue berdoa agar lo, dan semuanya sih, mendapatkan hasil yang memuaskan nantinya di waktu yang paling tepat yang udh ditentukan oleh Tuhan. Karena gue ngerasa mungkin di situasi kyk gini kita lama2 bisa jenuh, dan mungkin udah HAHA, jd mungkin yang kita perluin adalah assurance klo usaha kita gabakal sia2😊",
        "",
        "Udah ya segitu aja, ntar makin cheesy lg HAHA. Happy birthday anaknya tante Madeline cantik yang paling cantik! Ai hop tu si yu sun💋💋🥳☺️❤️❤️",
      ],
      images: [],
      videos: [],
    },
    {
      name: "Tamara Tango",
      messages: [
        "Happy birthday Regina Elaine Uli! Semoga di umur yang baru ini tambah dewasa, tambah rajin, tambah cantik. Semoga makin langgeng sama abang! Ditunggu karya karyanya bersama keluarga besar Hutagalung atau mungkin sama keluarga besar Situmorang juga ;);) p.s. youtube channel boleh la dibuat abis ini :) Semoga semakin dekat dengan Tuhan dan tercapai cita-citanya di kemudian hari. God bless you! :D",
      ],
      images: importAll(
        require.context("./src/images/tamara", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: importAll(
        require.context("./src/videos/tamara", false, /\.(mov|mp4)$/)
      ),
    },
    {
      name: "Tami",
      messages: [
        "BEBIH HAPPIEST BIRTHDAY TO YOU MY LOVEEE WELCOME TO THE 23 CLUBBBBBBBBBBBBBBB *chef's kiss* semogaaaa my babie sehat dan bahagia selaluuuu, semogaaa kamu selalu dalam lindungan Tuhan YME, diberi kemudahan dan kelancaran dalam setiap urusannyaaa, aamiin... aku harap setelah liat ini semua kamu ga bete lagi ya sama abram hehehe iya dia ilang lagi bikinin kamu website mulai dari sabtu lalu HAHAHA maaf ya ga bilang, kalo bilang nanti gagal lagi surprise nyaaa~ btw dia loh yang ngasih ide buat bikinin kamu websiteee terus rempong banget since kita pada ujian ampe stress dia takut ga kekejar tanggal 19 HAHAHAHA okeh klarif abramnya udah sampe situ aja. diiii masa korona sialan ini TOLONG YA BEB JAGA DIRIMUH. PRIORITISE YOUR LOVELY SELF MA LUV. biarkan orang berkata apa yang penting kamu aman yah! and this year may be shitty and scho hard tapi this too shall pass :):):):) SEMOGA KOASMU SELALU DILANCARKAN BU DOKTERRRRR AAMIIN dimanapun kita berada, baik kita kepisah or not, puspa akan selalu ada di sisi mu, menghantuimu :) wkwkwkwk but yes sampe tuwir ampe bercucu kita terus bareng yah! kita bikin one big fam <3 KALO ADA APA APA jangan sungkan cerita ya sayanggggg u kno I'm always here fo u mi luv~ ya gitulah intinya I LOVE U SO MUCH MY SOULMATE MA TWIN FLAME APALAH ITU WKWKWK MMMMUUUAAAHHHHH",
      ],
      images: importAll(
        require.context("./src/images/tami", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: importAll(
        require.context("./src/videos/tami", false, /\.(mov|mp4)$/)
      ),
    },
    {
      name: "Gavi",
      messages: [
        "Dengan berawal tatapan dingin, hanya mendengar dari orang lain,",
        "diri sendiri takut memulai pertemanan, diri sendiri mulai menjadi hakim.",
        "Ketika semakin mengenalmu, serasa menelan ludahku sendiri.",
        "Dari mu, tanpa sangka ku mendapat pelajaran pelajaran berharga -",
        "Ternyata menjadi seseorang yang baik terlihat menyenangkan.",
        "",
        "Terima kasih telah mengajarkanku bahwa",
        "berbaik hati kepada orang lain, meskipun sulit, bukanlah hal yang buruk,",
        "membuka diri kepada teman bukanlah hal yang membawa keresahan.",
        "Terima kasih telah menyadarkanku bahwa",
        "menyelesaikan masalah dengan orang lain bukanlah hal yang melelahkan,",
        "dan berserah dan berdoa kepada Tuhan bukanlah hal yang percumah.",
        "",
        "Banyak hal ku belajar darimu.",
        "Caramu menghadapi masalah, caramu membawa diri,",
        "Caramu mendengarkan dan menenangkan hati, ",
        "Sungguh ku kagum melihat dirimu.",
        "Terima kasih telah mau mencoba menjadi temanku.",
        "",
        "Selamat ulang tahun, Reg.",
        "Tuhan memberkatimu, selalu.",
        "Love, gav",
      ],
      images: [],
      videos: [],
    },
    {
      name: "Your Kezopreso",
      messages: [
        "ULII HAPPY BIRTHDAAAY !! Aciat tua lu WKWK. Semogaa di ulang tahun yang ke 23 ini, eh bener kan 23 HAHA semoga di umur yang ini lah ya pokoknyaa Uli terus diberi kesehatan, diberi kekuatan supaya bisa menjalani kehidupan wkwk.. Semoga FK-nya terus dilancarkaan, semoga ujiannya lulus semua dengan nilai yang bagus jugaaa. Semoga kita cepat lulus dan ga waste our parents money lagi HAHA. Semoga kita cepat mapan lah ya pokoke.. Trus semogaaa gue cepet dapet seragam amiin, atau setidaknya semoga kapan kapan kita bisa double date *bentar ini tuh doa buat lu apa buat gue sih, WKWK ANYWAY* Semoga om ernest sama tante maddy juga sehat sehat terus, dikasih umur panjang dikasih badan yang kuat biar terus2 bisa sama nina sampe nina jadi orang besar. Trussss semoga nina terus jadi garam dan terang pokoknya buat orang-orang disekeliling ninaaa, semoga Tuhan jadikan nina berkat dimanapun dan kapanpun...",
        "",
        "Di umur yang makin tua ini, semoga kita semwa bisa semakin dewasaa, semakin dilayakkan buat jadi berkat ke orang orang disekeliliing, tapi yang paling penting TETAP JADI KITA UHUYYY.. Timaacii selalu menemaniku bahkan when we are miles away, selalu dengerin rant gue yang jedar jeder, dan selalu bilang jangan minta maaf padahal emang aku ngerepotin HEHE. Semoga semua pahalamu besar disurgaa, good karma come to nina HAHAHA. But anyway, pokoknya semogaa sampai tua pun kita masih bersama, jan bosen sama gue yak WAKAKAKAK",
        "",
        "Akhir kata, wabillahi taufiq wal hidayahwassalamualaikum warahmatullahi wabarakatuh ",
        "",
        "wkwk GADENG GA SAMPAI DISINI AJA.. akhir kataaa, semoga nina tahun depan dan tahun tahun berikutnya selalu jadi nina yang nina inginkan AMIIIIINNNNN ",
        "",
        "P.S: woy kapan kita mo doa bareng ditunda mele WKWWKWKWK",
        "",
        "With love: ur kezoprezo (lu namain gue dr apa si tiba tiba muncul bae ini nama WKWK tp lucu kusuka)",
      ],
      images: importAll(
        require.context("./src/images/kezia", false, /\.(png|jpe?g|svg)$/)
      ),
      videos: importAll(
        require.context("./src/videos/kezia", false, /\.(mov|mp4)$/)
      ),
    },
    {
      name: "Bashar",
      messages: [
        "Happy birthdayy ulii!!! Selalu bahagia yaa jangan lupa. Jangan panik muluu wkwk semoga koas lulus tepat waktu jadi ga kelamaan jadi kesed. Panjang umur yaa!!",
      ],
      images: [],
      videos: [],
    },
    {
      name: "Farrel",
      messages: [
        "Uli hbd y. Semoga sehat selalu, diberi kemudahan dan kelancaean buat all the things you set out to do and wish you all the best. Have a good one!",
      ],
      images: [],
      videos: [],
    },
    {
      name: "Ping",
      messages: [
        "Happy birthday Regina! It's been far too long since I've chatted with you and the rest of ketone ^^\", which is my bad, tbh. But enough about that, I hope you'll have a blessed birthday with the people you love! And maybe even a small celebration, if allowed hehe. Good food is good for the soul. Ah, I miss the times when we'd hang out in the kantin and eat bubur ayam or soto betawi. Coming in at 7:30 am and grabbing a box of ultra milk before class starts...aha. It felt like ages ago. Time really flies. Can't believe it's been 5 years since we met and became friends. I hope clinical years is treating you well and that COVID can blow over next year. Let's pray for that (and that the government can be competent and people are compliant lol).",
      ],
      images: [],
      videos: [],
    },
  ],
  school: {},
  hints: [
    { image: hintImages[0], text: "Not here" },
    { image: hintImages[1], text: "Not here" },
    { image: hintImages[2], text: "Not here" },
    { image: hintImages[3], text: "Not here" },
    { image: hintImages[4], text: "Not here" },
    { image: hintImages[5], text: passwordHints[0] },
    { image: hintImages[6], text: "Not here" },
    { image: hintImages[7], text: "Not here" },
    { image: hintImages[8], text: "Not here" },
    { image: hintImages[9], text: "Not here" },
    { image: hintImages[10], text: "Not here" },
    { image: hintImages[11], text: "Not here" },
    { image: hintImages[12], text: passwordHints[1] },
    { image: hintImages[13], text: passwordHints[2] },
    { image: hintImages[14], text: "Not here" },
    { image: hintImages[15], text: "Not here" },
    { image: hintImages[16], text: "Not here" },
    { image: hintImages[17], text: "Not here" },
    { image: hintImages[18], text: "Not here" },
    { image: hintImages[19], text: "Not here" },
    { image: hintImages[20], text: "Not here" },
    { image: hintImages[21], text: passwordHints[3] },
    { image: hintImages[22], text: passwordHints[4] },
    { image: hintImages[23], text: "Not here" },
    { image: hintImages[24], text: "Not here" },
    { image: hintImages[25], text: "Not here" },
    { image: hintImages[26], text: "Not here" },
    { image: hintImages[27], text: "Not here" },
    { image: hintImages[28], text: passwordHints[5] },
    { image: hintImages[29], text: "Not here" },
    { image: hintImages[30], text: "Not here" },
    { image: hintImages[31], text: "Not here" },
    { image: hintImages[32], text: "Not here" },
    { image: hintImages[33], text: "Not here" },
    { image: hintImages[34], text: passwordHints[6] },
    { image: hintImages[35], text: "Not here" },
    { image: hintImages[36], text: passwordHints[7] },
    { image: hintImages[37], text: "Not here" },
    { image: hintImages[38], text: "Not here" },
    { image: hintImages[39], text: passwordHints[8] },
    { image: hintImages[40], text: "Not here" },
    { image: hintImages[41], text: "Not here" },
    { image: hintImages[42], text: "Not here" },
    { image: hintImages[43], text: "Not here" },
    { image: hintImages[44], text: passwordHints[9] },
    { image: hintImages[45], text: "Not here" },
    { image: hintImages[46], text: "Not here" },
    { image: hintImages[47], text: "Not here" },
  ],
}
