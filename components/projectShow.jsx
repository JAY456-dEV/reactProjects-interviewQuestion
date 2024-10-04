import React from 'react';
import MultiSelect from './multiSelectSearch/multiSelect';
import PasswordGen from './passwordGen/passwordGen';
import TrelloMain from './trello/trelloMain';
import Expense from './expensetracker/expense';
import InfiniteScroll from './infinteScroll/infinteScroll';
import Breadcrumbs from './breadcrumbs/bread';
import Home from './breadcrumbs/Home';
import Productlisting from './breadcrumbs/productlisting';
import ProductDetail from './breadcrumbs/productDetail';
import Toast from './toastContainer/toast';
import Accordin from './collapsibleAccordin/Accordin';
import Avatar from './avatarPicker/avatar';
import Progress from './progressBarwithAdd/progress';
import ToastNew from './toast/toast';
import Practice from './test/practice';
import PasswordLength from './passwordLength/passwordLength';
import FormValidation from './formValidation/formvalidation';
import SelectGrid from './selectingGrid/selectGrid';
import CryptoConverter from './cryptoConverter/cryptoConverter';
import NestedComment from './NeastedComments/NestedComment';
import JobBoard from './JobBoardGreatFrontEnd/jobBoard';
import LikeButton from './LikeButton/likeButton';
import TrafficLight from './trafficLight/TrafficLight';
import DigitalClock from './DigitalClock/digitalClock';
import DataTable from './dataTable/dataTable';
import ColorMatchBox from './colormatchingBox/colorMatchBox';
import PollWidget from './PollWidget/pollWidget';
import ImgGallary from './ImgGallary/imgGallary';
import Otp from '../components/OtpEnter/otp'
import { useParams } from 'react-router-dom';
import ProgressBar from './progressBar/progressbar';
import Pagination from './pagination/pagination';

const componentsArray = [
    { id: 1, name: 'Otp', component: <Otp /> },
    { id: 2, name: 'MultiSelect', component: <MultiSelect /> },
    { id: 3, name: 'PasswordGen', component: <PasswordGen /> },
    { id: 5, name: 'Expense', component: <Expense /> },
    { id: 6, name: 'InfinteScroll', component: <InfiniteScroll /> },
    // { id: 7, name: 'Breadcrumbs', component: <Breadcrumbs /> },
    { id: 8, name: 'Home', component: <Home /> },
    { id: 9, name: 'ProductListing', component: <Productlisting /> },
    { id: 11, name: 'Toast', component: <Toast /> },
    { id: 12, name: 'Accordin', component: <Accordin /> },
    { id: 13, name: 'Avatar', component: <Avatar /> },
    // { id: 15, name: 'ToastNew', component: <ToastNew /> },
    { id: 16, name: 'Practice', component: <Practice /> },
    { id: 17, name: 'PasswordLength', component: <PasswordLength /> },
    { id: 18, name: 'FormValidation Using Formik', component: <FormValidation /> },
    { id: 19, name: 'SelectGrid', component: <SelectGrid /> },
    { id: 20, name: 'CryptoConverter', component: <CryptoConverter /> },
    { id: 21, name: 'NestedComment', component: <NestedComment /> },
    { id: 22, name: 'JobBoard', component: <JobBoard /> },
    { id: 23, name: 'LikeButton', component: <LikeButton /> },
    { id: 24, name: 'TrafficLight', component: <TrafficLight /> },
    { id: 25, name: 'DigitalClock', component: <DigitalClock /> },
    { id: 26, name: 'DataTable', component: <DataTable /> },
    { id: 27, name: 'ColorMatchBox', component: <ColorMatchBox boxSize={12} /> },
    // { id: 28, name: 'PollWidget', component: <PollWidget /> },
    { id: 29, name: 'ImgGallary', component: <ImgGallary /> },
    { id: 30, name: 'progressbar', component: <ProgressBar /> },
    { id: 31, name: 'pagination', component: <Pagination /> },
];

function ProjectShow() {

    const param = useParams()
    console.log(param)
    return (
        <div className=''>
            {
                componentsArray.map((item) => {
                    if (item.id == param.id) {
                        return (
                            <div className='mb-10'>
                                <div className='flex bg-white text-black w-fit gap-2  py-2 px-6 m-5'>
                                    <p className='projectShowTitle common-nameStyle'>{item.id} :</p>
                                    <p className='projectShowName common-nameStyle'>{item.name}</p>
                                </div>
                                <div className='flex justify-center h-screen'>
                                    {item.component}
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default ProjectShow;
