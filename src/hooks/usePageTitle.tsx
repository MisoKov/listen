import { useEffect } from 'react';

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} | Listen`;
	}, [title]);
};

export default usePageTitle;
