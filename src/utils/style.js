const style = {
    player: {
        nav: {
            justifyContent: 'space-between',
        },
        main: {
            maxWidth: 768,
            flexDirection: 'column',
            position: 'relative',
            paddingTop: 25,
            margin: '0 auto',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        },
        playlist: {
            maxWidth: 'calc(100% - 75px)',
        },
        signOut: {
            position: 'absolute',
            right: 8,
            top: 8,
            height: 60,
            width: 60,
            borderRadius: '50%',
            paddingTop: 18,
            paddingBottom: 18,
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    albumcover: {
        cover: {
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
        },
        img: {
            backgroundColor: '#393E46',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transitionDuration: 0.2,
            borderRadius: 4,
        },
        loader: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#393E4680',
            transitionDuration: 0.5,
        },
    },
    songdetails: {
        details: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
        title: {
            color: '#eeeeee',
            lineHeight: 1,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
            width: '100%',
            overflow: 'hidden',
            wordBreak: 'break-word',
            textAlign: 'center',
        },
        artist: {
            color: '#aaaaaa',
            lineHeight: 1,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
            width: '100%',
            overflow: 'hidden',
            wordBreak: 'break-word',
            textAlign: 'center',
        },
    },
    playerControls: {
        controls: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        playBtn: {
            padding: 20,
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.8), -4px -4px 10px rgba(255, 255, 255, 0.4), inset -4px -4px 10px rgba(0, 0, 0, 0.8), inset 4px 4px 10px rgba(255, 255, 255, 0.4)',
            backgroundColor: '#ffce00',
        },
        otherBtns: {
            color: '#888888',
        },
    },
    playlist: {
        selectedRow: {
            cursor: 'pointer',
            backgroundColor: '#FFD369',
            color: '#393E46',
        },
        row: {
            cursor: 'pointer',
        },
        icon: {
            textAlign: 'center',
            width: 40,
            color: 'inherit',
        },
        title: {
            width: 'calc(50% - 20px)',
            wordBreak: 'break-word',
            color: 'inherit',
        },
        artists: {
            width: 'calc(50% - 20px)',
            wordBreak: 'break-word',
            color: 'inherit',
        },
    },
}

export const playerStyles = style.player
export const albumcoverStyles = style.albumcover
export const songdetailsStyles = style.songdetails
export const playerControlsStyles = style.playerControls
export const playlistStyles = style.playlist