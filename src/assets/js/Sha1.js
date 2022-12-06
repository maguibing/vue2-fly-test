
/**
 * 获取文件SHA-1的值
 * @params file 上传的 file 
 */
 export function getFileSha1 (file) {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file); // 获取文件的ArrarBuffer
        fileReader.onload = e => {
            // console.log(e.target.result)) // 查看返回结果
            const SHA = getSha1(e.target.result);
            resolve(SHA);
        };
    })
}


/**
 * 获取文件SHA-1的值
 * @params data  读取文件的数据，ArrarBuffer格式
 */
 async function getSha1(data) {
    // 读取文件时，直接将文件读取为Arryabuffer的形式。顾不需要进行 encode as (utf-8) Uint8Array
    // 读取字符串时则需要
    // const msgUint8 = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}

