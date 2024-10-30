import Giscus from '@giscus/solid';
import { createSignal, onCleanup, onMount } from 'solid-js';

// 定义主题类型
type Theme = 'light' | 'dark';
// 定义自定义事件的 detail 类型
interface StorageChangeDetail {
    key: string;
    newValue: string;
}

function PostComments() {
     // 从 localStorage 获取初始主题值，并提供默认值
    const initialTheme: Theme = (localStorage.getItem('theme') as Theme) || 'light';

    // 创建一个信号来存储当前的主题
    const [theme, setTheme] = createSignal<Theme>(initialTheme);

    // 定义一个函数来处理 storage 事件
    const handleStorageChange = (event: StorageEvent) => {
        if (event.key === 'theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
            // 更新信号中的主题值
            setTheme(event.newValue as Theme);
            console.log(event.newValue);
        }
    };

    // 创建一个代理方法来设置 localStorage 的值
    // const setLocalStorageItem = (key: string, value: string) => {
    //     localStorage.setItem(key, value);
    //     // 触发自定义事件
    //     const customEvent = new CustomEvent('localstorage-theme-change', {
    //         detail: { key, newValue: value },
    //     });
    //     window.dispatchEvent(customEvent);
    // };
    
      // 监听自定义事件
      const localstorageThemeChangeListener = (e: CustomEvent<StorageChangeDetail>) => {
        // 更新信号中的主题值
        setTheme(e.detail.newValue as Theme);
        console.log(e.detail.newValue);
    };

    // 组件挂载时添加事件监听
    onMount(() => {
        // 监听自定义事件
        window.addEventListener('localstorage-theme-change', localstorageThemeChangeListener as EventListener);

        // 也监听标准的 storage 事件
        window.addEventListener('storage', (e: StorageEvent) => {
            handleStorageChange(e);
        });
    });

    // 组件卸载时移除事件监听
    onCleanup(() => {
        window.removeEventListener('localstorage-theme-change', localstorageThemeChangeListener as EventListener);
        window.removeEventListener('storage', (e: StorageEvent) => {
            handleStorageChange(e);
        });
    });
    // 从 .env 配置文件中读取配置
    const repo = import.meta.env.PUBLIC_GISCUS_REPO;
    const repoId = import.meta.env.PUBLIC_GISCUS_REPO_ID;
    const category = import.meta.env.PUBLIC_GISCUS_CATEGORY;
    const categoryId = import.meta.env.PUBLIC_GISCUS_CATEGORY_ID;

    console.log(repo, repoId, category, categoryId)
    return (
        <Giscus
          id="comments"
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="url"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme()}
          lang="zh-CN"
          loading="lazy"
        />
    );
}

export default PostComments;