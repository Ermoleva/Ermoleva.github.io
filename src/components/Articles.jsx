import styles from "../styles/Articles.module.scss"
import {useState, useEffect} from "react";

export default function Articles(props) {
    let {userId} = props;
    let [articles, setArticles] = useState([]);
    // const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (parseInt(userId) > 0) {
            fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
                .then((response) => response.json())
                .then((data) => {
                    setArticles(data);
                });
        } else {
            setArticles([]);
        }
    }, [userId]);

    const Accordion = ({ title, info }) => {
        const [isOpen, setOpen] = useState(false);
        return (
            <article >

                <h6
                    className={styles.text__title} onClick={() => setOpen(!isOpen)}
                >
                    {title}
                </h6>
                <div className={[ isOpen ? styles.text__info_show : styles.text__info_hide]}>
                    <div className={styles.text__info}>{info}</div>
                </div>
            </article>
        );
    };




    return (articles.length > 0 ?
        <div className={styles.container}>
            <div className={styles.articles}>
                {articles.map((article) => {
                    return (
                        <Accordion data-id={article.id} title={article.title} info={article.body}>
                            {article.body}
                        </Accordion>
                        // <article data-id={article.id}>
                        //     <h6 className={styles.text__title} onClick={() => setOpen(!isOpen)}>{article.title}</h6>
                        //     <div className={[ isOpen ? styles.text__info_show : styles.text__info_hide]}>
                        //     <p className={styles.text__info}>{article.body}</p>
                        //     </div>
                        // </article>

                    );
                })};
            </div>
        </div>
        : <></>);
}