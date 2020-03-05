<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
        <VideoDetail :video="selectedVideo" ></VideoDetail>
        <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        </div>
        <!-- ************other method -->
        <!-- <VideoList v-bind:videos="videos"></VideoList> -->
        
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDJLwGobpMdhO3sdZnYyFGi4TMvsy7Xx3c';

export default {
    name: 'App',
    components:{
        SearchBar ,
        VideoList,
        VideoDetail
        },
    data(){
        return {videos:[],selectedVideo:null}
    },
    methods:{
        // onTermChange: function(){  
        // }
        onVideoSelect(video){
            // console.log(video);
            this.selectedVideo = video;
        },
        onTermChange(searchTerm){
            axios.get('https://www.googleapis.com/youtube/v3/search',{
                params:{
                    key:API_KEY,
                    type:'video',
                    part:'snippet',
                    q:searchTerm

                }
                }).then(response =>{
                    console.log(response)
                    this.videos = response.data.items}  );
        }
    }
};
</script>