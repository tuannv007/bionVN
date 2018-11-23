export const testAction = (username) => {
    return {
        type: 'TESTACTION',
        payload: {
            name: username
        }
    }
}