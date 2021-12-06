import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { LoginContext } from "../contexts/LoginContext";

function AddVideo() {
    const { token } = useContext(LoginContext);
    const [blackHeader, setBlackHeader] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        const scrollLisener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollLisener);

        axios.get(`${process.env.REACT_APP_BASE_URL}/categories`, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then(
            response => setCategories(response.data.data)
        ).catch(
            error => alert('erro ao buscar categoriass')
        );
    }, [token]);

    function saveVideoApi(video) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/videos`, video, {
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }
        }).then(
            response => {
                if ('message' in response && response.message === 'created successfully') {
                    alert('vídeo salvo com sucesso');
                }
            }
        ).catch(
            error => alert('erro ao salvar vídeo')
        );
    }

    function handleSubmitForm(event) {
        event.preventDefault();

        // Trata a url para pegar o ID do vídeo
        let q = videoUrl;
        if (q.includes('embed')) {
            q = q.replace('https://www.youtube.com/embed/', '');
        } else if (q.includes('watch')) {
            q = q.replace('https://www.youtube.com/watch?v=', '');
        }

        // Busca os dados do vídeo na api do youtube
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${q}&key=AIzaSyD_3F9NAvjWb7o_e__s2HsYiYo-Lr83Lw4`, {
            headers: {
                Accept: 'application/json'
            }
        }).then(
            response => {
                const videoResult = response.data.items[0].snippet
                const newVideo = {
                    'active': true,
                    'title': videoResult.title,
                    'description': videoResult.description,
                    'url_featured_image': videoResult.thumbnails.high.url,
                    'url_thumbnail_image': videoResult.thumbnails.default.url,
                    'url_video': videoUrl,
                    'categories': [
                        parseInt(selectedCategory),
                    ],
                };
                console.log(saveVideoApi(newVideo));
                // if () {
                //
                // } else {
                //     ;
                // }
            }
        ).catch(
            error => alert('erro ao buscar dados do vídeo')
        );
    }

    function handleVideoUrl(event) {
        setVideoUrl(event.target.value);
    }

    function handleSelectCategory(event) {
        setSelectedCategory(event.target.value);
    }

    return (
        <>
            <Header black={blackHeader} />
            <form onSubmit={handleSubmitForm} style={{ marginTop: '100px', marginLeft: '50px' }}>
                <input type="text" value={videoUrl} onChange={handleVideoUrl} />
                <select onChange={handleSelectCategory}>
                    <option value="">Selecione</option>
                    {categories.length > 0 && categories.map(category => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        );
                    })}
                </select>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default AddVideo;
