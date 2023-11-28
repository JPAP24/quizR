import { StyleSheet } from 'react-native';

// const colors = {
//     primaryColor: '#4255FF',
//     secondaryColor: '#F8C630',
//     lightPrimary: '#D0D4FC',
//     gray: '#A7A7A7',
//     lightGray: '#D9D9D9',
//     lightGreen: '#DAF9FD',
//     bodyColor: '#000'
// }

const sizes = {
    paragraph: 24,
    padding: 10,
    headingOne: 30,
};

const rootStyles = StyleSheet.create({

    main: {
        width: '100%',
        height: '100%',
    },

    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontFamily: 'dongleBold',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    topBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    h2: {
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'dongleBold',
        marginBottom: 1
    },

    paragraph: {
        fontSize: sizes.paragraph,
        textAlign: 'center',
        fontFamily: 'dongleRegular'
    },

    logo: {
        width: 120,
        height: 120,
    },

    buttonContainer: {
        alignItems: 'center',
        textAlign: 'center',
        width: 245,
        justifyContent: 'center',
        textTransform: 'capitalize'
    },

    mTop: {
        marginTop: '20px'
    },

    left: {
        flexDirection: 'row', // Use 'row' to align components horizontally
        alignItems: 'flex-start'
    },

    defaultPadding: {
        resizeMode: 'cover',
        padding: 18,
        backgroundColor: '#DAF9FD',
        borderRadius: 10,
        overflow: 'hidden'
    },

    headingCard: {
        justifyContent: 'justify-between',
        display: 'flex',

    },
    slide: {
        height: 200,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    title: {
        fontSize: 25,
        fontFamily: 'dongleRegular',
    },
    container: {
        flex: 1,
        height: '100%'
    }
});

export default rootStyles;