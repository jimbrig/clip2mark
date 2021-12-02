import clipboard from 'clipboardy';

export const readClip = (contents) => {

    var out = clipboard.read()

    return [
        {
            contents: '${out}' 
            // isPublic
        }
    ]
}