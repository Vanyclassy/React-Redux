import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
	articles: [
		{
		id: 1,
		title: "Post 1",
		body: "Есть два варианта прохождения практической части — вы можете писать код в браузере, либо настроить окружение для разработки на компьютере.",
		},
		{
			id: 2,
			title: "Post 2",
			body: "Редуктор - это чистая функция, которая получает состояние хранилища и действие в качестве параметров, а затем возвращает обновленное состояние.",
		},
		{
			id: 3,
			title: "Post 3",
			body: "Магазин Redux - это место, где находится состояние вашего приложения.",
		},
	],
}

const reducer = (
	state: ArticleState = initialState,
	action: ArticleAction
): ArticleState => {
	switch (action.type) {
		case actionTypes.ADD_ARTICLE:
			const newArticle: IArticle = {
				id: Math.random(),
				title: action.article.title,
				body: action.article.body,
			}
			return {
				...state,
				articles: state.articles.concat(newArticle),
			}
		case actionTypes.REMOVE_ARTICLE:
			const updatedArticles: IArticle[] = state.articles.filter(
				article => article.id !==action.article.id
			)
			return {
				...state,
				articles: updatedArticles,
			}
	}
	return state
}

export default reducer
