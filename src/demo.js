window.player = null
document.addEventListener('DOMContentLoaded', () => {
    window.player = new ncplayer('player',{
        playlist:[
            {
                file:'https://fsxikvammvwv14470411.cdn.ntruss.com/hls/9N5-iJ4f9tdzE6D708PTmg__/vod/j5IXBfIJ83893893_,1080,720,480,p.mp4.smil/master.m3u8',
                poster:'https://wnfosehmzhuc12665447.cdn.ntruss.com/thumb/sample_thumb.png?type=m&w=1024&h=760&ttype=jpg',
                description: {
                    title: "네이버클라우드 소개 영상",
                    created_at: "2023.07.13",
                    profile_name: "네이버클라우드",
                    profile_image: "https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202208/d127c8db642716d84b3201f1d152e52a.png"
                },
            }
        ],
        autostart:true,
        muted:true,
        keyboardShortcut:true,
        controls:true,
        lang:'ko',
        ui:"all",
        controlBtn:{
            play:true,
            fullscreen:true,
            volume:true,
            times:true,
            pictureInPicture:true,
            setting:true,
            subtitle:false,
        },
        progressBarColor:"#ff0000",
        controlActiveTime:39000,
        startMutedInfoNotVisible:false,
        aspectRatio:"16/9",
        objectFit:"contain",
        playRateSetting:[0.5,0.75,1,1.5,2],
        autoPause:false,
        repeat:false,
        lowLatencyMode:true
    })
});
