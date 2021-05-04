const style = {
    player: {
        signOut: {
            position: 'absolute',
            right: 8,
            top: 8,
            borderRadius: '50%',
            paddingTop: 18,
            paddingBottom: 18,
            paddingLeft: 0,
            paddingRight: 0,
        },
        nowPlaying: {
            fontSize: 16,
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 8,
            textTransform: 'uppercase',
        },
        nextUp: {
            fontSize: 16,
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 8,
        },
    },
    playerDetails: {
        title: {
            color: '#eeeeee',
            fontSize: 28,
            marginTop: 14,
            marginBottom: 14,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
        },
        artist: {
            color: '#aaaaaa',
            fontSize: 20,
            marginTop: 14,
            marginBottom: 14,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4)',
        },
        img: {
            height: 300,
            width: 300,
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
    },
    playerControls: {
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
}

export const playerStyles = style.player
export const playerDetailsStyles = style.playerDetails
export const playerControlsStyles = style.playerControls