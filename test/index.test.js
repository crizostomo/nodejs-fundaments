const pickFile = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pickFile::', () => {
    it('iIt should be a function', () => {
        expect(typeof pickFile).toBe('function');
    })
    it('should return array with results', async () => {
        const result = await pickFile('C:\Users\diogo\OneDrive\Documentos\IT Course\Node\nodejs-fundaments\test\arquivos\texto1.md')
        expect(result).toEqual(arrayResult)
    })
})

/*test('It should be a function', () => {
    expect(typeof pickFile).toBe('function');
});*/

//It will not pass due to the absolute path