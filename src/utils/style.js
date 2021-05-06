const style = {
    player: {
        banner: {
            maxWidth: 768,
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            paddingTop: 60,
            margin: '0 auto',
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
        img: {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transitionDuration: '0.2s',
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
        },
        artist: {
            color: '#aaaaaa',
            lineHeight: 1,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
            width: '100%',
            overflow: 'hidden',
            wordBreak: 'break-word',
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
            marginLeft: 30,
            marginRight: 30,
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