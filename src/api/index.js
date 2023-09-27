import axios from "@/api/request";

/**
 * 获取热榜分类数据
 * @param {string} type 热榜分类名称
 * @param {boolean} isNew 是否拉取最新数据
 * @returns
 */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDataWithRetry(apiEndpoint, maxRetries = 3, delay = 3000) {
    let retries = 0;

    while (retries < maxRetries) {
        try {
            const data = await axios.get(apiEndpoint, { timeout: 6000 });  // 5 seconds timeout
            return data;  // Directly return the data since the response interceptor in "@/api/request" only returns response.data
        } catch (error) {
            console.error(`Attempt ${retries + 1} failed. Retrying...`);
            retries++;
            if (retries < maxRetries) {
                await sleep(delay);
            } else {
                throw new Error("Max retries reached");
            }
        }
    }
}

export const getHotLists = async (type, isNew) => {
    const endpoint = `/${type}${isNew ? "/new" : "/"}`;
    return await fetchDataWithRetry(endpoint);
};
