(function()
{
 "use strict";
 var Global,FPish,Option,Config,Button,Server,CacheModel,LocationDetails,Dao,UserOAuthData,TimeDAO,DateDAO,PricingDAO,EventOrCourseCreation,EventOrCourseDetailsDAO_WebcastDetails,ExtraInformationDAO,CreateEventOrCourseType,Booking,CourseEventType,ConferenceSupport,ConferenceExtraDAO,JobLocation,JobOffer,SchoolInfo,WorkPlaceInfo,Company,UserData,UserOptionsDAO,UserAnnounceOptionsDAO,TrainerAnnounceOptionsDAO,Comment,DeveloperProfileUpdateData,DeveloperSearch,JS,FormletHelpers,Enhance,Utils,UI,Client,Table,Server$1,Client$1,ToggleControl,SC$1,Formlet,Controls,Enhance$1,Tags,Client$2,Db,Types,CompanyInfo,ClientInfo,Enhance$2,WithJQueryUITabs,WithJQueryUIAccordion,FormletHelpers$1,FwoL,FwL,ReadOnly,FwLS,ReadOnly$1,FwS,Widget,Client$3,OrganizationImageHoverSummary,UserImageHoverSummary,TagCloudUnfoldButton,SC$2,Twitter,Client$4,Location,Client$5,ShowLocation,ShowMap,Company$1,Client$6,ConferenceDatesControl,TurnGroupToConferenceControl,CreateOrEditGroupFormByUsername,GroupSubscribeControl,ContactForm,SubmitProposalForm,AddRemoveAdminsForm,ProductUserRemoveControl,ProductUserAddControl,ProductPrivacyControl,CreateProductControl,DeleteProductControl,Author,Client$7,RequestAuthorAccount,Upload,PhotoUploadFrameControl,UserControls,Login,CreateAuthorProfileButtonByUsername,ResetPassword,Invitations,AssignUsersToOrganization,OptionsForm,AnnounceOptionsForm,PasswordForm,OAuthProvidersForm,AuthorProfileForm,UserProfileForm,DeveloperForm,UserTagsForm,Registration,RegistrationControl,Forum,Client$8,NewTopicForm,ContactButtonConfiguration,ContactButtonControl,DeleteButton,ReplyEditButton,MarkAsAnswerButton,ScoreDisplay,EditTagsButton,FoldComment,ProductTag,AddProductButton,Blog,Client$9,ScrapeButtonForUsername,ShowHideArticleButton,EditTagsButton$1,EditOrCreateBlogEntryControl,BreakdownMonthTitle,Inbox,Client$10,NewPrivateMessageControl,InboxControl,Courses,Client$11,ActivateCourseControl,AcceptRejectProposalButtonsControl,Forms,Default,CreateEventOrCourseControlForUsername,TrainingBookingInternals,Client$12,ScheduledTrainingBooking,OnSiteTrainingBooking,OnlineTrainingBooking,PastOnlineTrainingBooking,Trainings,Client$13,OrderSummary,CourseSummaries,PayPal,Controls$1,PayPalButton,UserProfile,Client$14,LatestTweetsControl,MakeAuthorControl,SearchDeveloper,Client$15,DeveloperSearchResultPanelControl,DeveloperSearchControl,SC$3,Search,Widget$1,FullTextSearch,TopMenuSearchForm,SC$4,Zone,Client$16,AdminForm,Invite,Client$17,SelectContactsControl,JSRedirectControl,ContactListDataControl,Login$1,Client$18,AddUserOAuthProviderControl,RegisterControl,ActivateAccount,Client$19,Admin,Client$20,Credit,Client$21,JobView,Client$22,JobOffer$1,Client$23,SC$5,JobListing,Client$24,SubscribeDeveloerSearch,Client$25,Reset,SC$6,Client$26,LoginContent,FPish_Templates,WebSharper,Operators,IntelliFactory,Runtime,List,Seq,Strings,Formlets,Formlet$1,Html,Client$27,Tags$1,Operators$1,Attr,EventsPervasives,Concurrency,Web,Enhance$3,FormContainerConfiguration,Padding,Controls$2,Reactive,HotStream,JQueryUI,AutocompleteConfiguration,Autocomplete,Arrays,DialogConfiguration,Dialog,Unchecked,Body,Control,FSharpEvent,Data,Formlets$1,Base,FormletProvider,TinyMce,Controls$3,FormButtonConfiguration,AdvancedHtmlEditorConfiguration,Collections,FSharpSet,BalancedTree,FSharpMap,Map,Twitter$1,UserModule,Client$28,Timeline,Client$29,Layout,LabelConfiguration,Remoting,AjaxRemotingProvider,JQueryUI$1,Controls$4,Lazy,Tabs,Markup,FPishMarkup,Client$30,Markdown,Client$31,Common,google,visualization,Google,Visualization,Events,ColumnChart,Util,String,UI$1,Next,Var,Forms$1,View,View$1,AttrModule,AttrProxy,Doc,Form,Pervasives,Validation,ErrorMessage;
 Global=window;
 FPish=Global.FPish=Global.FPish||{};
 Option=FPish.Option=FPish.Option||{};
 Config=FPish.Config=FPish.Config||{};
 Button=Config.Button=Config.Button||{};
 Server=Button.Server=Button.Server||{};
 CacheModel=FPish.CacheModel=FPish.CacheModel||{};
 LocationDetails=CacheModel.LocationDetails=CacheModel.LocationDetails||{};
 Dao=FPish.Dao=FPish.Dao||{};
 UserOAuthData=Dao.UserOAuthData=Dao.UserOAuthData||{};
 TimeDAO=Dao.TimeDAO=Dao.TimeDAO||{};
 DateDAO=Dao.DateDAO=Dao.DateDAO||{};
 PricingDAO=Dao.PricingDAO=Dao.PricingDAO||{};
 EventOrCourseCreation=Dao.EventOrCourseCreation=Dao.EventOrCourseCreation||{};
 EventOrCourseDetailsDAO_WebcastDetails=EventOrCourseCreation.EventOrCourseDetailsDAO_WebcastDetails=EventOrCourseCreation.EventOrCourseDetailsDAO_WebcastDetails||{};
 ExtraInformationDAO=EventOrCourseCreation.ExtraInformationDAO=EventOrCourseCreation.ExtraInformationDAO||{};
 CreateEventOrCourseType=EventOrCourseCreation.CreateEventOrCourseType=EventOrCourseCreation.CreateEventOrCourseType||{};
 Booking=Dao.Booking=Dao.Booking||{};
 CourseEventType=Booking.CourseEventType=Booking.CourseEventType||{};
 ConferenceSupport=Dao.ConferenceSupport=Dao.ConferenceSupport||{};
 ConferenceExtraDAO=ConferenceSupport.ConferenceExtraDAO=ConferenceSupport.ConferenceExtraDAO||{};
 JobLocation=Dao.JobLocation=Dao.JobLocation||{};
 JobOffer=Dao.JobOffer=Dao.JobOffer||{};
 SchoolInfo=Dao.SchoolInfo=Dao.SchoolInfo||{};
 WorkPlaceInfo=Dao.WorkPlaceInfo=Dao.WorkPlaceInfo||{};
 Company=Dao.Company=Dao.Company||{};
 UserData=Dao.UserData=Dao.UserData||{};
 UserOptionsDAO=Dao.UserOptionsDAO=Dao.UserOptionsDAO||{};
 UserAnnounceOptionsDAO=Dao.UserAnnounceOptionsDAO=Dao.UserAnnounceOptionsDAO||{};
 TrainerAnnounceOptionsDAO=Dao.TrainerAnnounceOptionsDAO=Dao.TrainerAnnounceOptionsDAO||{};
 Comment=Dao.Comment=Dao.Comment||{};
 DeveloperProfileUpdateData=Dao.DeveloperProfileUpdateData=Dao.DeveloperProfileUpdateData||{};
 DeveloperSearch=FPish.DeveloperSearch=FPish.DeveloperSearch||{};
 JS=FPish.JS=FPish.JS||{};
 FormletHelpers=JS.FormletHelpers=JS.FormletHelpers||{};
 Enhance=FormletHelpers.Enhance=FormletHelpers.Enhance||{};
 Utils=FPish.Utils=FPish.Utils||{};
 UI=Utils.UI=Utils.UI||{};
 Client=UI.Client=UI.Client||{};
 Table=Client.Table=Client.Table||{};
 Server$1=UI.Server=UI.Server||{};
 Client$1=Server$1.Client=Server$1.Client||{};
 ToggleControl=Client$1.ToggleControl=Client$1.ToggleControl||{};
 SC$1=Global.StartupCode$FPish$Ui=Global.StartupCode$FPish$Ui||{};
 Formlet=Utils.Formlet=Utils.Formlet||{};
 Controls=Formlet.Controls=Formlet.Controls||{};
 Enhance$1=Formlet.Enhance=Formlet.Enhance||{};
 Tags=Utils.Tags=Utils.Tags||{};
 Client$2=Tags.Client=Tags.Client||{};
 Db=FPish.Db=FPish.Db||{};
 Types=Db.Types=Db.Types||{};
 CompanyInfo=Types.CompanyInfo=Types.CompanyInfo||{};
 ClientInfo=Types.ClientInfo=Types.ClientInfo||{};
 Enhance$2=FPish.Enhance=FPish.Enhance||{};
 WithJQueryUITabs=Enhance$2.WithJQueryUITabs=Enhance$2.WithJQueryUITabs||{};
 WithJQueryUIAccordion=Enhance$2.WithJQueryUIAccordion=Enhance$2.WithJQueryUIAccordion||{};
 FormletHelpers$1=FPish.FormletHelpers=FPish.FormletHelpers||{};
 FwoL=FormletHelpers$1.FwoL=FormletHelpers$1.FwoL||{};
 FwL=FormletHelpers$1.FwL=FormletHelpers$1.FwL||{};
 ReadOnly=FwL.ReadOnly=FwL.ReadOnly||{};
 FwLS=FormletHelpers$1.FwLS=FormletHelpers$1.FwLS||{};
 ReadOnly$1=FwLS.ReadOnly=FwLS.ReadOnly||{};
 FwS=FormletHelpers$1.FwS=FormletHelpers$1.FwS||{};
 Widget=FPish.Widget=FPish.Widget||{};
 Client$3=Widget.Client=Widget.Client||{};
 OrganizationImageHoverSummary=Client$3.OrganizationImageHoverSummary=Client$3.OrganizationImageHoverSummary||{};
 UserImageHoverSummary=Client$3.UserImageHoverSummary=Client$3.UserImageHoverSummary||{};
 TagCloudUnfoldButton=Client$3.TagCloudUnfoldButton=Client$3.TagCloudUnfoldButton||{};
 SC$2=Global.StartupCode$FPish$Widget=Global.StartupCode$FPish$Widget||{};
 Twitter=FPish.Twitter=FPish.Twitter||{};
 Client$4=Twitter.Client=Twitter.Client||{};
 Location=FPish.Location=FPish.Location||{};
 Client$5=Location.Client=Location.Client||{};
 ShowLocation=Client$5.ShowLocation=Client$5.ShowLocation||{};
 ShowMap=Client$5.ShowMap=Client$5.ShowMap||{};
 Company$1=FPish.Company=FPish.Company||{};
 Client$6=Company$1.Client=Company$1.Client||{};
 ConferenceDatesControl=Client$6.ConferenceDatesControl=Client$6.ConferenceDatesControl||{};
 TurnGroupToConferenceControl=Client$6.TurnGroupToConferenceControl=Client$6.TurnGroupToConferenceControl||{};
 CreateOrEditGroupFormByUsername=Client$6.CreateOrEditGroupFormByUsername=Client$6.CreateOrEditGroupFormByUsername||{};
 GroupSubscribeControl=Client$6.GroupSubscribeControl=Client$6.GroupSubscribeControl||{};
 ContactForm=Client$6.ContactForm=Client$6.ContactForm||{};
 SubmitProposalForm=Client$6.SubmitProposalForm=Client$6.SubmitProposalForm||{};
 AddRemoveAdminsForm=Client$6.AddRemoveAdminsForm=Client$6.AddRemoveAdminsForm||{};
 ProductUserRemoveControl=Client$6.ProductUserRemoveControl=Client$6.ProductUserRemoveControl||{};
 ProductUserAddControl=Client$6.ProductUserAddControl=Client$6.ProductUserAddControl||{};
 ProductPrivacyControl=Client$6.ProductPrivacyControl=Client$6.ProductPrivacyControl||{};
 CreateProductControl=Client$6.CreateProductControl=Client$6.CreateProductControl||{};
 DeleteProductControl=Client$6.DeleteProductControl=Client$6.DeleteProductControl||{};
 Author=FPish.Author=FPish.Author||{};
 Client$7=Author.Client=Author.Client||{};
 RequestAuthorAccount=Client$7.RequestAuthorAccount=Client$7.RequestAuthorAccount||{};
 Upload=FPish.Upload=FPish.Upload||{};
 PhotoUploadFrameControl=Upload.PhotoUploadFrameControl=Upload.PhotoUploadFrameControl||{};
 UserControls=FPish.UserControls=FPish.UserControls||{};
 Login=UserControls.Login=UserControls.Login||{};
 CreateAuthorProfileButtonByUsername=UserControls.CreateAuthorProfileButtonByUsername=UserControls.CreateAuthorProfileButtonByUsername||{};
 ResetPassword=UserControls.ResetPassword=UserControls.ResetPassword||{};
 Invitations=UserControls.Invitations=UserControls.Invitations||{};
 AssignUsersToOrganization=UserControls.AssignUsersToOrganization=UserControls.AssignUsersToOrganization||{};
 OptionsForm=UserControls.OptionsForm=UserControls.OptionsForm||{};
 AnnounceOptionsForm=UserControls.AnnounceOptionsForm=UserControls.AnnounceOptionsForm||{};
 PasswordForm=UserControls.PasswordForm=UserControls.PasswordForm||{};
 OAuthProvidersForm=UserControls.OAuthProvidersForm=UserControls.OAuthProvidersForm||{};
 AuthorProfileForm=UserControls.AuthorProfileForm=UserControls.AuthorProfileForm||{};
 UserProfileForm=UserControls.UserProfileForm=UserControls.UserProfileForm||{};
 DeveloperForm=UserControls.DeveloperForm=UserControls.DeveloperForm||{};
 UserTagsForm=UserControls.UserTagsForm=UserControls.UserTagsForm||{};
 Registration=FPish.Registration=FPish.Registration||{};
 RegistrationControl=Registration.RegistrationControl=Registration.RegistrationControl||{};
 Forum=FPish.Forum=FPish.Forum||{};
 Client$8=Forum.Client=Forum.Client||{};
 NewTopicForm=Client$8.NewTopicForm=Client$8.NewTopicForm||{};
 ContactButtonConfiguration=Client$8.ContactButtonConfiguration=Client$8.ContactButtonConfiguration||{};
 ContactButtonControl=Client$8.ContactButtonControl=Client$8.ContactButtonControl||{};
 DeleteButton=Client$8.DeleteButton=Client$8.DeleteButton||{};
 ReplyEditButton=Client$8.ReplyEditButton=Client$8.ReplyEditButton||{};
 MarkAsAnswerButton=Client$8.MarkAsAnswerButton=Client$8.MarkAsAnswerButton||{};
 ScoreDisplay=Client$8.ScoreDisplay=Client$8.ScoreDisplay||{};
 EditTagsButton=Client$8.EditTagsButton=Client$8.EditTagsButton||{};
 FoldComment=Client$8.FoldComment=Client$8.FoldComment||{};
 ProductTag=Client$8.ProductTag=Client$8.ProductTag||{};
 AddProductButton=Client$8.AddProductButton=Client$8.AddProductButton||{};
 Blog=FPish.Blog=FPish.Blog||{};
 Client$9=Blog.Client=Blog.Client||{};
 ScrapeButtonForUsername=Client$9.ScrapeButtonForUsername=Client$9.ScrapeButtonForUsername||{};
 ShowHideArticleButton=Client$9.ShowHideArticleButton=Client$9.ShowHideArticleButton||{};
 EditTagsButton$1=Client$9.EditTagsButton=Client$9.EditTagsButton||{};
 EditOrCreateBlogEntryControl=Client$9.EditOrCreateBlogEntryControl=Client$9.EditOrCreateBlogEntryControl||{};
 BreakdownMonthTitle=Client$9.BreakdownMonthTitle=Client$9.BreakdownMonthTitle||{};
 Inbox=FPish.Inbox=FPish.Inbox||{};
 Client$10=Inbox.Client=Inbox.Client||{};
 NewPrivateMessageControl=Client$10.NewPrivateMessageControl=Client$10.NewPrivateMessageControl||{};
 InboxControl=Client$10.InboxControl=Client$10.InboxControl||{};
 Courses=FPish.Courses=FPish.Courses||{};
 Client$11=Courses.Client=Courses.Client||{};
 ActivateCourseControl=Client$11.ActivateCourseControl=Client$11.ActivateCourseControl||{};
 AcceptRejectProposalButtonsControl=Client$11.AcceptRejectProposalButtonsControl=Client$11.AcceptRejectProposalButtonsControl||{};
 Forms=Client$11.Forms=Client$11.Forms||{};
 Default=Forms.Default=Forms.Default||{};
 CreateEventOrCourseControlForUsername=Client$11.CreateEventOrCourseControlForUsername=Client$11.CreateEventOrCourseControlForUsername||{};
 TrainingBookingInternals=FPish.TrainingBookingInternals=FPish.TrainingBookingInternals||{};
 Client$12=TrainingBookingInternals.Client=TrainingBookingInternals.Client||{};
 ScheduledTrainingBooking=FPish.ScheduledTrainingBooking=FPish.ScheduledTrainingBooking||{};
 OnSiteTrainingBooking=FPish.OnSiteTrainingBooking=FPish.OnSiteTrainingBooking||{};
 OnlineTrainingBooking=FPish.OnlineTrainingBooking=FPish.OnlineTrainingBooking||{};
 PastOnlineTrainingBooking=FPish.PastOnlineTrainingBooking=FPish.PastOnlineTrainingBooking||{};
 Trainings=FPish.Trainings=FPish.Trainings||{};
 Client$13=Trainings.Client=Trainings.Client||{};
 OrderSummary=Client$13.OrderSummary=Client$13.OrderSummary||{};
 CourseSummaries=FPish.CourseSummaries=FPish.CourseSummaries||{};
 PayPal=FPish.PayPal=FPish.PayPal||{};
 Controls$1=PayPal.Controls=PayPal.Controls||{};
 PayPalButton=PayPal.PayPalButton=PayPal.PayPalButton||{};
 UserProfile=FPish.UserProfile=FPish.UserProfile||{};
 Client$14=UserProfile.Client=UserProfile.Client||{};
 LatestTweetsControl=Client$14.LatestTweetsControl=Client$14.LatestTweetsControl||{};
 MakeAuthorControl=Client$14.MakeAuthorControl=Client$14.MakeAuthorControl||{};
 SearchDeveloper=FPish.SearchDeveloper=FPish.SearchDeveloper||{};
 Client$15=SearchDeveloper.Client=SearchDeveloper.Client||{};
 DeveloperSearchResultPanelControl=Client$15.DeveloperSearchResultPanelControl=Client$15.DeveloperSearchResultPanelControl||{};
 DeveloperSearchControl=Client$15.DeveloperSearchControl=Client$15.DeveloperSearchControl||{};
 SC$3=Global.StartupCode$FPish$SearchDeveloper=Global.StartupCode$FPish$SearchDeveloper||{};
 Search=FPish.Search=FPish.Search||{};
 Widget$1=Search.Widget=Search.Widget||{};
 FullTextSearch=Widget$1.FullTextSearch=Widget$1.FullTextSearch||{};
 TopMenuSearchForm=Widget$1.TopMenuSearchForm=Widget$1.TopMenuSearchForm||{};
 SC$4=Global.StartupCode$FPish$Search=Global.StartupCode$FPish$Search||{};
 Zone=FPish.Zone=FPish.Zone||{};
 Client$16=Zone.Client=Zone.Client||{};
 AdminForm=Client$16.AdminForm=Client$16.AdminForm||{};
 Invite=FPish.Invite=FPish.Invite||{};
 Client$17=Invite.Client=Invite.Client||{};
 SelectContactsControl=Client$17.SelectContactsControl=Client$17.SelectContactsControl||{};
 JSRedirectControl=Client$17.JSRedirectControl=Client$17.JSRedirectControl||{};
 ContactListDataControl=Client$17.ContactListDataControl=Client$17.ContactListDataControl||{};
 Login$1=FPish.Login=FPish.Login||{};
 Client$18=Login$1.Client=Login$1.Client||{};
 AddUserOAuthProviderControl=Client$18.AddUserOAuthProviderControl=Client$18.AddUserOAuthProviderControl||{};
 RegisterControl=Client$18.RegisterControl=Client$18.RegisterControl||{};
 ActivateAccount=FPish.ActivateAccount=FPish.ActivateAccount||{};
 Client$19=ActivateAccount.Client=ActivateAccount.Client||{};
 Admin=FPish.Admin=FPish.Admin||{};
 Client$20=Admin.Client=Admin.Client||{};
 Credit=FPish.Credit=FPish.Credit||{};
 Client$21=Credit.Client=Credit.Client||{};
 JobView=FPish.JobView=FPish.JobView||{};
 Client$22=JobView.Client=JobView.Client||{};
 JobOffer$1=FPish.JobOffer=FPish.JobOffer||{};
 Client$23=JobOffer$1.Client=JobOffer$1.Client||{};
 SC$5=Global.StartupCode$FPish$PostJob=Global.StartupCode$FPish$PostJob||{};
 JobListing=FPish.JobListing=FPish.JobListing||{};
 Client$24=JobListing.Client=JobListing.Client||{};
 SubscribeDeveloerSearch=FPish.SubscribeDeveloerSearch=FPish.SubscribeDeveloerSearch||{};
 Client$25=SubscribeDeveloerSearch.Client=SubscribeDeveloerSearch.Client||{};
 Reset=FPish.Reset=FPish.Reset||{};
 SC$6=Global.StartupCode$FPish$Reset=Global.StartupCode$FPish$Reset||{};
 Client$26=FPish.Client=FPish.Client||{};
 LoginContent=Client$26.LoginContent=Client$26.LoginContent||{};
 FPish_Templates=Global.FPish_Templates=Global.FPish_Templates||{};
 WebSharper=Global.WebSharper;
 Operators=WebSharper&&WebSharper.Operators;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Strings=WebSharper&&WebSharper.Strings;
 Formlets=WebSharper&&WebSharper.Formlets;
 Formlet$1=Formlets&&Formlets.Formlet;
 Html=WebSharper&&WebSharper.Html;
 Client$27=Html&&Html.Client;
 Tags$1=Client$27&&Client$27.Tags;
 Operators$1=Client$27&&Client$27.Operators;
 Attr=Client$27&&Client$27.Attr;
 EventsPervasives=Client$27&&Client$27.EventsPervasives;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Web=WebSharper&&WebSharper.Web;
 Enhance$3=Formlets&&Formlets.Enhance;
 FormContainerConfiguration=Enhance$3&&Enhance$3.FormContainerConfiguration;
 Padding=Enhance$3&&Enhance$3.Padding;
 Controls$2=Formlets&&Formlets.Controls;
 Reactive=IntelliFactory&&IntelliFactory.Reactive;
 HotStream=Reactive&&Reactive.HotStream;
 JQueryUI=WebSharper&&WebSharper.JQueryUI;
 AutocompleteConfiguration=JQueryUI&&JQueryUI.AutocompleteConfiguration;
 Autocomplete=JQueryUI&&JQueryUI.Autocomplete;
 Arrays=WebSharper&&WebSharper.Arrays;
 DialogConfiguration=JQueryUI&&JQueryUI.DialogConfiguration;
 Dialog=JQueryUI&&JQueryUI.Dialog;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Body=Formlets&&Formlets.Body;
 Control=WebSharper&&WebSharper.Control;
 FSharpEvent=Control&&Control.FSharpEvent;
 Data=Formlets&&Formlets.Data;
 Formlets$1=IntelliFactory&&IntelliFactory.Formlets;
 Base=Formlets$1&&Formlets$1.Base;
 FormletProvider=Base&&Base.FormletProvider;
 TinyMce=Formlets&&Formlets.TinyMce;
 Controls$3=TinyMce&&TinyMce.Controls;
 FormButtonConfiguration=Enhance$3&&Enhance$3.FormButtonConfiguration;
 AdvancedHtmlEditorConfiguration=TinyMce&&TinyMce.AdvancedHtmlEditorConfiguration;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 FSharpMap=Collections&&Collections.FSharpMap;
 Map=Collections&&Collections.Map;
 Twitter$1=WebSharper&&WebSharper.Twitter;
 UserModule=Twitter$1&&Twitter$1.UserModule;
 Client$28=UserModule&&UserModule.Client;
 Timeline=Twitter$1&&Twitter$1.Timeline;
 Client$29=Timeline&&Timeline.Client;
 Layout=Formlets&&Formlets.Layout;
 LabelConfiguration=Layout&&Layout.LabelConfiguration;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 JQueryUI$1=Formlets&&Formlets.JQueryUI;
 Controls$4=JQueryUI$1&&JQueryUI$1.Controls;
 Lazy=WebSharper&&WebSharper.Lazy;
 Tabs=JQueryUI&&JQueryUI.Tabs;
 Markup=IntelliFactory&&IntelliFactory.Markup;
 FPishMarkup=Markup&&Markup.FPishMarkup;
 Client$30=FPishMarkup&&FPishMarkup.Client;
 Markdown=Markup&&Markup.Markdown;
 Client$31=Markdown&&Markdown.Client;
 Common=FPishMarkup&&FPishMarkup.Common;
 google=Global.google;
 visualization=google&&google.visualization;
 Google=WebSharper&&WebSharper.Google;
 Visualization=Google&&Google.Visualization;
 Events=Visualization&&Visualization.Events;
 ColumnChart=Events&&Events.ColumnChart;
 Util=WebSharper&&WebSharper.Util;
 String=Global.String;
 UI$1=WebSharper&&WebSharper.UI;
 Next=UI$1&&UI$1.Next;
 Var=Next&&Next.Var;
 Forms$1=WebSharper&&WebSharper.Forms;
 View=Forms$1&&Forms$1.View;
 View$1=Next&&Next.View;
 AttrModule=Next&&Next.AttrModule;
 AttrProxy=Next&&Next.AttrProxy;
 Doc=Next&&Next.Doc;
 Form=Forms$1&&Forms$1.Form;
 Pervasives=Forms$1&&Forms$1.Pervasives;
 Validation=Forms$1&&Forms$1.Validation;
 ErrorMessage=Forms$1&&Forms$1.ErrorMessage;
 Option["default'"]=function(x,o)
 {
  return Operators.DefaultArg(o,x);
 };
 Option.filter=function(f,a)
 {
  var $1;
  return((a!=null?a.$==1:false)?f(a.$0)?($1=[a,a.$0],true):false:false)?$1[0]:null;
 };
 Server.Comment=function()
 {
  return"buttonPro white small";
 };
 Server.Large=function()
 {
  return Server.LargeColor("blue");
 };
 Server.LargeColor=function(color)
 {
  return"buttonPro space-top space-bottom "+color;
 };
 Server.Highlight=function()
 {
  return"buttonPro blue small";
 };
 Server.Small=function()
 {
  return"buttonPro white small";
 };
 LocationDetails.get_Default=function()
 {
  return LocationDetails.New("","",null,"",null,"","","");
 };
 LocationDetails.New=function(Description,Street1,Street2,City,State,Country,Zip,Memo)
 {
  return{
   Description:Description,
   Street1:Street1,
   Street2:Street2,
   City:City,
   State:State,
   Country:Country,
   Zip:Zip,
   Memo:Memo
  };
 };
 UserOAuthData=Dao.UserOAuthData=Runtime.Class({
  get_DisplayName:function()
  {
   var m;
   m=this.OAuthUserDisplayName;
   return m==null?this.OAuthUsername:m.$0;
  }
 },null,UserOAuthData);
 UserOAuthData.New=function(Username,OAuthProviderId,OAuthProviderName,OAuthUsername,OAuthUserDisplayName)
 {
  return new UserOAuthData({
   Username:Username,
   OAuthProviderId:OAuthProviderId,
   OAuthProviderName:OAuthProviderName,
   OAuthUsername:OAuthUsername,
   OAuthUserDisplayName:OAuthUserDisplayName
  });
 };
 TimeDAO.get_Default=function()
 {
  return TimeDAO.New(12,0,0);
 };
 TimeDAO.New=function(hour,minute,timeZone)
 {
  return{
   hour:hour,
   minute:minute,
   timeZone:timeZone
  };
 };
 DateDAO.get_Default=function()
 {
  return DateDAO.New(0,0,0);
 };
 DateDAO.ToNet=function(date)
 {
  var y,mo,d;
  y=date.year;
  mo=date.month;
  d=date.day;
  return(new Global.Date(y,mo-1,d)).getTime();
 };
 DateDAO.AndTimeOfEcma=function(date,hour,minute,timeZoneOffset)
 {
  return[DateDAO.OfEcma(date),TimeDAO.New(hour,minute,timeZoneOffset)];
 };
 DateDAO.AndTimeOfEcma$1=function(datetime)
 {
  return[DateDAO.OfEcma(datetime),TimeDAO.New(datetime.getHours(),datetime.getMinutes(),datetime.getTimezoneOffset()/-60)];
 };
 DateDAO.OfEcma=function(date)
 {
  return DateDAO.New(date.getUTCFullYear(),date.getUTCMonth()+1,date.getUTCDate());
 };
 DateDAO.ToEcma=function(date,time)
 {
  var minute,a,year,month,date$1,hours;
  minute=time.minute-(60*time.timeZone<<0);
  a=(year=date.year,(month=date.month-1,(date$1=date.day,(hours=time.hour,Global.Date.UTC(year,month,date$1,hours,minute)))));
  return new Global.Date(a);
 };
 DateDAO.ToEcma$1=function(date)
 {
  var a,year,month,date$1;
  a=(year=date.year,(month=date.month-1,(date$1=date.day,Global.Date.UTC(year,month,date$1))));
  return new Global.Date(a);
 };
 DateDAO.New=function(year,month,day)
 {
  return{
   year:year,
   month:month,
   day:day
  };
 };
 PricingDAO.get_Default=function()
 {
  return PricingDAO.New(0,"USD");
 };
 PricingDAO.New=function(Price,Currency)
 {
  return{
   Price:Price,
   Currency:Currency
  };
 };
 EventOrCourseDetailsDAO_WebcastDetails.Default=function()
 {
  return EventOrCourseDetailsDAO_WebcastDetails.New({
   $:2
  },"");
 };
 EventOrCourseDetailsDAO_WebcastDetails.New=function(Content,InstructionsToJoin)
 {
  return{
   Content:Content,
   InstructionsToJoin:InstructionsToJoin
  };
 };
 ExtraInformationDAO.Default=function(email)
 {
  return ExtraInformationDAO.New(List.ofArray(["F#"]),null,email);
 };
 ExtraInformationDAO.New=function(Tags$2,AssociatedGroupUrlName,CreateAsAuthorUsername)
 {
  return{
   Tags:Tags$2,
   AssociatedGroupUrlName:AssociatedGroupUrlName,
   CreateAsAuthorUsername:CreateAsAuthorUsername
  };
 };
 CreateEventOrCourseType=EventOrCourseCreation.CreateEventOrCourseType=Runtime.Class({
  get_Index:function()
  {
   return this.$==1?1:this.$==2?2:this.$==3?3:0;
  }
 },null,CreateEventOrCourseType);
 CreateEventOrCourseType.NewCourse=new CreateEventOrCourseType({
  $:2
 });
 CreateEventOrCourseType.OneTimeInClassTraining=new CreateEventOrCourseType({
  $:1
 });
 CreateEventOrCourseType.OneTimeWebcast=new CreateEventOrCourseType({
  $:0
 });
 CourseEventType=Booking.CourseEventType=Runtime.Class({
  get_DisplayString:function()
  {
   return this.$==1?"Scheduled":"Online";
  }
 },null,CourseEventType);
 CourseEventType.Scheduled=new CourseEventType({
  $:1
 });
 CourseEventType.Online=new CourseEventType({
  $:0
 });
 ConferenceExtraDAO.get_Default=function()
 {
  return ConferenceExtraDAO.FromDate(DateDAO.get_Default());
 };
 ConferenceExtraDAO.FromDate=function(date)
 {
  return ConferenceExtraDAO.New(date,TimeDAO.get_Default(),date,TimeDAO.get_Default(),{
   $:0
  });
 };
 ConferenceExtraDAO.New=function(StartDate,StartTime,EndDate,EndTime,ProposalSettings)
 {
  return{
   StartDate:StartDate,
   StartTime:StartTime,
   EndDate:EndDate,
   EndTime:EndTime,
   ProposalSettings:ProposalSettings
  };
 };
 JobLocation=Dao.JobLocation=Runtime.Class({
  get_Display:function()
  {
   var $this,f;
   $this=this;
   f=function(x,y)
   {
    return x+y;
   };
   return function(l)
   {
    return Seq.fold(f,"",l);
   }(List.ofSeq(Seq.delay(function()
   {
    return Seq.append([$this.City],Seq.delay(function()
    {
     return Seq.append([$this.State!==""?", "+$this.State:""],Seq.delay(function()
     {
      return Seq.append([","],Seq.delay(function()
      {
       return[$this.Country];
      }));
     }));
    }));
   })));
  }
 },null,JobLocation);
 JobLocation.get_Empty=function()
 {
  return JobLocation.New("","","","");
 };
 JobLocation.New=function(City,State,Zip,Country)
 {
  return new JobLocation({
   City:City,
   State:State,
   Zip:Zip,
   Country:Country
  });
 };
 JobOffer.get_Empty=function()
 {
  var L,T;
  L=List.T.Empty;
  T=List.T.Empty;
  return JobOffer.New(null,"",null,null,null,null,"","","","","",L,false,"","",T,false,List.T.Empty,true);
 };
 JobOffer.New=function(Id,Title,CreateDate,ListingDate,ExpirationDate,PostedByUser,CompanyName,CompanyDescription,CompanyWebSiteUrl,CompanyLogoUrl,Abstract,Locations,IsTelecommutePossible,Description,Requirements,Tags$2,IsPublic,Applications,CanApply)
 {
  return{
   Id:Id,
   Title:Title,
   CreateDate:CreateDate,
   ListingDate:ListingDate,
   ExpirationDate:ExpirationDate,
   PostedByUser:PostedByUser,
   CompanyName:CompanyName,
   CompanyDescription:CompanyDescription,
   CompanyWebSiteUrl:CompanyWebSiteUrl,
   CompanyLogoUrl:CompanyLogoUrl,
   Abstract:Abstract,
   Locations:Locations,
   IsTelecommutePossible:IsTelecommutePossible,
   Description:Description,
   Requirements:Requirements,
   Tags:Tags$2,
   IsPublic:IsPublic,
   Applications:Applications,
   CanApply:CanApply
  };
 };
 SchoolInfo.get_Default=function()
 {
  return SchoolInfo.New("","","",2011,null,"");
 };
 SchoolInfo.New=function(Name,Degree,Field,FromYear,EndYear,Notes)
 {
  return{
   Name:Name,
   Degree:Degree,
   Field:Field,
   FromYear:FromYear,
   EndYear:EndYear,
   Notes:Notes
  };
 };
 WorkPlaceInfo.get_Default=function()
 {
  return WorkPlaceInfo.New("","","",2011,null,"");
 };
 WorkPlaceInfo.New=function(WorkPlace,Title,Location$1,FromYear,EndYear,Description)
 {
  return{
   WorkPlace:WorkPlace,
   Title:Title,
   Location:Location$1,
   FromYear:FromYear,
   EndYear:EndYear,
   Description:Description
  };
 };
 Company=Dao.Company=Runtime.Class({
  get_IsConference:function()
  {
   return this.ConferenceData!=null;
  }
 },null,Company);
 Company.New=function(Id,Name,UrlName,Email,LogoUrl,ShortDescriptionText,DescriptionHtml,BannerHtml,FoundedOnDate,EndDate,ProposalEndDate,Location$1,IsFeatured,IsTrainingCompany,ConferenceData,IsOpenForProposals,Owners,Trainers,Tags$2,Products)
 {
  return new Company({
   Id:Id,
   Name:Name,
   UrlName:UrlName,
   Email:Email,
   LogoUrl:LogoUrl,
   ShortDescriptionText:ShortDescriptionText,
   DescriptionHtml:DescriptionHtml,
   BannerHtml:BannerHtml,
   FoundedOnDate:FoundedOnDate,
   EndDate:EndDate,
   ProposalEndDate:ProposalEndDate,
   Location:Location$1,
   IsFeatured:IsFeatured,
   IsTrainingCompany:IsTrainingCompany,
   ConferenceData:ConferenceData,
   IsOpenForProposals:IsOpenForProposals,
   Owners:Owners,
   Trainers:Trainers,
   Tags:Tags$2,
   Products:Products
  });
 };
 UserData=Dao.UserData=Runtime.Class({
  get_MustPayVAT:function()
  {
   var isHungarian,isEUCompany,$1,$2,isHungComp,m,isFromEU;
   function isEuropeanUnionBased(country)
   {
    var p;
    return(p=function(c)
    {
     return c.toLowerCase()===country.toLowerCase();
    },function(s)
    {
     return Seq.tryFind(p,s);
    }(List.ofArray(["Austria","Belgium","Bulgaria","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","United Kingdom"])))!=null;
   }
   isHungarian=this.Country.toLowerCase()==="hungary";
   isEUCompany=($1=this.BillingAddress,($2=this.EUTaxNumber,($1!=null?$1.$==1:false)?($2!=null?$2.$==1:false)?isEuropeanUnionBased($1.$0.Country):false:false));
   isHungComp=(m=this.BillingAddress,(m!=null?m.$==1:false)?m.$0.Country.toLowerCase()==="hungary":false);
   isFromEU=isEuropeanUnionBased(this.Country);
   return!isEUCompany?isFromEU?true:isHungComp:false;
  },
  get_IsCompany:function()
  {
   return!Strings.IsNullOrEmpty(this.Company);
  }
 },null,UserData);
 UserData.New=function(Username,FirstName,LastName,Company$2,Email,Phone,Street1,Street2,City,State,Zip,Country,IsAuthor,OnsiteEnabled,FeaturedEnabled,AssociatedCompanyId,AdministeredCompanies,AdministeredZones,Trainer,Developer,TwitterUsername,PhotoUrl,LastLoginDate,Credit$1,BillingAddress,EUTaxNumber,BillingCompanyName,HasUserSearchSubscription,IsFeatured,Latitude,Longitude,IsEmailVerified,Products,Options)
 {
  return new UserData({
   Username:Username,
   FirstName:FirstName,
   LastName:LastName,
   Company:Company$2,
   Email:Email,
   Phone:Phone,
   Street1:Street1,
   Street2:Street2,
   City:City,
   State:State,
   Zip:Zip,
   Country:Country,
   IsAuthor:IsAuthor,
   OnsiteEnabled:OnsiteEnabled,
   FeaturedEnabled:FeaturedEnabled,
   AssociatedCompanyId:AssociatedCompanyId,
   AdministeredCompanies:AdministeredCompanies,
   AdministeredZones:AdministeredZones,
   Trainer:Trainer,
   Developer:Developer,
   TwitterUsername:TwitterUsername,
   PhotoUrl:PhotoUrl,
   LastLoginDate:LastLoginDate,
   Credit:Credit$1,
   BillingAddress:BillingAddress,
   EUTaxNumber:EUTaxNumber,
   BillingCompanyName:BillingCompanyName,
   HasUserSearchSubscription:HasUserSearchSubscription,
   IsFeatured:IsFeatured,
   Latitude:Latitude,
   Longitude:Longitude,
   IsEmailVerified:IsEmailVerified,
   Products:Products,
   Options:Options
  });
 };
 UserOptionsDAO.get_Empty=function()
 {
  return UserOptionsDAO.New(true,true,true,null);
 };
 UserOptionsDAO.New=function(EmailNotifyPrivateMessages,EmailNotifyResponses,EmailNotifyNewEvents,TrainerOptions)
 {
  return{
   EmailNotifyPrivateMessages:EmailNotifyPrivateMessages,
   EmailNotifyResponses:EmailNotifyResponses,
   EmailNotifyNewEvents:EmailNotifyNewEvents,
   TrainerOptions:TrainerOptions
  };
 };
 UserAnnounceOptionsDAO.get_Default=function()
 {
  return UserAnnounceOptionsDAO.New(true,true,true,true,null);
 };
 UserAnnounceOptionsDAO.New=function(AdvertiseGroups,AdvertiseConferences,AdvertiseQuestions,AdvertiseAnswers,TrainerOptions)
 {
  return{
   AdvertiseGroups:AdvertiseGroups,
   AdvertiseConferences:AdvertiseConferences,
   AdvertiseQuestions:AdvertiseQuestions,
   AdvertiseAnswers:AdvertiseAnswers,
   TrainerOptions:TrainerOptions
  };
 };
 TrainerAnnounceOptionsDAO.get_Default=function()
 {
  return TrainerAnnounceOptionsDAO.New(true,true);
 };
 TrainerAnnounceOptionsDAO.New=function(AdvertiseEvents,AdvertiseBlogEntries)
 {
  return{
   AdvertiseEvents:AdvertiseEvents,
   AdvertiseBlogEntries:AdvertiseBlogEntries
  };
 };
 Comment.Fold=function(f,init,c)
 {
  return Seq.fold(function($1,$2)
  {
   return Comment.Fold(f,$1,$2);
  },(f(init))(c),c.Responses);
 };
 Comment.New=function(Id,TopicId,Body$1,BodyFormat,CreateDate,Username,UserFullName,IsAnswer,Responses)
 {
  return{
   Id:Id,
   TopicId:TopicId,
   Body:Body$1,
   BodyFormat:BodyFormat,
   CreateDate:CreateDate,
   Username:Username,
   UserFullName:UserFullName,
   IsAnswer:IsAnswer,
   Responses:Responses
  };
 };
 DeveloperProfileUpdateData.get_Default=function()
 {
  return DeveloperProfileUpdateData.New(false,"","",null,List.T.Empty,List.T.Empty,List.T.Empty);
 };
 DeveloperProfileUpdateData.New=function(ShowInPublicSearches,DescriptionSummary,Description,BlogUrl,TagRanks,Schools,Workplaces)
 {
  return{
   ShowInPublicSearches:ShowInPublicSearches,
   DescriptionSummary:DescriptionSummary,
   Description:Description,
   BlogUrl:BlogUrl,
   TagRanks:TagRanks,
   Schools:Schools,
   Workplaces:Workplaces
  };
 };
 DeveloperSearch.get_Default=function()
 {
  return DeveloperSearch.New(null,null,0,List.T.Empty,true);
 };
 DeveloperSearch.New=function(SearchTerm,Location$1,BatchIx,Tags$2,IsSortByName)
 {
  return{
   SearchTerm:SearchTerm,
   Location:Location$1,
   BatchIx:BatchIx,
   Tags:Tags$2,
   IsSortByName:IsSortByName
  };
 };
 Enhance.WithCssClass=function(css,formlet)
 {
  var f;
  f=function(el)
  {
   var _this;
   _this=el.Element;
   _this.HtmlProvider.AddClass(_this.get_Body(),css);
   return el;
  };
  return function(f$1)
  {
   return Formlet$1.MapBody(f,f$1);
  }(formlet);
 };
 FormletHelpers.SuccessFHtml=function(msg)
 {
  return FormletHelpers.MessageF("success",msg);
 };
 FormletHelpers.ErrorFHtml=function(msg)
 {
  return FormletHelpers.MessageF("error",msg);
 };
 FormletHelpers.SuccessF=function(msg)
 {
  return FormletHelpers.MessageF("success",List.ofArray([Tags$1.Tags().text(msg)]));
 };
 FormletHelpers.ErrorF=function(msg)
 {
  return FormletHelpers.MessageF("error",List.ofArray([Tags$1.Tags().text(msg)]));
 };
 FormletHelpers.MessageF=function(_class,msg)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Formlet$1.OfElement(function()
   {
    var x;
    return Operators$1.add((x=[Attr.Attr().NewAttr("class",_class)],Tags$1.Tags().NewTag("div",x)),msg);
   }),function()
   {
    return b.ReturnFrom(Formlet$1.Never());
   });
  });
 };
 Table.AlternatingColor=function(trs)
 {
  var m;
  m=function(i,tr)
  {
   i%2===1?tr.HtmlProvider.AddClass(tr.get_Body(),"alt"):void 0;
   return tr;
  };
  return function(l)
  {
   return List.mapi(m,l);
  }(trs);
 };
 Table.NormalMiddleTable=function(headtr,trs)
 {
  var x,x$1;
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","normal middle")],Tags$1.Tags().NewTag("table",x)),headtr!=null?List.ofArray([(x$1=[headtr.$0],Tags$1.Tags().NewTag("thead",x$1)),Tags$1.Tags().NewTag("tbody",trs)]):List.ofArray([Tags$1.Tags().NewTag("tbody",trs)]));
 };
 Table.NormalTable=function(headtr,trs)
 {
  var x,x$1;
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","normal")],Tags$1.Tags().NewTag("table",x)),headtr!=null?List.ofArray([(x$1=[headtr.$0],Tags$1.Tags().NewTag("thead",x$1)),Tags$1.Tags().NewTag("tbody",trs)]):List.ofArray([Tags$1.Tags().NewTag("tbody",trs)]));
 };
 Client.TogglePanel=function(elem)
 {
  return Client.TogglePanelCustom({
   LabelShow:"Show",
   LabelHide:"Hide"
  },elem);
 };
 Client.TogglePanelCustom=function(conf,body)
 {
  var content,x,x$1,x$2,x$3,x$4,x$5;
  content=Tags$1.Tags().NewTag("div",[body]);
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","toggle-panel")],Tags$1.Tags().NewTag("div",x)),[Operators$1.add((x$1=[Attr.Attr().NewAttr("class","toggle-panel-menu")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=Operators$1.add((x$3=[Attr.Attr().NewAttr("class","toggle-panel-link")],Tags$1.Tags().NewTag("div",x$3)),[(x$4=conf.LabelHide,Tags$1.Tags().text(x$4))]),(x$5=function(alink)
  {
   var element,element$1,element$2,element$3,element$4;
   return(element=content.Dom,Global.jQuery(element)).is(":visible")?((element$1=content.Dom,Global.jQuery(element$1)).slideUp("fast",function()
   {
   }),(element$2=alink.Dom,Global.jQuery(element$2)).text(conf.LabelShow)):((element$3=content.Dom,Global.jQuery(element$3)).slideDown("fast",function()
   {
   }),(element$4=alink.Dom,Global.jQuery(element$4)).text(conf.LabelHide));
  },function(a)
  {
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return x$5($1,$2);
    };
   },a);
  }(x$2),x$2))]),content]);
 };
 Client.LoadingImage=function()
 {
  var x,x$1;
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","loading-bar")],Tags$1.Tags().NewTag("div",x)),[(x$1=[Attr.Attr().NewAttr("src","http://us.i1.yimg.com/us.yimg.com/i/us/per/gr/gp/rel_interstitial_loading.gif"),Attr.Attr().NewAttr("alt","Loading...")],Tags$1.Tags().NewTag("img",x$1))]);
 };
 Client.StandardConfiguration=function()
 {
  SC$1.$cctor();
  return SC$1.StandardConfiguration;
 };
 Client.SignupConfiguration=function()
 {
  SC$1.$cctor();
  return SC$1.SignupConfiguration;
 };
 Client.LoadingPane=function(a)
 {
  var x,f;
  x=Tags$1.Tags().NewTag("div",[]);
  f=function(e)
  {
   Concurrency.Start(Concurrency.Delay(function()
   {
    return Concurrency.Bind(a,function(a$1)
    {
     e.AppendI(a$1);
     a$1.Render();
     return Concurrency.Return(null);
    });
   }),null);
  };
  (function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x));
  return x;
 };
 ToggleControl=Client$1.ToggleControl=Runtime.Class({
  get_Body:function()
  {
   var $this,content,x,f;
   $this=this;
   content=Tags$1.Tags().NewTag("div",[]);
   x=Client.TogglePanel(content);
   f=function(el)
   {
    var _this,element,selector;
    _this=(element=content.get_Body(),Global.jQuery(element));
    _this.append.apply(_this,[(selector="#"+$this.id$1,Global.jQuery(selector))].concat([]));
    el.HtmlProvider.SetCss(el.get_Body(),"display","block");
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,ToggleControl);
 SC$1.$cctor=Runtime.Cctor(function()
 {
  var i,i$1;
  SC$1.SignupConfiguration=(i=FormContainerConfiguration.get_Default(),FormContainerConfiguration.New(i.Header,Padding.New({
   $:1,
   $0:20
  },{
   $:1,
   $0:20
  },{
   $:1,
   $0:10
  },{
   $:1,
   $0:10
  }),i.Description,i.BackgroundColor,i.BorderColor,i.CssClass,i.Style));
  SC$1.StandardConfiguration=(i$1=FormContainerConfiguration.get_Default(),FormContainerConfiguration.New(i$1.Header,Padding.New({
   $:1,
   $0:40
  },{
   $:1,
   $0:80
  },{
   $:1,
   $0:20
  },{
   $:1,
   $0:20
  }),i$1.Description,i$1.BackgroundColor,i$1.BorderColor,i$1.CssClass,i$1.Style));
  SC$1.$cctor=Global.ignore;
 });
 Controls.SuccessPanel=function(msg)
 {
  return Controls.MessageF("success",msg);
 };
 Controls.ErrorPanel=function(msg)
 {
  return Controls.MessageF("error",msg);
 };
 Controls.MessageF=function(_class,msg)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Formlet$1.OfElement(function()
   {
    var x;
    return Operators$1.add((x=[Attr.Attr().NewAttr("class",_class)],Tags$1.Tags().NewTag("div",x)),[Tags$1.Tags().text(msg)]);
   }),function()
   {
    return b.ReturnFrom(Formlet$1.Never());
   });
  });
 };
 Controls.SmallButton=function(label)
 {
  return Controls$2.ElementButton(function()
  {
   var x,_this;
   return Operators$1.add((x=[Attr.Attr().NewAttr("href","javascript:void(null)"),(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text(label)]);
  });
 };
 Controls.LargeButton=function(label)
 {
  return Controls$2.ElementButton(function()
  {
   var x,a;
   return Operators$1.add((x=[Attr.Attr().NewAttr("href","#"),(a=Server.Large(),Attr.Attr().NewAttr("class",a))],Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text(label)]);
  });
 };
 Controls.Autocomplete=function(def,source)
 {
  return Formlet$1.BuildFormlet(function()
  {
   var state,input,x,upd,x$1,x$2,a,ac,conf,r;
   state=HotStream.New$1({
    $:0,
    $0:def
   });
   input=(x=[Attr.Attr().NewAttr("class","inputText"),Attr.Attr().NewAttr("value",def)],Tags$1.Tags().NewTag("input",x));
   upd=function()
   {
    state.Trigger({
     $:0,
     $0:input.get_Value()
    });
   };
   x$1=function()
   {
    return upd();
   };
   (function(a$1)
   {
    EventsPervasives.Events().OnKeyUp(function($1)
    {
     return function($2)
     {
      return x$1($1,$2);
     };
    },a$1);
   }(input));
   x$2=function()
   {
    upd();
   };
   (a=function(el)
   {
    return x$2(el);
   },function(a$1)
   {
    EventsPervasives.Events().OnChange(function($1)
    {
     return function($2)
     {
      return a($1,$2);
     };
    },a$1);
   })(input);
   ac=(conf=new AutocompleteConfiguration.New(),Autocomplete.New1(input,(r=new AutocompleteConfiguration.New(),r.set_Source(function(req,resp)
   {
    Concurrency.Start(Concurrency.Delay(function()
    {
     var x$3;
     x$3=source(req.term);
     return Concurrency.Bind(x$3,function(a$1)
     {
      resp(Arrays.ofList(a$1));
      return Concurrency.Return(null);
     });
    }),null);
   }),r)));
   ac.OnChange(function()
   {
    return function()
    {
     return upd();
    };
   });
   return[Tags$1.Tags().NewTag("div",[ac]),function()
   {
    input.set_Value(def);
    state.Trigger({
     $:0,
     $0:def
    });
   },state];
  });
 };
 Controls.MkFormlet=function(f)
 {
  return Formlet$1.BuildFormlet(function()
  {
   var p,s,r,b;
   p=f();
   s=p[2];
   r=p[1];
   b=p[0];
   return[Tags$1.Tags().NewTag("div",[b]),r,s];
  });
 };
 Enhance$1.WithDialog=function(title,formlet)
 {
  var r;
  return Enhance$1.WithCustomDialog((r=new DialogConfiguration.New(),r.title=title,r),formlet);
 };
 Enhance$1.WithCustomDialogWithButtons=function(conf,formlet)
 {
  return Formlet$1.BuildFormlet(function()
  {
   var state,dialogOpt,result,el,x,f,dialog;
   state=HotStream.New$1({
    $:1,
    $0:List.T.Empty
   });
   conf.modal=true;
   conf.dialogClass="dialog";
   dialogOpt=[null];
   result=[{
    $:1,
    $0:List.T.Empty
   }];
   conf.buttons={
    Cancel:function()
    {
     var a;
     a=function(d)
     {
      Global.jQuery(d.element.Dom).dialog("close");
     };
     (function(o)
     {
      if(o==null)
       ;
      else
       a(o.$0);
     }(dialogOpt[0]));
     state.Trigger({
      $:1,
      $0:List.T.Empty
     });
    },
    Ok:function()
    {
     var a,m;
     a=function(d)
     {
      Global.jQuery(d.element.Dom).dialog("close");
     };
     (function(o)
     {
      if(o==null)
       ;
      else
       a(o.$0);
     }(dialogOpt[0]));
     m=result[0];
     m.$==1?void 0:state.Trigger(m);
    }
   };
   el=(x=[(f=function(confirmed)
   {
    result[0]=confirmed;
   },function(f$1)
   {
    return Formlet$1.Run(f,f$1);
   }(Formlet$1.LiftResult(formlet)))],Tags$1.Tags().NewTag("div",x));
   dialog=Dialog.New1(el,conf);
   dialogOpt[0]={
    $:1,
    $0:dialog
   };
   return[Tags$1.Tags().NewTag("div",[dialog]),function()
   {
    Global.jQuery(dialog.element.Dom).dialog("close");
    state.Trigger({
     $:1,
     $0:List.T.Empty
    });
   },state];
  });
 };
 Enhance$1.WithCustomDialog=function(conf,formlet)
 {
  return Formlet$1.BuildFormlet(function()
  {
   var state,dialogOpt,el,x,f,dialog;
   state=HotStream.New$1({
    $:1,
    $0:List.T.Empty
   });
   conf.modal=true;
   conf.dialogClass="dialog";
   dialogOpt=[null];
   el=(x=[(f=function(confirmed)
   {
    var m,dialog$1;
    m=dialogOpt[0];
    m==null?void 0:(dialog$1=m.$0,state.Trigger({
     $:0,
     $0:confirmed
    }),Global.jQuery(dialog$1.element.Dom).dialog("close"));
   },function(f$1)
   {
    return Formlet$1.Run(f,f$1);
   }(formlet))],Tags$1.Tags().NewTag("div",x));
   dialog=Dialog.New1(el,conf);
   dialogOpt[0]={
    $:1,
    $0:dialog
   };
   return[Tags$1.Tags().NewTag("div",[dialog]),function()
   {
    Global.jQuery(dialog.element.Dom).dialog("close");
    state.Trigger({
     $:1,
     $0:List.T.Empty
    });
   },state];
  });
 };
 Enhance$1.WithStep=function(num,title,formlet)
 {
  var f;
  f=function(elem)
  {
   var x,x$1,x$2,_this,_this$1,x$3,x$4,x$5;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","form-step")],Tags$1.Tags().NewTag("div",x)),[Operators$1.add((x$1=[Attr.Attr().NewAttr("class","form-step-header")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=[(_this=Attr.Attr(),_this.NewAttr("src","/images/step"+Global.String(num)+".png")),(_this$1=Attr.Attr(),_this$1.NewAttr("alt","Step "+Global.String(num)))],Tags$1.Tags().NewTag("img",x$2)),Operators$1.add((x$3=[Attr.Attr().NewAttr("class","form-step-sep")],Tags$1.Tags().NewTag("div",x$3)),[(x$4=[Tags$1.Tags().text(title)],Tags$1.Tags().NewTag("h1",x$4))])]),Operators$1.add((x$5=[Attr.Attr().NewAttr("class","form-step-body")],Tags$1.Tags().NewTag("div",x$5)),[elem])]);
  };
  return function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }(formlet);
 };
 Enhance$1.SubmitOnEnter=function(formlet)
 {
  var f;
  f=function(elem)
  {
   var jqElem,element,v;
   jqElem=(element=elem.get_Body(),Global.jQuery(element));
   v=jqElem.keypress(function(k)
   {
    var code,v$1,f$1;
    code=!Unchecked.Equals(k.keyCode,void 0)?k.keyCode:k.charCode;
    return code===13?(v$1=(f$1=function()
    {
     var v$2;
     v$2=jqElem.find("input[type=button]").trigger("click");
    },function(m)
    {
     return Global.setTimeout(f$1,m);
    }(100)),void 0):null;
   });
   return elem;
  };
  return function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }(formlet);
 };
 Enhance$1.FormWithResponse=function(conf,respFun,form)
 {
  var f,f$1;
  f=function()
  {
  };
  return function(f$2)
  {
   return Formlet$1.Run(f,f$2);
  }((f$1=Enhance$3.WithCustomFormContainer(conf,form),Enhance$1.FormWithResponseElement(respFun,f$1)));
 };
 Enhance$1.FormWithResponseElement=function(f,formlet)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Formlet$1.WithNotificationChannel(Enhance$1.GetElement(formlet)),function(a)
   {
    var reset,panel,input,imgBox,res;
    reset=a[1];
    panel=a[0][1];
    input=a[0][0];
    imgBox=Client.LoadingImage();
    panel.AppendI(imgBox);
    return b.Bind((res=f(input),(imgBox.HtmlProvider.Remove(imgBox.get_Body()),Formlet$1.OfElement(function()
    {
     var msgs,x,m,elem;
     return res.$==1?(msgs=res.$0,(x=(m=function(m$1)
     {
      var x$1;
      x$1=[Tags$1.Tags().text(m$1)];
      return Tags$1.Tags().NewTag("li",x$1);
     },function(l)
     {
      return List.map(m,l);
     }(msgs)),Tags$1.Tags().NewTag("ul",x))):(elem=res.$0,(reset(void 0),elem));
    }))),function()
    {
     return b.Return();
    });
   });
  });
 };
 Enhance$1.GetElement=function(formlet)
 {
  var el,f,f$1;
  el=Tags$1.Tags().NewTag("div",[]);
  f=function(v)
  {
   return[v,el];
  };
  return function(f$2)
  {
   return Formlet$1.Map(f,f$2);
  }((f$1=function(body)
  {
   el.AppendI(body.Element);
   return Body.New(el,body.Label);
  },function(f$2)
  {
   return Formlet$1.MapBody(f$1,f$2);
  }(formlet)));
 };
 Formlet.Confirm=function(sett)
 {
  return Formlet$1.BuildFormlet(function()
  {
   var state,conf,r,dialog,el,x,x$1,x$2,f,f$1,f$2,x$3;
   state=new FSharpEvent.New();
   conf=(r=new DialogConfiguration.New(),r.modal=true,r.dialogClass="dialog",r.title=sett.Title,r);
   dialog=[null];
   el=(x=[(x$1=[(x$2=sett.Message,Tags$1.Tags().text(x$2))],Tags$1.Tags().NewTag("p",x$1)),(f=function(confirmed)
   {
    var m,d;
    m=dialog[0];
    m==null?void 0:(d=m.$0,confirmed?state.event.Trigger({
     $:0,
     $0:true
    }):void 0,Global.jQuery(d.element.Dom).dialog("close"));
   },function(f$3)
   {
    return Formlet$1.Run(f,f$3);
   }(Formlet$1.Horizontal(Formlet$1.Choose(List.ofArray([(f$1=function()
   {
    return true;
   },function(f$3)
   {
    return Formlet$1.Map(f$1,f$3);
   }(Formlet.SmallButton(sett.YesLabel))),(f$2=function()
   {
    return false;
   },function(f$3)
   {
    return Formlet$1.Map(f$2,f$3);
   }(Formlet.SmallButton(sett.NoLabel)))])))))],Tags$1.Tags().NewTag("div",x));
   dialog[0]={
    $:1,
    $0:Dialog.New1(el,conf)
   };
   return[(x$3=[dialog[0].$0],Tags$1.Tags().NewTag("div",x$3)),function()
   {
   },state.event];
  });
 };
 Formlet.SmallButton=function(label)
 {
  return Controls$2.ElementButton(function()
  {
   var x,_this;
   return Operators$1.add((x=[Attr.Attr().NewAttr("href","javascript:void();"),(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text(label)]);
  });
 };
 Formlet.LargeButton=function(label)
 {
  return Controls$2.ElementButton(function()
  {
   var x,a;
   return Operators$1.add((x=[Attr.Attr().NewAttr("href","javascript:void();"),(a=Server.Large(),Attr.Attr().NewAttr("class",a))],Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text(label)]);
  });
 };
 Formlet.LoadingFormletWithLogin=function(a)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Formlet.LoadingFormlet(a),function(a$1)
   {
    return(a$1!=null?a$1.$==1:false)?b.Return(a$1.$0):(Global.window.open("/login-frame","login","width=600,height=500,status=0,resizable=0,location=0"),b.ReturnFrom(FormletHelpers.SuccessFHtml(List.ofArray([Tags$1.Tags().text("You need to log in to perform this action."),Tags$1.Tags().NewTag("br",[]),Tags$1.Tags().text("Please make sure that your browser isn't blocking the login popup window."),Tags$1.Tags().NewTag("br",[]),Tags$1.Tags().text("No action will be performed until you log in and confirm this action again.")]))));
   });
  });
 };
 Formlet.LoadingFormlet=function(a)
 {
  return Formlet.AsyncFormlet(Client.LoadingImage,a);
 };
 Formlet.FromAsync=function(a)
 {
  return Formlet$1.BuildFormlet(function()
  {
   var state;
   state=new FSharpEvent.New();
   Concurrency.Start(Concurrency.Delay(function()
   {
    return Concurrency.Bind(a,function(a$1)
    {
     state.event.Trigger({
      $:0,
      $0:a$1
     });
     return Concurrency.Return(null);
    });
   }),null);
   return[Tags$1.Tags().NewTag("div",[]),function()
   {
   },state.event];
  });
 };
 Formlet.AsyncFormlet=function(buildElem,a)
 {
  var loadingPane;
  loadingPane=Formlet$1.BuildFormlet(function()
  {
   var elem,state;
   elem=buildElem();
   state=new FSharpEvent.New();
   Concurrency.Start(Concurrency.Delay(function()
   {
    return Concurrency.Bind(a,function(a$1)
    {
     state.event.Trigger({
      $:0,
      $0:a$1
     });
     return Concurrency.Return(null);
    });
   }),null);
   return[elem,function()
   {
   },state.event];
  });
  return Formlet$1.Replace(loadingPane,function(value)
  {
   var f;
   f=Formlet$1.Empty();
   return Formlet$1.InitWith(value,f);
  });
 };
 Formlet.Many=function(formlet,init)
 {
  return Formlet.Resettable(function()
  {
   var deletableF,initFs,f,c,addButton,newF,f$1,f$2;
   deletableF=function(formlet$1)
   {
    var c$1,f$3;
    return Formlet.Deletable(Formlet$1.Horizontal((c$1=(f$3=function(v)
    {
    },function(f$4)
    {
     return Formlet$1.Map(f$3,f$4);
    }(Controls.SmallButton("X"))),Formlet$1.WithCancelation(formlet$1,c$1))));
   };
   initFs=(f=(c=Global.id,function(l)
   {
    return List.choose(c,l);
   }),function(f$3)
   {
    return Formlet$1.Map(f,f$3);
   }(Formlet$1.Sequence(List.map(deletableF,init))));
   addButton=Controls.SmallButton("Add");
   newF=(f$1=(f$2=function(a)
   {
    return{
     $:1,
     $0:a
    };
   },function(f$3)
   {
    return Formlet$1.Map(f$2,f$3);
   }(Formlet.AddMany(addButton,function()
   {
    return deletableF(formlet);
   }))),Formlet$1.InitWith(null,f$1));
   return Data.$(Data.$(Formlet$1.Return(function(xs)
   {
    return function(ys)
    {
     var ys$1;
     return(ys!=null?ys.$==1:false)?(ys$1=ys.$0,List.append(xs,ys$1)):xs;
    };
   }),initFs),newF);
  });
 };
 Formlet.Resettable=function(makeFormlet)
 {
  var resetS,resetF,c,b;
  resetS=new FSharpEvent.New();
  resetF=Data.OfIFormlet(Formlet.BaseFormlet().FromState(resetS.event));
  c=function()
  {
   resetS.event.Trigger({
    $:0,
    $0:null
   });
  };
  return function(f)
  {
   return Formlet$1.WithNotification(c,f);
  }((b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(Formlet$1.InitWith(null,resetF),function()
   {
    return b.ReturnFrom(Enhance$3.WithFormContainer(Formlet$1.ApplyLayout(makeFormlet())));
   });
  })));
 };
 Formlet.AddMany=function(add,f)
 {
  var f$1;
  f$1=function(xs)
  {
   return List.ofSeq(Seq.choose(Global.id,xs));
  };
  return function(f$2)
  {
   return Formlet$1.Map(f$1,f$2);
  }(Formlet$1.FlipBody(Formlet$1.SelectMany(Formlet$1.Map(f,add))));
 };
 Formlet.Deletable=function(formlet)
 {
  return Formlet.Replace(formlet,function(value)
  {
   var value$1;
   return(value!=null?value.$==1:false)?(value$1=value.$0,Formlet$1.Return({
    $:1,
    $0:value$1
   })):Data.OfIFormlet(Formlet.BaseFormlet().ReturnEmpty(null));
  });
 };
 Formlet.Replace=function(formlet,f)
 {
  var f$1;
  return Formlet$1.Switch((f$1=function(res)
  {
   var fs;
   return res.$==1?(fs=res.$0,{
    $:0,
    $0:Formlet$1.FailWith(fs)
   }):{
    $:0,
    $0:f(res.$0)
   };
  },function(f$2)
  {
   return Formlet$1.MapResult(f$1,f$2);
  }(formlet)));
 };
 Formlet.BaseFormlet=function()
 {
  return new FormletProvider.New(Data.UtilsProvider());
 };
 Client$2.Trim=function(s)
 {
  return s.replace(new Global.RegExp("^\\s*"),"").replace(new Global.RegExp("\\s*$"),"");
 };
 Client$2.PrettyTags=function(s)
 {
  var r;
  return s.$==0?"":(r=function(s1,s2)
  {
   return s1+", "+s2;
  },function(l)
  {
   return Seq.reduce(r,l);
  }(s));
 };
 Client$2.ParseTags=function(s)
 {
  var commaSplit,m,f,p,f$1;
  commaSplit=s.split(new Global.RegExp("[,;]"));
  m=(f=function(s$1)
  {
   return s$1.toLowerCase();
  },function(x)
  {
   return f(Client$2.Trim(x));
  });
  return function(l)
  {
   return List.map(m,l);
  }((p=(f$1=function(v)
  {
   return!v;
  },function(x)
  {
   return f$1(Strings.IsNullOrEmpty(x));
  }),function(l)
  {
   return List.filter(p,l);
  }(List.ofArray((commaSplit.length===1?(new Global.RegExp(" .* ")).test(Arrays.get(commaSplit,0)):false)?s.split(" "):commaSplit))));
 };
 CompanyInfo.Make=function(name,vat)
 {
  return CompanyInfo.New(name,vat);
 };
 CompanyInfo.New=function(Name,VAT)
 {
  return{
   Name:Name,
   VAT:VAT
  };
 };
 ClientInfo=Types.ClientInfo=Runtime.Class({
  get_MustPayVAT:function()
  {
   var isHungarian,isEU,isCompany,hasVATIN;
   isHungarian=this.Country.toLowerCase()==="hungary";
   isEU=Types.IsEU(this.Country);
   isCompany=this.get_IsCompany();
   hasVATIN=this.CompanyInfo==null?false:this.CompanyInfo.$0.VAT!=null;
   return((!isCompany?isEU:false)?true:isCompany?isHungarian:false)?true:(isCompany?isEU:false)?!hasVATIN:false;
  },
  get_IsCompany:function()
  {
   return this.CompanyInfo!=null;
  }
 },null,ClientInfo);
 ClientInfo.Make=function(email,company,name,pw,street1,street2,city,state,zip,country,phone,token)
 {
  return ClientInfo.New(email,company,name,pw,street1,street2,city,state,zip,country,phone,token);
 };
 ClientInfo.get_Default=function()
 {
  return ClientInfo.New("",null,"","","","","","","","United States","",null);
 };
 ClientInfo.New=function(Email,CompanyInfo$1,Name,Password,Street1,Street2,City,State,Zip,Country,Phone,EmailToken)
 {
  return new ClientInfo({
   Email:Email,
   CompanyInfo:CompanyInfo$1,
   Name:Name,
   Password:Password,
   Street1:Street1,
   Street2:Street2,
   City:City,
   State:State,
   Zip:Zip,
   Country:Country,
   Phone:Phone,
   EmailToken:EmailToken
  });
 };
 Types.IsEU=function(country)
 {
  var country$1,p;
  country$1=country.toLowerCase();
  p=function(y)
  {
   return country$1===y;
  };
  return function(s)
  {
   return Seq.exists(p,s);
  }(List.ofArray(["austria","belgium","bulgaria","croatia","cyprus","czech republic","denmark","estonia","finland","france","germany","greece","hungary","ireland","italy","latvia","lithuania","luxembourg","malta","netherlands","poland","portugal","romania","slovakia","slovenia","spain","sweden","united kingdom"]));
 };
 WithJQueryUITabs=Enhance$2.WithJQueryUITabs=Runtime.Class({
  get_Body:function()
  {
   var $this,x,f;
   $this=this;
   x=Tags$1.Tags().NewTag("div",[]);
   f=function()
   {
    var def,id;
    def=$this.Default;
    id=$this.Id;
    Global.$("#"+id).tabs({
     selected:def
    });
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,WithJQueryUITabs);
 WithJQueryUIAccordion=Enhance$2.WithJQueryUIAccordion=Runtime.Class({
  get_Body:function()
  {
   var $this,x,f;
   $this=this;
   x=Tags$1.Tags().NewTag("div",[]);
   f=function()
   {
    var id;
    id=$this.Id;
    Global.$("#"+id).accordion({
     collapsible:true,
     active:false,
     autoHeight:false
    });
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,WithJQueryUIAccordion);
 FwoL.Select=function(def,elems)
 {
  return Controls$2.Select(def,elems);
 };
 ReadOnly.CheckBox=function(defValue,label,validationMsg)
 {
  var f;
  f=Enhance$3.WithValidationIcon(Controls$2.ReadOnlyCheckbox(defValue));
  return Enhance$3.WithTextLabel(label,f);
 };
 ReadOnly.Input=function(defValue,label,validationMsg)
 {
  var f;
  f=Enhance$3.WithValidationIcon(Controls$2.ReadOnlyInput(defValue));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.Select=function(def,label,elems)
 {
  var f;
  f=Controls$2.Select(def,elems);
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.CheckBox=function(defValue,label)
 {
  var f;
  f=Controls$2.Checkbox(defValue);
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.RichEditor=function(label,validationMsg)
 {
  return FwL.RichEditorWithValue("",label,validationMsg);
 };
 FwL.RichEditorWithValue=function(value,label,validationMsg)
 {
  var f,a;
  f=Enhance$3.WithValidationIcon((a=(Controls$3.AdvancedHtmlEditor(FwL.RichEditorParams()))(value),Data.Validator().IsNotEmpty(validationMsg,a)));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.RichEditorWithValueOptional=function(value,label)
 {
  var f;
  f=(Controls$3.AdvancedHtmlEditor(FwL.RichEditorParams()))(value);
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.RichEditorParams=function()
 {
  SC$2.$cctor();
  return SC$2.RichEditorParams;
 };
 FwL.TextArea=function(label,validationMsg)
 {
  var f,a;
  f=Enhance$3.WithValidationIcon((a=Controls$2.TextArea(""),Data.Validator().IsNotEmpty(validationMsg,a)));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.TextAreaWithValueOptional=function(value,label)
 {
  var f;
  f=Controls$2.TextArea(value);
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.TextAreaWithValue=function(value,label,validationMsg)
 {
  var f,a;
  f=Enhance$3.WithValidationIcon((a=Controls$2.TextArea(value),Data.Validator().IsNotEmpty(validationMsg,a)));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.InputWithTopLabel=function(label,validationMsg)
 {
  var f,a;
  return Enhance$3.WithLabelAbove((f=Enhance$3.WithValidationIcon((a=Controls$2.Input(""),Data.Validator().IsNotEmpty(validationMsg,a))),Enhance$3.WithTextLabel(label,f)));
 };
 FwL.InputOptionalWithValue=function(value,label)
 {
  var f;
  f=Controls$2.Input(value);
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.InputOptional=function(label)
 {
  var f;
  f=Controls$2.Input("");
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.Email=function(label,validationMsg)
 {
  var f,x;
  f=Enhance$3.WithValidationIcon((x=Controls$2.Input(""),(Data.Validator().IsEmail(validationMsg))(x)));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.EmailWithValue=function(value,label,validationMsg)
 {
  var f,x;
  f=Enhance$3.WithValidationIcon((x=Controls$2.Input(value),(Data.Validator().IsEmail(validationMsg))(x)));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.Input=function(label,validationMsg)
 {
  var f,a;
  f=Enhance$3.WithValidationIcon((a=Controls$2.Input(""),Data.Validator().IsNotEmpty(validationMsg,a)));
  return Enhance$3.WithTextLabel(label,f);
 };
 FwL.InputWithValue=function(value,label,validationMsg)
 {
  var f,a;
  f=Enhance$3.WithValidationIcon((a=Controls$2.Input(value),Data.Validator().IsNotEmpty(validationMsg,a)));
  return Enhance$3.WithTextLabel(label,f);
 };
 ReadOnly$1.CheckBox=function(defValue,label,validationMsg,cssClass)
 {
  var f;
  f=ReadOnly.CheckBox(defValue,label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 ReadOnly$1.Input=function(defValue,label,validationMsg,cssClass)
 {
  var f;
  f=ReadOnly.Input(defValue,label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.Select=function(def,label,elems,cssClass)
 {
  var f;
  f=FwL.Select(def,label,elems);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.RichEditor=function(label,validationMsg,cssClass)
 {
  var f;
  f=FwL.RichEditor(label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.RichEditorWithValue=function(value,label,validationMsg,cssClass)
 {
  var f;
  f=FwL.RichEditorWithValue(value,label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.RichEditorWithValueOptional=function(value,label,cssClass)
 {
  var f;
  f=FwL.RichEditorWithValueOptional(value,label);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.TextAreaWithValueOptional=function(value,label,cssClass)
 {
  var f;
  f=FwL.TextAreaWithValueOptional(value,label);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.TextAreaWithValue=function(value,label,validationMsg,cssClass)
 {
  var f;
  f=FwL.TextAreaWithValue(value,label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.TextArea=function(label,validationMsg,cssClass)
 {
  var f;
  f=FwL.TextArea(label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.InputWithValueAndValidator=function(value,label,validator,cssClass)
 {
  var f,f$1;
  f=(f$1=Enhance$3.WithValidationIcon(validator(Controls$2.Input(value))),Enhance$3.WithTextLabel(label,f$1));
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.InputWithValue=function(value,label,validationMsg,cssClass)
 {
  var f,f$1,a;
  f=(f$1=Enhance$3.WithValidationIcon((a=Controls$2.Input(value),Data.Validator().IsNotEmpty(validationMsg,a))),Enhance$3.WithTextLabel(label,f$1));
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.InputOptionalWithValue=function(value,label,cssClass)
 {
  var f;
  f=FwL.InputOptionalWithValue(value,label);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.InputOptional=function(label,cssClass)
 {
  var f;
  f=FwL.InputOptional(label);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwLS.Input=function(label,validationMsg,cssClass)
 {
  var f;
  f=FwL.Input(label,validationMsg);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 FwS.Select=function(def,elems,cssClass)
 {
  var f;
  f=FwoL.Select(def,elems);
  return Enhance$3.WithCssClass(cssClass,f);
 };
 OrganizationImageHoverSummary=Client$3.OrganizationImageHoverSummary=Runtime.Class({
  get_Body:function()
  {
   var cssClass,x,x$1,x$2,x$3,x$4;
   cssClass="org-summary-container "+(this.ExpandToTheRight?"expand-right":"expand-left");
   return Client$3.HoverSummary(cssClass,this.ImageUrl,this.OrganizationUrl,List.ofArray([Operators$1.add((x=[Attr.Attr().NewAttr("class","thumbnail-summary-title")],Tags$1.Tags().NewTag("div",x)),[Operators$1.add((x$1=[Attr.Attr().NewAttr("href",this.OrganizationUrl)],Tags$1.Tags().NewTag("a",x$1)),[(x$2=this.OrganizationName,Tags$1.Tags().text(x$2))])]),(x$3=[(x$4=this.OrganizationDescription,Tags$1.Tags().text(x$4))],Tags$1.Tags().NewTag("div",x$3))]));
  }
 },Web.Control,OrganizationImageHoverSummary);
 UserImageHoverSummary=Client$3.UserImageHoverSummary=Runtime.Class({
  Badge:function(name,alt)
  {
   var x;
   x=[Attr.Attr().NewAttr("src","/images/badges/badge-"+name+".png"),Attr.Attr().NewAttr("alt",alt),Attr.Attr().NewAttr("title",alt),Attr.Attr().NewAttr("class","badge badge-"+name)];
   return Tags$1.Tags().NewTag("img",x);
  },
  get_Body:function()
  {
   var $this,$1,cssClass,x,x$1,x$2,x$3,_this,s,i,s$1,x$4,x$5,x$6;
   $this=this;
   $1=this.UserScore.Reputation;
   cssClass="user-summary-container "+(this.ExpandToTheRight?"expand-right":"expand-left");
   return Client$3.HoverSummary(cssClass,this.ImageUrl,this.UserProfileUrl,List.ofArray([Operators$1.add((x=[Attr.Attr().NewAttr("class","thumbnail-summary-title")],Tags$1.Tags().NewTag("div",x)),[Operators$1.add((x$1=[Attr.Attr().NewAttr("href",this.UserProfileUrl)],Tags$1.Tags().NewTag("a",x$1)),[(x$2=this.UserName,Tags$1.Tags().text(x$2))])]),Operators$1.add((x$3=[Attr.Attr().NewAttr("class","user-score"),(_this=Attr.Attr(),_this.NewAttr("title",(s=Global.String($1),(i=[s.length%3-3],(i[0]===-3?i[0]=0:void 0,s$1=List.ofSeq(Seq.delay(function()
   {
    return Seq.enumWhile(function()
    {
     return i[0]<s.length;
    },Seq.delay(function()
    {
     return Seq.append([s.substring(i[0],i[0]+3)],Seq.delay(function()
     {
      i[0]=i[0]+3;
      return[];
     }));
    }));
   })),Strings.concat(",",s$1))))))],Tags$1.Tags().NewTag("div",x$3)),[Tags$1.Tags().text($1>=1000000?Global.String($1/1000000>>0)+"."+Global.String(($1/100000>>0)%10)+"M":$1>=1000?Global.String($1/1000>>0)+"."+Global.String(($1/100>>0)%10)+"k":Global.String($1))]),Operators$1.add((x$4=[Attr.Attr().NewAttr("class","badges")],Tags$1.Tags().NewTag("div",x$4)),[(x$5=List.ofSeq(Seq.delay(function()
   {
    var x$7;
    return Seq.append($this.UserScore.ZoneAdmin>0?[(x$7=[$this.Badge("zone-admin","Zone Admin")],Tags$1.Tags().NewTag("li",x$7))]:[],Seq.delay(function()
    {
     var x$8;
     return Seq.append($this.UserScore.GroupAdmin>0?[(x$8=[$this.Badge("group-admin","Group Admin")],Tags$1.Tags().NewTag("li",x$8))]:[],Seq.delay(function()
     {
      var x$9;
      return Seq.append($this.UserScore.Author?[(x$9=[$this.Badge("author","Author")],Tags$1.Tags().NewTag("li",x$9))]:[],Seq.delay(function()
      {
       var x$10;
       return $this.UserScore.Developer?[(x$10=[$this.Badge("developer","Developer")],Tags$1.Tags().NewTag("li",x$10))]:[];
      }));
     }));
    }));
   })),Tags$1.Tags().NewTag("ul",x$5))]),Operators$1.add((x$6=[Attr.Attr().NewAttr("class","thumbnail-summary-buttons")],Tags$1.Tags().NewTag("div",x$6)),List.ofSeq(Seq.delay(function()
   {
    var x$7;
    return Seq.append([Operators$1.add((x$7=[Attr.Attr().NewAttr("href",$this.UserProfileUrl)],Tags$1.Tags().NewTag("a",x$7)),[Tags$1.Tags().text("Profile")])],Seq.delay(function()
    {
     var x$8;
     return $this.UserScore.Author?Seq.append([(x$8=[Tags$1.Tags().text(" - ")],Tags$1.Tags().NewTag("span",x$8))],Seq.delay(function()
     {
      var x$9;
      return[Operators$1.add((x$9=[Attr.Attr().NewAttr("href",$this.UserBlogUrl)],Tags$1.Tags().NewTag("a",x$9)),[Tags$1.Tags().text("Blog")])];
     })):[];
    }));
   })))]));
  }
 },Web.Control,UserImageHoverSummary);
 TagCloudUnfoldButton=Client$3.TagCloudUnfoldButton=Runtime.Class({
  get_Body:function()
  {
   var $this,x,x$1,x$2,x$3,x$4;
   $this=this;
   x=Operators$1.add((x$1=[Attr.Attr().NewAttr("class","tag-cloud-unfold-button")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=[Attr.Attr().NewAttr("src","/images/downarrow.gif")],Tags$1.Tags().NewTag("img",x$2)),Tags$1.Tags().text("See all tags"),(x$3=[Attr.Attr().NewAttr("src","/images/downarrow.gif")],Tags$1.Tags().NewTag("img",x$3))]);
   x$4=function(e)
   {
    var jq,selector,v,x$5,x$6,x$7,x$8;
    $this.isFolded=!$this.isFolded;
    jq=(selector=$this.selector,Global.jQuery(selector));
    e.HtmlProvider.Clear(e.get_Body());
    return v=$this.isFolded?(e.AppendI((x$5=[Attr.Attr().NewAttr("src","/images/downarrow.gif")],Tags$1.Tags().NewTag("img",x$5))),e.AppendI(Tags$1.Tags().text("See all tags")),e.AppendI((x$6=[Attr.Attr().NewAttr("src","/images/downarrow.gif")],Tags$1.Tags().NewTag("img",x$6))),jq.addClass("folded")):(e.AppendI((x$7=[Attr.Attr().NewAttr("src","/images/uparrow.gif")],Tags$1.Tags().NewTag("img",x$7))),e.AppendI(Tags$1.Tags().text("Hide tags")),e.AppendI((x$8=[Attr.Attr().NewAttr("src","/images/uparrow.gif")],Tags$1.Tags().NewTag("img",x$8))),jq.removeClass("folded"));
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   }(x));
   return x;
  }
 },Web.Control,TagCloudUnfoldButton);
 Client$3.HoverSummary=function(extraClass,imageUrl,imageLink,content)
 {
  var summaryContainer,x,x$1,x$2,x$3,x$4,basicThumbnail,x$5,x$6,x$7;
  summaryContainer=Operators$1.add((x=[Attr.Attr().NewAttr("class","thumbnail-summary-container hidden "+extraClass)],Tags$1.Tags().NewTag("div",x)),[(x$1=new List.T({
   $:1,
   $0:Operators$1.add((x$2=[Attr.Attr().NewAttr("class","thumbnail-summary-photo")],Tags$1.Tags().NewTag("div",x$2)),[Operators$1.add((x$3=[Attr.Attr().NewAttr("href",imageLink)],Tags$1.Tags().NewTag("a",x$3)),[(x$4=[Attr.Attr().NewAttr("src",imageUrl)],Tags$1.Tags().NewTag("img",x$4))])]),
   $1:content
  }),Tags$1.Tags().NewTag("div",x$1))]);
  basicThumbnail=Operators$1.add((x$5=[Attr.Attr().NewAttr("class","thumbnail-holder")],Tags$1.Tags().NewTag("div",x$5)),[Operators$1.add((x$6=[Attr.Attr().NewAttr("href",imageLink)],Tags$1.Tags().NewTag("a",x$6)),[(x$7=[Attr.Attr().NewAttr("src",imageUrl)],Tags$1.Tags().NewTag("img",x$7))])]);
  return Tags$1.Tags().NewTag("div",[summaryContainer,basicThumbnail]);
 };
 Client$3.YesNoDialog=function(title,message,callback)
 {
  var conf,dialog;
  conf=new DialogConfiguration.New();
  dialog=[null];
  conf.title=title;
  conf.modal=true;
  conf.buttons={
   No:function()
   {
    var _this;
    _this=dialog[0];
    Global.jQuery(_this.element.Dom).dialog("close");
   },
   Yes:function()
   {
    var _this;
    callback(dialog[0]);
    _this=dialog[0];
    Global.jQuery(_this.element.Dom).dialog("close");
   }
  };
  conf.autoOpen=false;
  dialog[0]=Dialog.New1(message,conf);
  return dialog[0];
 };
 Client$3.AddRemoveAdminsForm=function(addRpc,removeRpc,currentAdmins)
 {
  var admins,buttonClass,entry,tbody,x;
  function addForm()
  {
   var x$1,b;
   return Operators$1.add((x$1=[Attr.Attr().NewAttr("colspan","2")],Tags$1.Tags().NewTag("td",x$1)),[(b=Formlet$1.Do(),b.Delay(function()
   {
    var f;
    return b.Bind(Enhance$3.WithFormContainer((f=FwLS.Input("Username","Enter the username of the new administrator","zone-add-admin-input"),Client$3.EnhanceWithCustomSubmitButton(buttonClass,"Add administrator",f))),function(a)
    {
     return b.Bind(Formlet.LoadingFormletWithLogin(addRpc(a)),function(a$1)
     {
      var p,a$2;
      return b.ReturnFrom(a$1.$==0?(tbody.HtmlProvider.Clear(tbody.get_Body()),!(p=function(admin)
      {
       return admin===a;
      },function(l)
      {
       return List.exists(p,l);
      }(admins[0]))?admins[0]=List.append(admins[0],List.ofArray([a])):void 0,a$2=function(admin)
      {
       tbody.AppendI(entry(admin));
      },function(l)
      {
       List.iter(a$2,l);
      }(admins[0]),tbody.AppendI(addForm()),Formlet$1.Return()):FormletHelpers.ErrorF(a$1.$0));
     });
    });
   }))]);
  }
  admins=[currentAdmins];
  buttonClass=Server.Small();
  entry=function(name)
  {
   var tr,x$1,x$2,b;
   tr=Tags$1.Tags().NewTag("tr",[]);
   return Operators$1.add(tr,[Operators$1.add((x$1=[Attr.Attr().NewAttr("style","text-align: right; vertical-align: middle;")],Tags$1.Tags().NewTag("td",x$1)),[Tags$1.Tags().text(name)]),(x$2=[(b=Formlet$1.Do(),b.Delay(function()
   {
    var f;
    return b.Bind((f=Formlet$1.Return(null),Client$3.EnhanceWithCustomSubmitButton(buttonClass,"Remove",f)),function()
    {
     return b.Bind(Formlet.LoadingFormletWithLogin(removeRpc(name)),function(a)
     {
      return b.ReturnFrom(a.$==0?(tr.HtmlProvider.Clear(tr.get_Body()),Formlet$1.Return()):FormletHelpers.ErrorF(a.$0));
     });
    });
   }))],Tags$1.Tags().NewTag("td",x$2))]);
  };
  tbody=Tags$1.Tags().NewTag("tbody",[]);
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","zone-admin-admins-form")],Tags$1.Tags().NewTag("table",x)),[Operators$1.add(tbody,List.ofSeq(Seq.delay(function()
  {
   var l;
   return Seq.append((l=admins[0],List.map(entry,l)),Seq.delay(function()
   {
    return[addForm()];
   }));
  })))]);
 };
 Client$3.EnhanceWithSubmitButton=function(cl,formlet)
 {
  return Client$3.EnhanceWithCustomSubmitButton(cl,"Submit",formlet);
 };
 Client$3.EnhanceWithCustomSubmitButton=function(cl,submit,formlet)
 {
  return Enhance$3.WithCustomSubmitButton(FormButtonConfiguration.New({
   $:1,
   $0:submit
  },FormButtonConfiguration.get_Default().Style,{
   $:1,
   $0:cl
  }),formlet);
 };
 Client$3.EnhanceWithSubmitAndResetButtons=function(cl,formlet)
 {
  return Client$3.EnhanceWithCustomSubmitAndResetButtons(cl,"Submit","Reset",formlet);
 };
 Client$3.EnhanceWithCustomSubmitAndResetButtons=function(cl,submit,reset,formlet)
 {
  return Enhance$3.WithCustomSubmitAndResetButtons(FormButtonConfiguration.New({
   $:1,
   $0:submit
  },FormButtonConfiguration.get_Default().Style,{
   $:1,
   $0:cl
  }),FormButtonConfiguration.New({
   $:1,
   $0:reset
  },FormButtonConfiguration.get_Default().Style,{
   $:1,
   $0:cl
  }),formlet);
 };
 Client$3.Button=function(label,href,cl)
 {
  var x;
  return Operators$1.add((x=List.ofSeq(Seq.delay(function()
  {
   return Seq.append(!Strings.IsNullOrEmpty(href)?[Attr.Attr().NewAttr("href",href)]:[],Seq.delay(function()
   {
    return[Attr.Attr().NewAttr("class",cl)];
   }));
  })),Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text(label)]);
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  var i,B;
  SC$2.RichEditorParams=(i=AdvancedHtmlEditorConfiguration.get_Default(),(B={
   $:1,
   $0:List.ofArray([List.ofArray([{
    $:0
   },{
    $:1
   },{
    $:2
   },{
    $:3
   },{
    $:40
   },{
    $:15
   },{
    $:16
   },{
    $:40
   },{
    $:4
   },{
    $:5
   },{
    $:6
   },{
    $:7
   },{
    $:40
   },{
    $:9
   },{
    $:8
   },{
    $:40
   },{
    $:25
   },{
    $:40
   },{
    $:17
   },{
    $:18
   },{
    $:19
   },{
    $:40
   },{
    $:20
   },{
    $:22
   },{
    $:40
   },{
    $:21
   }]),List.T.Empty,List.T.Empty])
  },AdvancedHtmlEditorConfiguration.New({
   $:1,
   $0:608
  },{
   $:1,
   $0:250
  },i.Plugins,{
   $:1,
   $0:"top"
  },i.ToolbarAlign,i.StatusbarLocation,B)));
  SC$2.$cctor=Global.ignore;
 });
 Client$4.LatestTweets=function(panel,twitterUser)
 {
  var ignoredWords,e,TOKENIZE,linkToTag,formatTextToElementList,computeWordStatistics,showTweets;
  ignoredWords=(e=List.ofArray(["a","about","above","after","again","against","all","am","an","and","any","are","aren","as","at","be","because","been","before","being","below","between","both","but","by","can","cannot","could","couldn","did","didn","do","does","doesn","doing","don","down","during","each","few","for","from","further","had","hadn","has","hasn","have","haven","having","he","her","here","hers","herself","him","himself","his","how","i","if","in","into","is","isn","it","its","itself","let","me","more","most","mustn","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan","she","should","shouldn","so","some","such","than","that","the","their","theirs","them","themselves","then","there","these","they","this","those","through","to","too","under","until","up","very","was","wasn","we","were","weren","what","when","where","which","while","who","whom","why","with","won","would","wouldn","you","your","yours","yourself","yourselves","t","d","ll","s","ve","m","re","!","$","%","^","&","*","(",")","+","-","/","\\"," ","_",":",";",",",".","?","'","\"","=","rt"]),new FSharpSet.New$1(BalancedTree.OfSeq(e)));
  TOKENIZE=function(s)
  {
   function tokenize(currentToken,input)
   {
    return Seq.delay(function()
    {
     var $1,$2,$3;
     if(input.length===0)
      return[];
     else
      if(input.length===1)
       return[currentToken+input];
      else
       {
        $2=Strings.Substring(input,0,1);
        $3=Strings.Remove(input,0,1);
        switch($2)
        {
         case"&":
          return Seq.append(currentToken!==""?[currentToken]:[],Seq.delay(function()
          {
           return tokenize("&",$3);
          }));
          break;
         case";":
          return Strings.StartsWith(currentToken,"&")?Seq.append([currentToken+";"],Seq.delay(function()
          {
           return tokenize("",$3);
          })):currentToken!==""?Seq.append([currentToken],Seq.delay(function()
          {
           return Seq.append([$2],Seq.delay(function()
           {
            return tokenize("",$3);
           }));
          })):[];
          break;
         case"?":
         case"=":
         case"`":
         case"'":
         case"\"":
         case"$":
         case"!":
         case"*":
         case"+":
         case"-":
         case")":
         case"(":
         case",":
         case" ":
          return Seq.append(currentToken!==""?[currentToken]:[],Seq.delay(function()
          {
           return Seq.append([$2],Seq.delay(function()
           {
            return tokenize("",$3);
           }));
          }));
          break;
         default:
          return tokenize(currentToken+$2,$3);
          break;
        }
       }
    });
   }
   return tokenize("",s);
  };
  linkToTag=function(tag)
  {
   var m,s;
   m=tag.charCodeAt(0);
   return m===35?"https://twitter.com/#!/search/realtime/%23"+(s=tag.substring(1)+" from:"+twitterUser+" include:retweets",Global.encodeURI(s)):m===64?"https://twitter.com/#!/search/realtime/"+Global.encodeURI(" from:"+twitterUser+" "+tag+" "+"include:retweets"):"#";
  };
  formatTextToElementList=function(s)
  {
   var s$1;
   return List.ofSeq((s$1=TOKENIZE(s),Seq.map(function(word)
   {
    var x,_this,_this$1,x$1,x$2,x$3;
    return word==="RT"?(x=[Attr.Attr().NewAttr("src","/images/retweet.png"),Attr.Attr().NewAttr("alt","RT")],Tags$1.Tags().NewTag("img",x)):((_this=word.toLowerCase(),Strings.StartsWith(_this,"http://"))?true:(_this$1=word.toLowerCase(),Strings.StartsWith(_this$1,"https://")))?Operators$1.add((x$1=[Attr.Attr().NewAttr("href",word)],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text(word)]):(Strings.StartsWith(word,"@")?true:Strings.StartsWith(word,"#"))?Operators$1.add((x$2=[(x$3=linkToTag(word),Attr.Attr().NewAttr("href",x$3)),Attr.Attr().NewAttr("class","tweet-link")],Tags$1.Tags().NewTag("a",x$2)),[Tags$1.Tags().text(word)]):Client$4.op_MinusBang(Tags$1.Tags().NewTag("span",[]),word);
   },s$1)));
  };
  computeWordStatistics=function(tweets)
  {
   var res,p,p$1,p$2,t,f,s;
   res=List.rev((p=function(word,count)
   {
    return count>1;
   },function(l)
   {
    return List.filter(function($1)
    {
     return p($1[0],$1[1]);
    },l);
   }((p$1=function(t$1)
   {
    return t$1[1];
   },function(l)
   {
    return List.sortBy(p$1,l);
   }((p$2=function(word)
   {
    var _this,_this$1;
    return((_this=word.toLowerCase(),Strings.StartsWith(_this,"http://"))?true:(_this$1=word.toLowerCase(),Strings.StartsWith(_this$1,"https://")))?false:ignoredWords.Contains(word.toLowerCase())?false:true;
   },function(l)
   {
    return List.filter(function($1)
    {
     return p$2($1[0],$1[1]);
    },l);
   }((t=(f=function(map,tweet)
   {
    var f$1;
    f$1=function(map$1,word)
    {
     return map$1.ContainsKey(word)?map$1.Add(word,map$1.get_Item(word)+1):map$1.Add(word,1);
    };
    return function(s$1)
    {
     return Seq.fold(f$1,map,s$1);
    }(TOKENIZE(tweet.text));
   },(s=new FSharpMap.New([]),function(a)
   {
    return Arrays.fold(f,s,a);
   })(tweets)),List.ofSeq(Map.ToSeq(t))))))))));
   return List.length(res)>20?List.ofSeq(Seq.take(20,res)):res;
  };
  showTweets=function(statuses)
  {
   var x,x$1,x$2,ts,count,ix,$1;
   if(statuses.$==0)
    {
     ts=statuses.$0;
     panel.AppendI(Operators$1.add((x=[Attr.Attr().NewAttr("class","top-tweet-words")],Tags$1.Tags().NewTag("ul",x)),List.ofSeq(Seq.delay(function()
     {
      return Seq.append(Seq.collect(function(m)
      {
       var word,count$1,x$3,x$4,x$5;
       word=m[0];
       count$1=m[1];
       return[(x$3=[Operators$1.add((x$4=[(x$5=linkToTag(word),Attr.Attr().NewAttr("href",x$5)),Attr.Attr().NewAttr("class","tweet-link")],Tags$1.Tags().NewTag("a",x$4)),[Tags$1.Tags().text(word)]),Tags$1.Tags().text("x "+Global.String(count$1))],Tags$1.Tags().NewTag("li",x$3))];
      },computeWordStatistics(ts)),Seq.delay(function()
      {
       var x$3;
       return[(x$3=[Attr.Attr().NewAttr("class","closer")],Tags$1.Tags().NewTag("li",x$3))];
      }));
     }))));
     panel.AppendI((x$1=[Attr.Attr().NewAttr("class","closer")],Tags$1.Tags().NewTag("div",x$1)));
     panel.AppendI((x$2=[Tags$1.Tags().text("Latest")],Tags$1.Tags().NewTag("b",x$2)));
     count=Operators.Min(3,Arrays.length(ts));
     for(ix=0,$1=count-1;ix<=$1;ix++)(function(ix$1)
     {
      var x$3,x$4;
      return panel.AppendI(Operators$1.add(Operators$1.add((x$3=[Attr.Attr().NewAttr("class","tweet")],Tags$1.Tags().NewTag("div",x$3)),formatTextToElementList(Arrays.get(ts,ix).text)),[Operators$1.add((x$4=[Attr.Attr().NewAttr("class","tweet-info")],Tags$1.Tags().NewTag("div",x$4)),List.ofSeq(Seq.delay(function()
      {
       return Seq.append([Tags$1.Tags().text("Posted on ")],Seq.delay(function()
       {
        var x$5,_this,ct;
        return Seq.append([(x$5=(_this=Arrays.get(ts,ix$1).created_at,(ct=Arrays.get(ts,ix$1).created_at.indexOf("+"),Strings.Substring(_this,0,ct))),Tags$1.Tags().text(x$5))],Seq.delay(function()
        {
         var x$6;
         return Seq.append(Arrays.get(ts,ix$1).retweeted?[(x$6=", retweeted "+Global.String(Arrays.get(ts,ix$1).retweet_count)+" times",Tags$1.Tags().text(x$6))]:[],Seq.delay(function()
         {
          var x$7,x$8;
          return[Operators$1.add((x$7=[(x$8="https://twitter.com/#!/"+twitterUser+"/status/"+Arrays.get(ts,ix$1).id_str,Attr.Attr().NewAttr("href",x$8)),Attr.Attr().NewAttr("class","buttonPro small white")],Tags$1.Tags().NewTag("a",x$7)),[Tags$1.Tags().text("View")])];
         }));
        }));
       }));
      })))]));
     }(ix));
    }
  };
  return Concurrency.Delay(function()
  {
   var x;
   x=Client$28.GetUser(null,{
    $:1,
    $0:twitterUser
   },null);
   return Concurrency.Bind(x,function()
   {
    var x$1;
    x$1=Client$29.GetUserTimeLine(null,null,null,null,null,{
     $:1,
     $0:twitterUser
    },null,null,null);
    return Concurrency.Bind(x$1,function(a)
    {
     showTweets(a);
     return Concurrency.Return(null);
    });
   });
  });
 };
 Client$4.op_MinusBang=function(elem,text)
 {
  var element;
  (element=elem.get_Body(),Global.jQuery(element)).html(text);
  return elem;
 };
 ShowLocation=Client$5.ShowLocation=Runtime.Class({
  get_Body:function()
  {
   var $this,center,mapElement,x,f;
   $this=this;
   center=new Global.google.maps.LatLng(0,0);
   mapElement=(x=[Attr.Attr().NewAttr("class","location-map")],Tags$1.Tags().NewTag("div",x));
   (f=function(mapElement$1)
   {
    var options,r,map,mapDiv,markerOption,marker,setLatLong,location,geoCoder,req;
    options=(r={
     center:center,
     zoom:8
    },r.mapTypeId=Global.google.maps.MapTypeId.ROADMAP,r);
    map=(mapDiv=mapElement$1.get_Body(),new Global.google.maps.Map(mapDiv,options));
    map.setZoom(15);
    markerOption={
     position:center
    };
    markerOption.map=map;
    marker=new Global.google.maps.Marker(markerOption);
    setLatLong=function(latLong)
    {
     marker.setPosition(latLong);
     map.setCenter(latLong);
    };
    location=$this.LocationString;
    geoCoder=new Global.google.maps.Geocoder();
    req={};
    req.address=location;
    geoCoder.geocode(req,function(res)
    {
     var m;
     m=List.ofArray(res);
     m.$==0?Global.alert("search failed"):setLatLong(m.$0.geometry.location);
    });
   },function(w)
   {
    Operators$1.OnAfterRender(f,w);
   })(mapElement);
   return mapElement;
  }
 },Web.Control,ShowLocation);
 ShowMap=Client$5.ShowMap=Runtime.Class({
  get_Body:function()
  {
   return Client$5.DeveloperMap(this.items);
  }
 },Web.Control,ShowMap);
 Client$5.LocationFormForUsername=function(username,def_dao)
 {
  var editLocationForm,existingLocationForm,newLocationForm,f,x,b,l,i;
  editLocationForm=function(def)
  {
   var f$1,f$2,f$3,f$4,f$5,f$6,x$1,l$1,i$1;
   return Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(descr,s1,s2,city,state,zip,country,memo)
   {
    return LocationDetails.New(descr,s1,s2,city,state,country,zip,memo);
   },8)),FwLS.InputWithValue(def.Description,"Description","You must enter a description","location-description")),FwLS.InputWithValue(def.Street1,"Street 1","You must enter a street","street-1")),(f$1=(f$2=(f$3=function(s)
   {
    return s.toLowerCase()!==""?{
     $:1,
     $0:s
    }:null;
   },function(f$7)
   {
    return Formlet$1.Map(f$3,f$7);
   }(Controls$2.Input(def.Street2==null?"":def.Street2.$0))),Enhance$3.WithTextLabel("Street 2",f$2)),Enhance$3.WithCssClass("street-2",f$1))),FwLS.InputWithValue(def.City,"City","You must enter a city","city")),(f$4=(f$5=(f$6=function(s)
   {
    return s.toLowerCase()!==""?{
     $:1,
     $0:s
    }:null;
   },function(f$7)
   {
    return Formlet$1.Map(f$6,f$7);
   }(Controls$2.Input(def.State==null?"":def.State.$0))),Enhance$3.WithTextLabel("State",f$5)),Enhance$3.WithCssClass("state",f$4))),FwLS.InputWithValue(def.Zip,"Zip code","You must enter a zip code","zip")),FwLS.InputWithValue(def.Country,"Country","You must enter a country","country")),(x$1=FwLS.RichEditorWithValueOptional(def.Memo,"Directions","memo"),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$1,x$1))));
  };
  existingLocationForm=function()
  {
   var p,l$1,locIdOption,def,locations,locs,m,b$1;
   p=def_dao.$==1?(l$1=def_dao.$0,[{
    $:1,
    $0:l$1
   },{
    $:1,
    $0:l$1.Id
   }]):[null,null];
   locIdOption=p[1];
   def=p[0];
   locations=(locs=(m=function(loc)
   {
    return[loc.Details.Description,{
     $:1,
     $0:loc
    }];
   },function(l$2)
   {
    return List.map(m,l$2);
   }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.Location+Rpc.GetLocationsForUsername:-1060865954",[username,locIdOption]))),new List.T({
    $:1,
    $0:["<Select>",null],
    $1:locs
   }));
   b$1=Formlet$1.Do();
   return b$1.Delay(function()
   {
    var f$1,f$2,a,def$1,p$1;
    return b$1.Bind((f$1=function(o)
    {
     return o.$0;
    },function(f$3)
    {
     return Formlet$1.Map(f$1,f$3);
    }((f$2=Enhance$3.WithValidationIcon((a=function(o)
    {
     return o!=null;
    },function(a$1)
    {
     return Data.Validator().Is(a,"You must select an existing location",a$1);
    }(Controls$2.Select((def!=null?def.$==1:false)?(def$1=def.$0,(p$1=function(a$1,i$1)
    {
     return i$1!=null?i$1.$0.Id===def$1.Id:false;
    },function(l$2)
    {
     return Seq.findIndex(function($1)
     {
      return p$1($1[0],$1[1]);
     },l$2);
    }(locations))):0,locations)))),Enhance$3.WithTextLabel("Address",f$2)))),function(a$1)
    {
     return b$1.Bind(editLocationForm(a$1.Details),function(a$2)
     {
      return b$1.Return({
       $:1,
       $0:{
        Details:a$2,
        Id:a$1.Id
       }
      });
     });
    });
   });
  };
  newLocationForm=function()
  {
   var f$1;
   f$1=function(a)
   {
    return{
     $:0,
     $0:a
    };
   };
   return function(f$2)
   {
    return Formlet$1.Map(f$1,f$2);
   }(editLocationForm(LocationDetails.get_Default()));
  };
  f=(x=(b=Formlet$1.Do(),b.Delay(function()
  {
   var def,f$1;
   return b.Bind((def=def_dao.$==1?1:def_dao.$==2?2:0,(f$1=Controls$2.Select(def,List.ofArray([["New address",[true,true]],["Existing address",[true,false]],["Online",[false,false]]])),Enhance$3.WithTextLabel("Choose location",f$1))),function(a)
   {
    var re,isPhysical;
    re=a[1];
    isPhysical=a[0];
    return b.Bind(isPhysical?re?newLocationForm():existingLocationForm():Formlet$1.Return({
     $:2
    }),function(a$1)
    {
     return b.Return(a$1);
    });
   });
  })),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:0
  })),Enhance$3.WithLabelConfiguration(l,x)));
  return Enhance$3.WithCssClass("location-form",f);
 };
 Client$5.DeveloperMap=function(items)
 {
  var center,mapElement,x,search,locationToString,map,mapElement$1,f,locations,a,p,p$1;
  center=new Global.google.maps.LatLng(47.219568,-27.421875);
  mapElement=(x=[Attr.Attr().NewAttr("class","map-groups")],Tags$1.Tags().NewTag("div",x));
  search=function(location,cb)
  {
   var geoCoder,req;
   geoCoder=new Global.google.maps.Geocoder();
   req={};
   req.address=location;
   return geoCoder.geocode(req,function(res)
   {
    var m;
    if(!Unchecked.Equals(res,null))
     {
      m=List.ofArray(res);
      m.$==0?void 0:cb(m.$0.geometry.location);
     }
   });
  };
  locationToString=function(location)
  {
   var m,m$1;
   return location.Street1+(m=location.Street2,(m!=null?m.$==1:false)?" "+m.$0:"")+", "+location.City+(m$1=location.State,(m$1!=null?m$1.$==1:false)?", "+m$1.$0:"")+", "+location.Country+" "+location.Zip;
  };
  map=[null];
  mapElement$1=((f=function(mapElement$2)
  {
   var options,r,mapDiv;
   options=(r={
    center:center,
    zoom:8
   },r.mapTypeId=Global.google.maps.MapTypeId.ROADMAP,r);
   map[0]=(mapDiv=mapElement$2.get_Body(),new Global.google.maps.Map(mapDiv,options));
   map[0].setZoom(2);
  },function(w)
  {
   Operators$1.OnAfterRender(f,w);
  })(mapElement),mapElement);
  locations=(a=function(link,location)
  {
   search(locationToString(location),function(loc)
   {
    var markerOptions,marker,v;
    markerOptions={
     position:loc
    };
    markerOptions.map=map[0];
    marker=new Global.google.maps.Marker(markerOptions);
    v=Global.google.maps.event.addListener(marker,"click",function()
    {
     Global.location.href=link;
    });
   });
  },function(s)
  {
   Seq.iter(function($1)
   {
    return a($1[0],$1[1]);
   },s);
  }((p=function(t)
  {
   return t[0];
  },function(s)
  {
   return Seq.distinctBy(p,s);
  }((p$1=function(a$1,loc)
  {
   return loc.Country!=="Online";
  },function(l)
  {
   return List.filter(function($1)
   {
    return p$1($1[0],$1[1]);
   },l);
  }(items))))));
  return mapElement$1;
 };
 ConferenceDatesControl=Client$6.ConferenceDatesControl=Runtime.Class({
  get_Body:function()
  {
   var $this,form,x,b;
   $this=this;
   form=Client$6.conferenceDatingForm(false,this.Dao);
   x=[(b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(form,function(a)
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.EditConference:1483120902",[$this.GroupUrlName,a])),function(a$1)
     {
      return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):FormletHelpers.SuccessF("Conference was successfully updated."));
     });
    });
   }))];
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,ConferenceDatesControl);
 TurnGroupToConferenceControl=Client$6.TurnGroupToConferenceControl=Runtime.Class({
  get_Body:function()
  {
   var $this,form,x,x$1,b;
   $this=this;
   form=Client$6.conferenceDatingForm(true,ConferenceExtraDAO.FromDate(this.StartDateDao));
   return this.GroupUrlName!=null?(x=[Operators$1.add((x$1=[Attr.Attr().NewAttr("class","warning")],Tags$1.Tags().NewTag("p",x$1)),[Tags$1.Tags().text("You can turn this group into a conference by filling in the form below. Note that this can NOT be reversed. If you have existing group\r\n                            members they will no longer be shown on the conference's page.")]),(b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(form,function(a)
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.TurnGroupToConference:1483120902",[$this.GroupUrlName.$0,a])),function(a$1)
     {
      return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(Global.window.location.reload(true),FormletHelpers.SuccessF("Group was successfully converted to a conference.")));
     });
    });
   }))],Tags$1.Tags().NewTag("div",x)):Tags$1.Tags().NewTag("div",[]);
  }
 },Web.Control,TurnGroupToConferenceControl);
 CreateOrEditGroupFormByUsername=Client$6.CreateOrEditGroupFormByUsername=Runtime.Class({
  get_Body:function()
  {
   var $this,buttonClass,conf,nameForm,groupInfoForm,f,f$1,a,f$2,f$3,x,shortDescriptionAndDateForm,dateForm,x$1,f$4,f$5,m,l,i,x$2,f$6,f$7,a$1,a$2,l$1,i$1,locationForm,p,m$1,m$2,dao,form1,f$8,f$9,x$3,l$2,i$2,x$4,l$3,i$3,f$10,s,$1,$2,b;
   function defaultString(f$11)
   {
    var m$3,m$4,f$12;
    m$3=(m$4=(f$12=function(t)
    {
     return t[1];
    },function(x$5)
    {
     return f$11(f$12(x$5));
    }),function(o)
    {
     return o==null?null:{
      $:1,
      $0:m$4(o.$0)
     };
    }($this.Editing));
    return(m$3!=null?m$3.$==1:false)?m$3.$0===null?"":m$3.$0:"";
   }
   $this=this;
   buttonClass=Server.Large();
   conf=FormContainerConfiguration.New(this.Editing!=null?null:{
    $:1,
    $0:{
     $:0,
     $0:"Create a group"
    }
   },Padding.New(null,null,null,null),this.Editing!=null?null:{
    $:1,
    $0:{
     $:0,
     $0:"Use this form to create a user group or a conference."
    }
   },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
   nameForm=Data.$(Formlet$1.Return(Global.id),FwLS.InputWithValue(defaultString(function(c)
   {
    return c.Name;
   }),"Group name","You must enter a name for your group","group-name"));
   groupInfoForm=Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(urlname)
   {
    return function(adminEmail)
    {
     return[urlname,adminEmail];
    };
   }),(f=(f$1=Enhance$3.WithValidationIcon((a=Controls$2.Input(defaultString(function(c)
   {
    return c.UrlName;
   })),Data.Validator().IsRegexMatch("^[0-9a-zA-Z\\-]+$","Your group URL must only contain alphanumeric characters",a))),Enhance$3.WithTextLabel("Group URL",f$1)),Enhance.WithCssClass("group-url",f))),(f$2=(f$3=Enhance$3.WithValidationIcon((x=Controls$2.Input(defaultString(function(c)
   {
    return c.Email;
   })),(Data.Validator().IsEmail("You must enter an email for the group administrator"))(x))),Enhance$3.WithTextLabel("Group email",f$3)),Enhance.WithCssClass("group-email",f$2))));
   shortDescriptionAndDateForm=(dateForm=Data.$(Formlet$1.Return(DateDAO.OfEcma),(x$1=(f$4=Enhance$3.WithValidationIcon((f$5=function(el)
   {
    var x$5;
    return Operators$1.add((x$5=[Attr.Attr().NewAttr("style","padding: 10px;")],Tags$1.Tags().NewTag("div",x$5)),[el]);
   },function(f$11)
   {
    return Formlet$1.MapElement(f$5,f$11);
   }(Controls$4.Datepicker((m=function(id,c)
   {
    return DateDAO.ToEcma$1(c.FoundedOnDate);
   },function(o)
   {
    return o==null?null:{
     $:1,
     $0:m.apply(null,o.$0)
    };
   }(this.Editing)))))),Enhance$3.WithTextLabel("Founded on",f$4)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l,x$1)))),Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(info)
   {
    return function(date)
    {
     return[info,date];
    };
   }),(x$2=(f$6=(f$7=Enhance$3.WithValidationIcon((a$1=function(s$1)
   {
    return s$1.length<=255;
   },function(a$3)
   {
    return Data.Validator().Is(a$1,"You can't enter more than 255 characters",a$3);
   }((a$2=Controls$2.TextArea(defaultString(function(c)
   {
    return c.ShortDescriptionText;
   })),Data.Validator().IsNotEmpty("You must enter a description for your group",a$2))))),Enhance$3.WithTextLabel("Description - as shown in the group's listing",f$7)),Enhance.WithCssClass("group-short-description",f$6)),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$1,x$2)))),dateForm)));
   locationForm=(p=(m$1=this.Editing,(m$1!=null?m$1.$==1:false)?(m$2=m$1.$0[1].Location,m$2.$==0?[null,m$2]:m$2.$==2?[null,m$2]:[{
    $:1,
    $0:m$2.$0.Id
   },m$2]):[null,{
    $:0,
    $0:LocationDetails.get_Default()
   }]),(dao=p[1],Client$5.LocationFormForUsername(this.Username,dao)));
   form1=(f$8=(f$9=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function(name)
   {
    return function(t)
    {
     var urlName,adminEmail;
     urlName=t[0];
     adminEmail=t[1];
     return function(t$1)
     {
      var shortDescr,date;
      shortDescr=t$1[0];
      date=t$1[1];
      return Runtime.Curried(function(loc,descr,banner,tags)
      {
       return{
        Name:name,
        UrlName:urlName,
        Email:adminEmail,
        Location:loc,
        FoundedOnDate:date,
        ShortDescriptionText:shortDescr,
        DescriptionHtml:descr,
        BannerHtml:banner,
        Tags:tags
       };
      },4);
     };
    };
   }),nameForm),groupInfoForm),shortDescriptionAndDateForm),locationForm),(x$3=FwLS.RichEditorWithValue(defaultString(function(c)
   {
    return c.DescriptionHtml;
   }),"Description markup - on your group's page","You must enter a brief description of your group","group-description"),(l$2=(i$2=LabelConfiguration.get_Default(),LabelConfiguration.New(i$2.Align,i$2.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$2,x$3)))),(x$4=FwLS.RichEditorWithValueOptional(defaultString(function(c)
   {
    return c.BannerHtml;
   }),"Banner markup (optional) - on your group's page","group-banner"),(l$3=(i$3=LabelConfiguration.get_Default(),LabelConfiguration.New(i$3.Align,i$3.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$3,x$4)))),(f$10=FwLS.InputWithValue((s=($1=this.Editing,($2=this.DefaultTags,$1==null?$2:$1.$0[1].Tags)),Strings.concat(", ",s)),"Tags (comma-separated)","You must enter at least one group tag","group-tags"),Formlet$1.Map(Client$2.ParseTags,f$10))),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$9)),Enhance$3.WithCustomFormContainer(conf,f$8));
   return Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(form1,function(a$3)
    {
     var m$3,orgId;
     return b.Bind(Formlet.LoadingFormletWithLogin((m$3=$this.Editing,(m$3!=null?m$3.$==1:false)?(orgId=m$3.$0[0],(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.EditCompanyByUsername:-151737315",[orgId,a$3,$this.Username])):(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.SaveNewCompanyByUsername:-486541922",[a$3,$this.Username]))),function(a$4)
     {
      return b.ReturnFrom(Formlet$1.OfElement(function()
      {
       var e,x$5,url,x$6,x$7,x$8;
       return a$4.$==1?(e=a$4.$0,Operators$1.add((x$5=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$5)),[Tags$1.Tags().text(e)])):(url=$this.ReturnUrl,Global.location.href=url,Operators$1.add((x$6=[Attr.Attr().NewAttr("class","success")],Tags$1.Tags().NewTag("div",x$6)),[(x$7=[(x$8=$this.Editing!=null?"Your group has been edited.":"Your group has been created.",Tags$1.Tags().text(x$8))],Tags$1.Tags().NewTag("span",x$7))]));
      }));
     });
    });
   })));
  }
 },Web.Control,CreateOrEditGroupFormByUsername);
 GroupSubscribeControl=Client$6.GroupSubscribeControl=Runtime.Class({
  get_Body:function()
  {
   var $this,youAreSubscribed,x,x$1,x$2,x$3,x$4,x$5,x$6,x$7;
   $this=this;
   youAreSubscribed=(x=[(x$1=this.IsSubscribed?"You are a member.":"You are not a member.",Tags$1.Tags().text(x$1))],Tags$1.Tags().NewTag("span",x));
   x$2=[youAreSubscribed,(x$3=[Tags$1.Tags().text(" ")],Tags$1.Tags().NewTag("span",x$3)),(x$4=Operators$1.add((x$5=[Attr.Attr().NewAttr("href","#")],Tags$1.Tags().NewTag("a",x$5)),[(x$6=this.IsSubscribed?"Leave":"Join",Tags$1.Tags().text(x$6))]),(x$7=function(e)
   {
    return Concurrency.Start(Concurrency.Delay(function()
    {
     var x$8,x$9;
     return $this.IsSubscribed?(x$8=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.UnsubscribeCurrentUserToGroup:-322117664",[$this.GroupId]),Concurrency.Bind(x$8,function(a)
     {
      var $1;
      return((a!=null?a.$==1:false)?a.$0.$==0?true:false:false)?($this.IsSubscribed=false,e.HtmlProvider.Clear(e.get_Body()),e.AppendI(Tags$1.Tags().text("Join")),youAreSubscribed.HtmlProvider.Clear(youAreSubscribed.get_Body()),youAreSubscribed.AppendI(Tags$1.Tags().text("You are not a member.")),Concurrency.Return(null)):Concurrency.Return(null);
     })):(x$9=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.SubscribeCurrentUserToGroup:-322117664",[$this.GroupId]),Concurrency.Bind(x$9,function(a)
     {
      var $1;
      return((a!=null?a.$==1:false)?a.$0.$==0?true:false:false)?($this.IsSubscribed=true,e.HtmlProvider.Clear(e.get_Body()),e.AppendI(Tags$1.Tags().text("Leave")),youAreSubscribed.HtmlProvider.Clear(youAreSubscribed.get_Body()),youAreSubscribed.AppendI(Tags$1.Tags().text("You are a member.")),Concurrency.Return(null)):Concurrency.Return(null);
     }));
    }),null);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$7($1,$2);
     };
    },a);
   }(x$4),x$4))];
   return Tags$1.Tags().NewTag("span",x$2);
  }
 },Web.Control,GroupSubscribeControl);
 ContactForm=Client$6.ContactForm=Runtime.Class({
  get_Body:function()
  {
   var $this,form,x,f,f$1,f$2,a,f$3,f$4,a$1,c,x$1,x$2,b;
   $this=this;
   form=(x=Enhance$3.WithFormContainer((f=Data.$(Data.$(Formlet$1.Return(function(subject)
   {
    return function(message)
    {
     return[subject,message];
    };
   }),(f$1=(f$2=Enhance$3.WithValidationIcon((a=Controls$2.Input(""),Data.Validator().IsNotEmpty("You need to enter a subject",a))),Enhance$3.WithTextLabel("Subject",f$2)),Enhance.WithCssClass("group-contact-subject",f$1))),(f$3=(f$4=Enhance$3.WithValidationIcon((a$1=Controls$2.TextArea(""),Data.Validator().IsNotEmpty("You need to enter a message to send",a$1))),Enhance$3.WithTextLabel("Message",f$4)),Enhance.WithCssClass("group-contact-message",f$3))),Enhance.WithCssClass("group-contact-form",f))),(c=Server.Large(),Client$3.EnhanceWithCustomSubmitButton(c,"Send",x)));
   x$1=[(x$2=[Tags$1.Tags().text("You can use this form to send an e-mail to the administrators of this group.")],Tags$1.Tags().NewTag("div",x$2)),(b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(form,function(a$2)
    {
     var subject,message;
     subject=a$2[0];
     message=a$2[1];
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.SendMessageToGroup:1974059677",[$this.GroupId,subject,message])),function(a$3)
     {
      return b.ReturnFrom(a$3.$==1?FormletHelpers.ErrorF(a$3.$0):FormletHelpers.SuccessF("Message sent."));
     });
    });
   }))];
   return Tags$1.Tags().NewTag("div",x$1);
  }
 },Web.Control,ContactForm);
 SubmitProposalForm=Client$6.SubmitProposalForm=Runtime.Class({
  get_Body:function()
  {
   var $this,form,x,f,f$1,f$2,a,f$3,f$4,a$1,c,x$1,x$2,b;
   $this=this;
   form=(x=Enhance$3.WithFormContainer((f=Data.$(Data.$(Formlet$1.Return(function(title)
   {
    return function(abstr)
    {
     return[title,abstr];
    };
   }),(f$1=(f$2=Enhance$3.WithValidationIcon((a=Controls$2.Input(""),Data.Validator().IsNotEmpty("You need to enter a title",a))),Enhance$3.WithTextLabel("Title",f$2)),Enhance.WithCssClass("group-contact-subject",f$1))),(f$3=(f$4=Enhance$3.WithValidationIcon((a$1=Controls$2.TextArea(""),Data.Validator().IsNotEmpty("You must enter an abstract",a$1))),Enhance$3.WithTextLabel("Abstract",f$4)),Enhance.WithCssClass("group-contact-message",f$3))),Enhance.WithCssClass("group-contact-form",f))),(c=Server.Large(),Client$3.EnhanceWithCustomSubmitButton(c,"Send",x)));
   x$1=[(x$2=[Tags$1.Tags().text("You can use this form to submit a talk proposal.  You will be notified in email about acceptance.")],Tags$1.Tags().NewTag("div",x$2)),(b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(form,function(a$2)
    {
     var title,abstr;
     title=a$2[0];
     abstr=a$2[1];
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.SaveTalkProposal:1974059677",[$this.GroupId,title,abstr])),function(a$3)
     {
      return b.ReturnFrom(a$3.$==1?FormletHelpers.ErrorF(a$3.$0):FormletHelpers.SuccessF("Your talk proposal was recorded. Thanks!"));
     });
    });
   }))];
   return Tags$1.Tags().NewTag("div",x$1);
  }
 },Web.Control,SubmitProposalForm);
 AddRemoveAdminsForm=Client$6.AddRemoveAdminsForm=Runtime.Class({
  get_Body:function()
  {
   var $this;
   $this=this;
   return Client$3.AddRemoveAdminsForm(function(name)
   {
    return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.AddAdmin:-746196229",[$this.UrlName,name]);
   },function(name)
   {
    return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.RemoveAdmin:-746196229",[$this.UrlName,name]);
   },this.Admins);
  }
 },Web.Control,AddRemoveAdminsForm);
 ProductUserRemoveControl=Client$6.ProductUserRemoveControl=Runtime.Class({
  get_Body:function()
  {
   var selector;
   return Client$6.ProductUserRemove(this.productId,this.username,(selector=this.listItemSelector,Global.jQuery(selector)));
  }
 },Web.Control,ProductUserRemoveControl);
 ProductUserAddControl=Client$6.ProductUserAddControl=Runtime.Class({
  get_Body:function()
  {
   var $this,x,b;
   $this=this;
   x=[Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    var c;
    return b.Bind(Formlet$1.Horizontal((c=Server.Small(),function(f)
    {
     return Client$3.EnhanceWithCustomSubmitButton(c,"Add user",f);
    }(Controls$2.Input("")))),function(a)
    {
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.AddProductUser:-1319965058",[$this.productId,a])),function(a$1)
     {
      var fullname,li,x$1,v,x$2,x$3,x$4,x$5,element,o,selector;
      return b.ReturnFrom(a$1.$==0?(fullname=a$1.$0,(li=(x$1=[Attr.Attr().NewAttr("class","member")],Tags$1.Tags().NewTag("li",x$1)),(v=(x$2=Operators$1.add(li,[Operators$1.add((x$3=[(x$4=$this.userProfileUrl+a,Attr.Attr().NewAttr("href",x$4))],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text(fullname)]),Operators$1.add((x$5=[Attr.Attr().NewAttr("class","remove-button")],Tags$1.Tags().NewTag("div",x$5)),[Client$6.ProductUserRemove($this.productId,a,(element=li.get_Body(),Global.jQuery(element)))])]).Dom,(o=(selector=$this.listSelector,Global.jQuery(selector)),o.append.apply(o,[x$2].concat([])))),Formlet$1.Return()))):FormletHelpers.ErrorF(a$1.$0));
     });
    });
   })))];
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,ProductUserAddControl);
 ProductPrivacyControl=Client$6.ProductPrivacyControl=Runtime.Class({
  get_Body:function()
  {
   var $this,x,b,x$1;
   $this=this;
   x=[Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    var c;
    return b.Bind(Formlet$1.Horizontal((c=Server.Small(),function(f)
    {
     return Client$3.EnhanceWithCustomSubmitButton(c,"Change product privacy",f);
    }(Controls$2.Select($this.productPrivacy<<0,List.ofArray([["Public",0],["Private",1]]))))),function(a)
    {
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.SetProductPrivacy:-1908983024",[$this.productId,a])),function(a$1)
     {
      var msg;
      return a$1.$==1?(msg=a$1.$0,b.ReturnFrom(FormletHelpers.ErrorF(msg))):b.Return();
     });
    });
   }))),(x$1=[Tags$1.Tags().text("Questions submitted to public products are listed for everyone."),Tags$1.Tags().NewTag("br",[]),Tags$1.Tags().text("Questions submitted to private products are only listed for users of this product.")],Tags$1.Tags().NewTag("div",x$1))];
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,ProductPrivacyControl);
 CreateProductControl=Client$6.CreateProductControl=Runtime.Class({
  get_Body:function()
  {
   var $this,dialogDiv,x,o,r,dialog,form,b,x$1,x$2,_this,x$3;
   $this=this;
   dialogDiv=(x=[Attr.Attr().NewAttr("title","Create a product"),Attr.Attr().NewAttr("style","display: none;")],Tags$1.Tags().NewTag("div",x));
   o=(r=new DialogConfiguration.New(),r.autoOpen=false,r.width=500,r);
   dialog=Dialog.New1(dialogDiv,o);
   form=Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    var c;
    return b.Bind((c=Server.Small(),function(f)
    {
     return Client$3.EnhanceWithCustomSubmitButton(c,"Create",f);
    }(FwL.Input("Product name","Enter a product name."))),function(a)
    {
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.CreateProduct:-596100761",[$this.orgId,a])),function(a$1)
     {
      var msg;
      return a$1.$==1?(msg=a$1.$0,b.ReturnFrom(FormletHelpers.ErrorF(msg))):(Global.jQuery(dialog.element.Dom).dialog("close"),Global.window.location.reload(true),b.Return());
     });
    });
   })));
   x$1=Operators$1.add((x$2=[Attr.Attr().NewAttr("href","#"),(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$2)),[Tags$1.Tags().text("Create a product"),Operators$1.add(dialogDiv,[form])]);
   x$3=function()
   {
    return Global.jQuery(dialog.element.Dom).dialog("open");
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$3($1,$2);
     };
    },a);
   }(x$1));
   return x$1;
  }
 },Web.Control,CreateProductControl);
 DeleteProductControl=Client$6.DeleteProductControl=Runtime.Class({
  get_Body:function()
  {
   var $this,button,dialogDiv,x,o,r,dialog,form,b,x$1,x$2;
   $this=this;
   button=function(l)
   {
    var _this,_this$1;
    return Operators$1.add((_this=Tags$1.Tags(),_this.NewTag("button",[(_this$1=Attr.Attr(),_this$1.NewAttr("class",Server.Small()))])),l);
   };
   dialogDiv=(x=[Attr.Attr().NewAttr("title","Delete product"),Attr.Attr().NewAttr("style","display: none;")],Tags$1.Tags().NewTag("div",x));
   o=(r=new DialogConfiguration.New(),r.autoOpen=false,r.width=500,r);
   dialog=Dialog.New1(dialogDiv,o);
   form=Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    var f,f$1;
    return b.Bind(Formlet$1.Horizontal(Formlet$1.Choose([(f=function()
    {
     return false;
    },function(f$2)
    {
     return Formlet$1.Map(f,f$2);
    }(Controls$2.ElementButton(function()
    {
     return button(List.ofArray([Tags$1.Tags().text("Cancel")]));
    }))),(f$1=function()
    {
     return true;
    },function(f$2)
    {
     return Formlet$1.Map(f$1,f$2);
    }(Controls$2.ElementButton(function()
    {
     return button(List.ofArray([Tags$1.Tags().text("Ok")]));
    })))])),function(a)
    {
     return a?b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.DeleteProduct:1042149960",[$this.productId])),function(a$1)
     {
      var msg;
      return a$1.$==1?(msg=a$1.$0,b.ReturnFrom(FormletHelpers.ErrorF(msg))):(Global.jQuery(dialog.element.Dom).dialog("close"),Global.window.location.reload(true),b.Return());
     }):(Global.jQuery(dialog.element.Dom).dialog("close"),b.Return());
    });
   })));
   x$1=button(List.ofArray([Tags$1.Tags().text("Delete"),Operators$1.add(dialogDiv,[form])]));
   x$2=function()
   {
    return Global.jQuery(dialog.element.Dom).dialog("open");
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x$1));
   return x$1;
  }
 },Web.Control,DeleteProductControl);
 Client$6.ProductUserRemove=function(productId,username,listItem)
 {
  var error_msg,x,x$1,x$2,x$3;
  error_msg=Tags$1.Tags().NewTag("div",[]);
  x=[(x$1=Operators$1.add((x$2=[Attr.Attr().NewAttr("title","Remove"),Attr.Attr().NewAttr("href","#")],Tags$1.Tags().NewTag("a",x$2)),[Tags$1.Tags().text("X")]),(x$3=function()
  {
   return Concurrency.Start(Concurrency.Delay(function()
   {
    var x$4;
    x$4=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Company+Rpc.RemoveProductUser:2128906604",[productId,username]);
    return Concurrency.Bind(x$4,function(a)
    {
     var msg,element;
     return a.$==0?(listItem.remove(),Concurrency.Return(null)):(msg=a.$0,(error_msg.HtmlProvider.Clear(error_msg.get_Body()),error_msg.HtmlProvider.AppendNode(error_msg.get_Body(),error_msg.HtmlProvider.CreateTextNode(msg)),(element=error_msg.get_Body(),Global.jQuery(element)).show().fadeOut(2000),Concurrency.Return(null)));
    });
   }),null);
  },function(a)
  {
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return x$3($1,$2);
    };
   },a);
  }(x$1),x$1)),error_msg];
  return Tags$1.Tags().NewTag("div",x);
 };
 Client$6.conferenceDatingForm=function(isNew,extra)
 {
  var x,f,c;
  x=Enhance$3.WithFormContainer((f=Formlet$1.Vertical(Data.$(Formlet$1.Horizontal(Data.$(Formlet$1.Return(function(t)
  {
   var a,a$1;
   a=t[0];
   a$1=t[1];
   return function(proposals)
   {
    var startTime,startDate,endTime,endDate;
    startTime=a[1];
    startDate=a[0];
    endTime=a$1[1];
    endDate=a$1[0];
    return ConferenceExtraDAO.New(startDate,startTime,endDate,endTime,proposals);
   };
  }),Data.$(Data.$(Formlet$1.Return(function(d1)
  {
   return function(d2)
   {
    return[d1,d2];
   };
  }),Client$6.datesForm("Starts on",extra.StartDate,extra.StartTime)),Client$6.datesForm("Ends on",extra.EndDate,extra.EndTime)))),Client$6.talkSubmissionOptionForm(extra.ProposalSettings))),Enhance.WithCssClass("make-conference-form",f)));
  c=Server.Large();
  return Client$3.EnhanceWithCustomSubmitButton(c,isNew?"Make it a conference":"Edit conference",x);
 };
 Client$6.talkSubmissionOptionForm=function(dao)
 {
  var options,i,f,f$1,x,f$2,initSelection,b;
  options=List.ofArray([["Yes",(i=dao.$==1?dao.$0:30,Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(days)
  {
   return function()
   {
    return{
     $:1,
     $0:days
    };
   };
  }),(f=function(s)
  {
   return s<<0;
  },function(f$3)
  {
   return Formlet$1.Map(f,f$3);
  }((f$1=Enhance$3.WithValidationIcon((x=(f$2=Controls$2.Input(Global.String(i)),Enhance$3.WithTextLabel("Proposal submission ends",f$2)),(Data.Validator().IsInt("You must enter an integer value"))(x))),Enhance.WithCssClass("submission-ends",f$1))))),Formlet$1.OfElement(function()
  {
   var x$1;
   return Operators$1.add((x$1=[Attr.Attr().NewAttr("class","days-before")],Tags$1.Tags().NewTag("div",x$1)),[Tags$1.Tags().text("days before the conference")]);
  }))))],["No",Formlet$1.Return({
   $:0
  })]]);
  initSelection=dao.$==1?0:1;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(FwLS.Select(initSelection,"Can proposals be submitted?",options,"proposal-submit"),function(a)
   {
    return b.ReturnFrom(a);
   });
  });
 };
 Client$6.datesForm=function(lbl,dateDao,timeDao)
 {
  var initDate,x,f,f$1,l,i;
  initDate=DateDAO.ToEcma(dateDao,timeDao);
  return Formlet$1.Vertical(Data.$(Data.$(Formlet$1.Return(function(date)
  {
   return function(t)
   {
    var h,m,offset;
    h=t[0];
    m=t[1];
    offset=t[2];
    return DateDAO.AndTimeOfEcma(date,h,m,offset);
   };
  }),(x=(f=Enhance$3.WithValidationIcon((f$1=function(el)
  {
   var x$1;
   return Operators$1.add((x$1=[Attr.Attr().NewAttr("style","padding: 10px;")],Tags$1.Tags().NewTag("div",x$1)),[el]);
  },function(f$2)
  {
   return Formlet$1.MapElement(f$1,f$2);
  }(Controls$4.Datepicker({
   $:1,
   $0:initDate
  })))),Enhance$3.WithTextLabel(lbl,f)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:2
  })),Enhance$3.WithLabelConfiguration(l,x)))),Client$6.timesForm(initDate.getHours(),initDate.getMinutes(),initDate.getTimezoneOffset())));
 };
 Client$6.timesForm=function(hour,minute,timeZone)
 {
  var hours,m,minutes,m$1,tzones,m$2,f,f$1;
  hours=List.ofSeq((m=function(i)
  {
   return[Global.String(i),Global.String(i)];
  },function(s)
  {
   return Seq.map(m,s);
  }(Operators.range(0,23))));
  minutes=List.ofSeq((m$1=function(i)
  {
   return[i===0?"00":Global.String(i),Global.String(i)];
  },function(s)
  {
   return Seq.map(m$1,s);
  }(Operators.step(0,15,45))));
  tzones=List.ofSeq((m$2=function(i)
  {
   return["GMT"+(i<0?Global.String(i):i===0?"":"+"+Global.String(i)),Global.Number(i)];
  },function(s)
  {
   return Seq.map(m$2,s);
  }(Operators.range(-12,12))));
  return Formlet$1.Horizontal(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried3(function(h,m$3,t)
  {
   return[h,m$3,t];
  })),(f=function(s)
  {
   return s<<0;
  },function(f$2)
  {
   return Formlet$1.Map(f,f$2);
  }(FwS.Select(hour,hours,"starts-at-hours")))),(f$1=function(s)
  {
   return s<<0;
  },function(f$2)
  {
   return Formlet$1.Map(f$1,f$2);
  }(FwS.Select(minute/15>>0,minutes,"starts-at-minutes")))),FwS.Select((timeZone<<0)+12,tzones,"starts-at-zones")));
 };
 RequestAuthorAccount=Client$7.RequestAuthorAccount=Runtime.Class({
  get_Body:function()
  {
   var buttonClass,conf,dataForm,f,f$1,x,f$2,f$3,a,f$4,f$5,x$1,m,f$6,f$7,a$1,l,i,b;
   buttonClass=Server.Large();
   conf=FormContainerConfiguration.New(null,Padding.New(null,null,null,null),null,Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
   dataForm=(f=(f$1=(x=Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried3(function(name,email,homepage)
   {
    return{
     Name:name,
     Email:email,
     Homepage:homepage
    };
   })),(f$2=(f$3=Enhance$3.WithValidationIcon((a=Controls$2.Input(this.name),Data.Validator().IsNotEmpty("You must enter a name",a))),Enhance$3.WithTextLabel("Your name",f$3)),Enhance.WithCssClass("name",f$2))),(f$4=(f$5=Enhance$3.WithValidationIcon((x$1=Controls$2.Input((m=this.email,m===null?"":m)),(Data.Validator().IsEmail("You must enter a valid email"))(x$1))),Enhance$3.WithTextLabel("Your email address",f$5)),Enhance.WithCssClass("email",f$4))),(f$6=(f$7=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must enter a valid URL",a$1))),Enhance$3.WithTextLabel("Your home page",f$7)),Enhance.WithCssClass("homepage",f$6))),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l,x))),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$1)),Enhance$3.WithCustomFormContainer(conf,f));
   b=Formlet$1.Do();
   return b.Delay(function()
   {
    return b.Bind(dataForm,function(a$2)
    {
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Author+Rpc.SaveNewRequestForAuthorAccount:-599730800",[a$2])),function(a$3)
     {
      return b.ReturnFrom(Formlet$1.OfElement(function()
      {
       var e,x$2,x$3,x$4;
       return a$3.$==1?(e=a$3.$0,Operators$1.add((x$2=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$2)),[Tags$1.Tags().text(e)])):Operators$1.add((x$3=[Attr.Attr().NewAttr("class","success")],Tags$1.Tags().NewTag("div",x$3)),[(x$4=[Tags$1.Tags().text("Your request was received.")],Tags$1.Tags().NewTag("span",x$4))]);
      }));
     });
    });
   });
  }
 },Web.Control,RequestAuthorAccount);
 PhotoUploadFrameControl=Upload.PhotoUploadFrameControl=Runtime.Class({
  get_Body:function()
  {
   var form,x,flet,f,f$1,f$2,a,x$1,x$2,x$3;
   form=(x=[Attr.Attr().NewAttr("action",this.CallbackUrl),Attr.Attr().NewAttr("enctype","multipart/form-data"),Attr.Attr().NewAttr("method","POST")],Tags$1.Tags().NewTag("form",x));
   flet=(f=function()
   {
    form.Dom.submit();
   },function(f$3)
   {
    return Formlet$1.Run(f,f$3);
   }((f$1=(f$2=(a=Upload.File("photo"),Data.Validator().IsNotEmpty("Select photo",a)),Upload.setupForm("Upload photo",false,f$2)),Enhance$3.WithLegend("Select photo to upload",f$1))));
   x$1=[(x$2=[Attr.Attr().NewAttr("class","photo-upload-photo"),(x$3=this.PhotoUrl,Attr.Attr().NewAttr("src",x$3))],Tags$1.Tags().NewTag("img",x$2)),Operators$1.add(form,[flet])];
   return Tags$1.Tags().NewTag("div",x$1);
  }
 },Web.Control,PhotoUploadFrameControl);
 Upload.setupForm=function(okLabel,withReset,formlet)
 {
  var buttonClass,x,l,i;
  buttonClass=Server.Large();
  return Enhance$3.WithFormContainer((x=(withReset?function(f)
  {
   return Client$3.EnhanceWithCustomSubmitAndResetButtons(buttonClass,okLabel,"Reset",f);
  }:function(f)
  {
   return Client$3.EnhanceWithCustomSubmitButton(buttonClass,okLabel,f);
  })(formlet),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
   $:1
  },i.VerticalAlign,i.Placement)),Enhance$3.WithLabelConfiguration(l,x))));
 };
 Upload.SetExtensionValidator=function(ext,flet)
 {
  var a,a$1;
  a=function(s)
  {
   return Strings.EndsWith(s,ext);
  };
  return(a$1="Invalid file extension. Expected extension: "+ext,function(a$2)
  {
   return Data.Validator().Is(a,a$1,a$2);
  })(flet);
 };
 Upload.File=function(name)
 {
  var f;
  f=Formlet$1.BuildFormlet(function()
  {
   var stateChanged,input,x,x$1,x$2,a;
   stateChanged=new FSharpEvent.New();
   input=(x=(x$1=[Attr.Attr().NewAttr("type","file"),Attr.Attr().NewAttr("name",name)],Tags$1.Tags().NewTag("input",x$1)),(x$2=function(e)
   {
    stateChanged.event.Trigger({
     $:0,
     $0:e.get_Value()
    });
   },a=function(el)
   {
    return x$2(el);
   },function(a$1)
   {
    EventsPervasives.Events().OnChange(function($1)
    {
     return function($2)
     {
      return a($1,$2);
     };
    },a$1);
   }(x),x));
   return[input,function()
   {
    input.set_Value("");
    stateChanged.event.Trigger({
     $:0,
     $0:""
    });
   },stateChanged.event];
  });
  return Formlet$1.InitWith("",f);
 };
 Login=UserControls.Login=Runtime.Class({
  get_Body:function()
  {
   var $this,email,a,f,password,a$1,f$1,form,x,b,C,x$1,x$2,b$1;
   $this=this;
   email=(a=(f=Controls$2.Input(""),Enhance$3.WithTextLabel("Username",f)),Data.Validator().IsNotEmpty("You must enter your username or email address",a));
   password=(a$1=(f$1=Controls$2.Password(""),Enhance$3.WithTextLabel("Password",f$1)),Data.Validator().IsNotEmpty("You must enter your password",a$1));
   form=Enhance$1.SubmitOnEnter(Enhance$3.WithFormContainer((x=Data.$(Data.$(Formlet$1.Return(function(emailOrUsername)
   {
    return function(password$1)
    {
     return[emailOrUsername,password$1];
    };
   }),email),password),(b=(C={
    $:1,
    $0:Server.Large()
   },FormButtonConfiguration.New({
    $:1,
    $0:"Login"
   },FormButtonConfiguration.get_Default().Style,C)),Enhance$3.WithCustomSubmitButton(b,x)))));
   return Operators$1.add((x$1=[Attr.Attr().NewAttr("class","content login")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=List.ofArray([(b$1=Formlet$1.Do(),b$1.Delay(function()
   {
    return b$1.Bind(form,function(a$2)
    {
     var password$1,emailOrUsername;
     password$1=a$2[1];
     emailOrUsername=a$2[0];
     return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.AsyncLogonEmailOrUsername:22339411",[emailOrUsername,password$1])),function(a$3)
     {
      var url;
      return b$1.ReturnFrom(a$3.$==1?FormletHelpers.ErrorF(a$3.$0):(url=$this.SuccessUrl,Global.location.href=url,FormletHelpers.SuccessF("Login successful, redirecting")));
     });
    });
   }))]),Tags$1.Tags().NewTag("div",x$2))]);
  }
 },Web.Control,Login);
 CreateAuthorProfileButtonByUsername=UserControls.CreateAuthorProfileButtonByUsername=Runtime.Class({
  get_Body:function()
  {
   var $this,errorPanel,button,x,x$1,_this,x$2;
   $this=this;
   errorPanel=Tags$1.Tags().NewTag("div",[]);
   button=(x=Operators$1.add((x$1=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Create")]),(x$2=function()
   {
    return Concurrency.Start(Concurrency.Delay(function()
    {
     var x$3;
     x$3=(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.CreateAuthorProfileByEmailOrUsername:-965607249",[$this.Username]);
     return Concurrency.Bind(x$3,function(a)
     {
      var msg,url;
      return a.$==1?(msg=a.$0,(errorPanel.HtmlProvider.Clear(errorPanel.get_Body()),errorPanel.HtmlProvider.AddClass(errorPanel.get_Body(),"error"),errorPanel.AppendI(Tags$1.Tags().text(msg)),Concurrency.Return(null))):(errorPanel.HtmlProvider.Clear(errorPanel.get_Body()),errorPanel.HtmlProvider.RemoveClass(errorPanel.get_Body(),"error"),url=$this.EditProfileUrl,Global.location.href=url,Concurrency.Return(null));
     });
    }),null);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x),x));
   return Tags$1.Tags().NewTag("div",[button,errorPanel]);
  }
 },Web.Control,CreateAuthorProfileButtonByUsername);
 ResetPassword=UserControls.ResetPassword=Runtime.Class({
  get_Body:function()
  {
   var passwordForm,b,x,b$1;
   passwordForm=(b=Formlet$1.Do(),b.Delay(function()
   {
    var f,a;
    return b.Bind((f=Enhance$3.WithValidationIcon((a=Controls$2.Password(""),Data.Validator().IsNotEmpty("You must set a password",a))),Enhance$3.WithLabelAndInfo("Password","Set your password",f)),function(a$1)
    {
     var f$1,a$2;
     return b.Bind((f$1=Enhance$3.WithValidationIcon((a$2=Controls$2.Password(""),Data.Validator().IsEqual(a$1,"Your confirmed password doesn't match",a$2))),Enhance$3.WithLabelAndInfo("Confirm password","Confirm your password",f$1)),function(a$3)
     {
      return b.Return(a$3);
     });
    });
   }));
   x=[Enhance$3.WithFormContainer(Formlet$1.Flowlet((b$1=Formlet$1.Do(),b$1.Delay(function()
   {
    var x$1,l,a,b$2,C;
    return b$1.Bind(Enhance$3.WithFormContainer((x$1=(l=function()
    {
     var x$2;
     x$2=[Tags$1.Tags().text("Your username")];
     return Tags$1.Tags().NewTag("span",x$2);
    },function(f)
    {
     return Enhance$3.WithLabel(l,f);
    }(Enhance$3.WithValidationIcon((a=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must type your username",a))))),(b$2=(C={
     $:1,
     $0:Server.Large()
    },FormButtonConfiguration.New({
     $:1,
     $0:"Reset password"
    },FormButtonConfiguration.get_Default().Style,C)),Enhance$3.WithCustomSubmitButton(b$2,x$1)))),function(a$1)
    {
     var securityQuestion,question,l$1,l$2,f;
     securityQuestion=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.User+Rpc.GetSecurityQuestionByUsername:453221039",[a$1]);
     return b$1.Bind((securityQuestion!=null?securityQuestion.$==1:false)?(question=securityQuestion.$0,Enhance$3.WithFormContainer(Enhance$3.WithSubmitButton(Data.$((l$1=function()
     {
      var x$2;
      x$2=[Tags$1.Tags().text("Security answer")];
      return Tags$1.Tags().NewTag("span",x$2);
     },function(f$1)
     {
      return Enhance$3.WithLabel(l$1,f$1);
     }(Data.$((l$2=function()
     {
      var x$2;
      x$2=[Tags$1.Tags().text("Security question")];
      return Tags$1.Tags().NewTag("span",x$2);
     },function(f$1)
     {
      return Enhance$3.WithLabel(l$2,f$1);
     }(Data.$(Formlet$1.Return(Runtime.Curried3(function($1,answer,pass)
     {
      return[answer,pass];
     })),Formlet$1.OfElement(function()
     {
      var x$2;
      x$2=[Tags$1.Tags().text(question)];
      return Tags$1.Tags().NewTag("div",x$2);
     })))),Controls$2.Input("")))),passwordForm)))):Enhance$3.WithFormContainer((f=Formlet$1.FailWith(List.ofArray(["No user is registered with this username"])),Enhance$3.WithErrorSummary("Error",f))),function(a$2)
     {
      var securityAnswer,password,resetAnswer;
      securityAnswer=a$2[0];
      password=a$2[1];
      resetAnswer=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.User+Rpc.ResetPasswordForUsername:-18346409",[a$1,securityAnswer,password]);
      return b$1.ReturnFrom(Enhance$3.WithFormContainer(Formlet$1.OfElement(function()
      {
       var text,x$2;
       text=resetAnswer.$==1?"Incorrect answer to the security question.":resetAnswer.$==0?"Bad username":"Your password has been successfully reset. Please log in now.";
       x$2=[Tags$1.Tags().text(text)];
       return Tags$1.Tags().NewTag("p",x$2);
      })));
     });
    });
   }))))];
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,ResetPassword);
 Invitations=UserControls.Invitations=Runtime.Class({
  get_Body:function()
  {
   var $this,invitations,x,x$1,f,formPH,x$2,invitationF,x$3,f$1,f$2,x$4,b,C,buttons,x$5,x$6,x$7,_this,x$8,x$9;
   $this=this;
   invitations=(this._Author==null?true:this._Author.$0.Trainer==null)?Tags$1.Tags().NewTag("div",[]):(x=(x$1=[Attr.Attr().NewAttr("class","invitations-list")],Tags$1.Tags().NewTag("div",x$1)),(f=function(div)
   {
    Concurrency.Start(Concurrency.Delay(function()
    {
     var x$10;
     x$10=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Invitation+Rpc.GetInvitationsForUserByUsername:-1752365511",[$this._Author.$0.Username]);
     return Concurrency.Bind(x$10,function(a)
     {
      return Concurrency.For(a,function(a$1)
      {
       var status,x$11,x$12,x$13,x$14,x$15,x$16,x$17;
       status=a$1.IsSignedUp?"Signed up already":a$1.IsUsed?"Accepted":"No response yet";
       div.AppendI((x$11=[Operators$1.add((x$12=[Attr.Attr().NewAttr("class","invitation-email")],Tags$1.Tags().NewTag("span",x$12)),[(x$13=a$1.Email,Tags$1.Tags().text(x$13))]),Operators$1.add((x$14=[Attr.Attr().NewAttr("class","invitation-date")],Tags$1.Tags().NewTag("span",x$14)),[(x$15="Sent on "+a$1.CreationDate+".",Tags$1.Tags().text(x$15))]),Operators$1.add((x$16=[Attr.Attr().NewAttr("class","tag")],Tags$1.Tags().NewTag("span",x$16)),[Tags$1.Tags().text(status)]),(x$17=[Attr.Attr().NewAttr("class","closer")],Tags$1.Tags().NewTag("span",x$17))],Tags$1.Tags().NewTag("div",x$11)));
       return Concurrency.Return(null);
      });
     });
    }),null);
   },function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x),x));
   formPH=(x$2=[Attr.Attr().NewAttr("class","invitations-form")],Tags$1.Tags().NewTag("div",x$2));
   invitationF=Enhance$3.WithFormContainer((x$3=(f$1=Data.$(Formlet$1.Return(Global.id),Enhance$3.Many((f$2=Enhance$3.WithValidationIcon((x$4=Controls$2.Input(""),(Data.Validator().IsEmail("You must enter a valid email address"))(x$4))),Enhance$3.WithTextLabel("Email address",f$2)))),Enhance$3.WithLegend("Send to",f$1)),(b=(C={
    $:1,
    $0:Server.Large()
   },FormButtonConfiguration.New({
    $:1,
    $0:"Send"
   },FormButtonConfiguration.get_Default().Style,C)),Enhance$3.WithCustomSubmitButton(b,x$3))));
   buttons=(this._Author==null?true:this._Author.$0.Trainer==null)?Tags$1.Tags().NewTag("div",[]):Operators$1.add((x$5=[Attr.Attr().NewAttr("class","dashboard-buttons")],Tags$1.Tags().NewTag("div",x$5)),[(x$6=Operators$1.add((x$7=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$7)),[Tags$1.Tags().text("New")]),(x$8=function()
   {
    var form,f$3;
    form=(f$3=function(emails)
    {
     var a;
     (new AjaxRemotingProvider.New()).Send("FPish:FPish.UserControls+Rpc.SendInvitationsFrom:1608696959",[$this._Author.$0.Trainer.$0,emails]);
     formPH.HtmlProvider.Clear(formPH.get_Body());
     a=function(email)
     {
      var x$10,x$11,x$12,x$13,x$14;
      invitations.AppendI((x$10=[Operators$1.add((x$11=[Attr.Attr().NewAttr("class","invitation-email")],Tags$1.Tags().NewTag("span",x$11)),[Tags$1.Tags().text(email)]),Operators$1.add((x$12=[Attr.Attr().NewAttr("class","invitation-date")],Tags$1.Tags().NewTag("span",x$12)),[Tags$1.Tags().text("Sent just now.")]),Operators$1.add((x$13=[Attr.Attr().NewAttr("class","tag")],Tags$1.Tags().NewTag("span",x$13)),[Tags$1.Tags().text("Refresh to show")]),(x$14=[Attr.Attr().NewAttr("class","closer")],Tags$1.Tags().NewTag("span",x$14))],Tags$1.Tags().NewTag("div",x$10)));
     };
     (function(s)
     {
      Seq.iter(a,s);
     }(emails));
    },function(f$4)
    {
     return Formlet$1.Run(f$3,f$4);
    }(invitationF));
    formPH.HtmlProvider.Clear(formPH.get_Body());
    return formPH.AppendI(form);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$8($1,$2);
     };
    },a);
   }(x$6),x$6))]);
   return Operators$1.add((x$9=[Attr.Attr().NewAttr("class","invitations")],Tags$1.Tags().NewTag("div",x$9)),[buttons,formPH,invitations]);
  }
 },Web.Control,Invitations);
 AssignUsersToOrganization=UserControls.AssignUsersToOrganization=Runtime.Class({
  get_Body:function()
  {
   var $this,formPH,x,invitationF,errors,buttons,x$1,x$2,x$3,_this,x$4,x$5;
   $this=this;
   return this.Organization==null?Tags$1.Tags().NewTag("div",[]):(formPH=(x=[Attr.Attr().NewAttr("class","assign-authors-to-organization-form")],Tags$1.Tags().NewTag("div",x)),(invitationF=function()
   {
    var existingUsernameF,b,typeSelector,x$6,f,b$1,s,C,r,C$1;
    existingUsernameF=(b=Formlet$1.Do(),b.Delay(function()
    {
     var f$1,f$2,a;
     return b.Bind((f$1=(f$2=Enhance$3.WithValidationIcon((a=function(s$1)
     {
      return s$1.length>1;
     },function(a$1)
     {
      return Data.Validator().Is(a,"Must enter at least 2 characters",a$1);
     }(Controls$2.Input("")))),Enhance$3.WithTextLabel("Last name",f$2)),Enhance$3.WithCssClass("name",f$1)),function(a$1)
     {
      return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.UserControls+Rpc.GetNamesAndUsernamesByLastNameLike:-838908204",[a$1])),function(a$2)
      {
       var names,_names,f$3,f$4,a$3;
       names=a$2.$==1?List.ofArray([["[No matches]",""]]):(_names=a$2.$0,List.length(_names)>0?_names:List.ofArray([["[No matches]",""]]));
       return b.Bind((f$3=(f$4=Enhance$3.WithValidationIcon((a$3=function(s$1)
       {
        return s$1!=="";
       },function(a$4)
       {
        return Data.Validator().Is(a$3,"Must select a user",a$4);
       }(Controls$2.Select(0,names)))),Enhance$3.WithTextLabel("User",f$4)),Enhance$3.WithCssClass("user",f$3)),function(a$4)
       {
        return b.Return(a$4);
       });
      });
     });
    }));
    typeSelector=List.ofArray([["Existing",true],["New",false]]);
    return Enhance$3.WithFormContainer((x$6=(f=(b$1=Formlet$1.Do(),b$1.Delay(function()
    {
     var f$1;
     return b$1.Bind((f$1=Controls$2.Select(0,typeSelector),Enhance$3.WithCssClass("type",f$1)),function(a)
     {
      var b$2,newPersonF,x$7,l,i,x$8,l$1,i$1,b$3;
      return b$1.Bind(a?(b$2=Formlet$1.Do(),b$2.Delay(function()
      {
       var f$2,f$3,a$1;
       return b$2.Bind((f$2=(f$3=Enhance$3.WithValidationIcon((a$1=function(s$1)
       {
        return s$1.length>1;
       },function(a$2)
       {
        return Data.Validator().Is(a$1,"Must enter at least 2 characters",a$2);
       }(Controls$2.Input("")))),Enhance$3.WithTextLabel("Last name",f$3)),Enhance$3.WithCssClass("name",f$2)),function(a$2)
       {
        return b$2.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.UserControls+Rpc.GetNamesAndUsernamesByLastNameLike:-838908204",[a$2])),function(a$3)
        {
         var names,_names,f$4,f$5,a$4;
         names=a$3.$==1?List.ofArray([["[No matches]",""]]):(_names=a$3.$0,List.length(_names)>0?_names:List.ofArray([["[No matches]",""]]));
         return b$2.Bind((f$4=(f$5=Enhance$3.WithValidationIcon((a$4=function(s$1)
         {
          return s$1!=="";
         },function(a$5)
         {
          return Data.Validator().Is(a$4,"Must select a user",a$5);
         }(Controls$2.Select(0,names)))),Enhance$3.WithTextLabel("User",f$5)),Enhance$3.WithCssClass("user",f$4)),function(a$5)
         {
          return b$2.Return({
           $:0,
           $0:a$5
          });
         });
        });
       });
      })):(newPersonF=Formlet$1.Horizontal(Data.$(Data.$(Data.$(Formlet$1.Return(function(t)
      {
       var username,fname,lname,email;
       username=t[0];
       fname=t[1];
       lname=t[2];
       email=t[3];
       return function()
       {
        return function(bio)
        {
         return[username,fname,lname,email,bio];
        };
       };
      }),(x$7=Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(username,fname,lname,email)
      {
       return[username,fname,lname,email];
      },4)),FwLS.Input("Username","Must enter a username","username")),FwLS.Input("First name","Must enter a first name","firstname")),FwLS.Input("Last name","Must enter a last name","lastname")),FwLS.Input("Email","Must enter an email address","email")),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
       $:2
      })),Enhance$3.WithLabelConfiguration(l,x$7)))),Formlet$1.OfElement(function()
      {
       var x$9;
       x$9=[Attr.Attr().NewAttr("class","separator")];
       return Tags$1.Tags().NewTag("div",x$9);
      })),(x$8=FwLS.TextArea("Bio","Must enter author's bio","bio"),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
       $:2
      })),Enhance$3.WithLabelConfiguration(l$1,x$8))))),(b$3=Formlet$1.Do(),b$3.Delay(function()
      {
       return b$3.Bind(newPersonF,function(a$1)
       {
        var username,lname,fname,email,bio,newAuthor;
        username=a$1[0];
        lname=a$1[2];
        fname=a$1[1];
        email=a$1[3];
        bio=a$1[4];
        newAuthor={
         FirstName:fname,
         LastName:lname,
         Username:username,
         Email:email,
         Biography:bio
        };
        return b$3.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.UserControls+Rpc.CheckNewUserByAdmin:-783031820",[newAuthor])),function(a$2)
        {
         var msg,b$4,warning,b$5;
         return b$3.ReturnFrom(a$2.$==1?(msg=a$2.$0,(b$4=Formlet$1.Do(),b$4.Delay(function()
         {
          return b$4.Bind(Formlet$1.OfElement(function()
          {
           var x$9;
           return Operators$1.add((x$9=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$9)),[Tags$1.Tags().text(msg)]);
          }),function()
          {
           return b$4.ReturnFrom(Formlet$1.Never());
          });
         }))):a$2.$0==null?Formlet$1.Return({
          $:1,
          $0:newAuthor
         }):(warning=a$2.$0.$0,(b$5=Formlet$1.Do(),b$5.Delay(function()
         {
          return b$5.Bind(Formlet$1.OfElement(function()
          {
           var x$9;
           return Operators$1.add((x$9=[Attr.Attr().NewAttr("class","warning")],Tags$1.Tags().NewTag("div",x$9)),[Tags$1.Tags().text(warning)]);
          }),function()
          {
           return b$5.Return({
            $:1,
            $0:newAuthor
           });
          });
         }))));
        });
       });
      }))),function(a$1)
      {
       return b$1.Return(a$1);
      });
     });
    })),Enhance$3.WithLegend("User",f)),(s=(C={
     $:1,
     $0:Server.Large()
    },FormButtonConfiguration.New({
     $:1,
     $0:"Assign"
    },FormButtonConfiguration.get_Default().Style,C)),(r=(C$1={
     $:1,
     $0:Server.Large()
    },FormButtonConfiguration.New({
     $:1,
     $0:"Reset"
    },FormButtonConfiguration.get_Default().Style,C$1)),Enhance$3.WithCustomSubmitAndResetButtons(s,r,x$6)))));
   },(errors=Tags$1.Tags().NewTag("div",[]),(buttons=(x$1=[(x$2=Operators$1.add((x$3=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("New")]),(x$4=function()
   {
    var form,f,b;
    form=(f=function()
    {
    },function(f$1)
    {
     return Formlet$1.Run(f,f$1);
    }((b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(invitationF(),function(a)
     {
      var newAuthor,b$1;
      return b.Bind(a.$==1?(newAuthor=a.$0,(b$1=Formlet$1.Do(),b$1.Delay(function()
      {
       return b$1.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.UserControls+Rpc.CreateNewUserByAdmin:1993761214",[newAuthor])),function(a$1)
       {
        var msg,b$2,b$3;
        return b$1.ReturnFrom(a$1.$==1?(msg=a$1.$0,(b$2=Formlet$1.Do(),b$2.Delay(function()
        {
         return b$2.Bind(Formlet$1.OfElement(function()
         {
          var x$6;
          return Operators$1.add((x$6=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$6)),[Tags$1.Tags().text(msg)]);
         }),function()
         {
          return b$2.ReturnFrom(Formlet$1.Never());
         });
        }))):(b$3=Formlet$1.Do(),b$3.Delay(function()
        {
         return b$3.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.CreateAuthorProfileByAdminByUsername:22339411",[newAuthor.Username,newAuthor.Biography])),function(a$2)
         {
          var msg$1;
          return a$2.$==1?(msg$1=a$2.$0,b$3.Bind(Formlet$1.OfElement(function()
          {
           var x$6;
           return Operators$1.add((x$6=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$6)),[Tags$1.Tags().text(msg$1)]);
          }),function()
          {
           return b$3.ReturnFrom(Formlet$1.Never());
          })):b$3.Return(newAuthor.Username);
         });
        })));
       });
      }))):Formlet$1.Return(a.$0),function(a$1)
      {
       return b.ReturnFrom(Formlet$1.Join(Formlet.LoadingFormlet(Concurrency.Delay(function()
       {
        var x$6;
        x$6=(new AjaxRemotingProvider.New()).Async("FPish:FPish.UserControls+Rpc.AssignUsernamesToOrganization:-137970944",[$this.Organization.$0,List.ofArray([a$1])]);
        return Concurrency.Bind(x$6,function(a$2)
        {
         var msg,b$2;
         return a$2.$==1?(msg=a$2.$0,Concurrency.Return((b$2=Formlet$1.Do(),b$2.Delay(function()
         {
          return b$2.Bind(Formlet$1.OfElement(function()
          {
           var x$7;
           return Operators$1.add((x$7=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$7)),[Tags$1.Tags().text(msg)]);
          }),function()
          {
           return b$2.ReturnFrom(Formlet$1.Never());
          });
         })))):(Global.window.location.reload(true),Concurrency.Return(Formlet$1.OfElement(function()
         {
          var x$7;
          x$7=[Tags$1.Tags().text("User account created for this speaker.")];
          return Tags$1.Tags().NewTag("div",x$7);
         })));
        });
       }))));
      });
     });
    }))));
    formPH.HtmlProvider.Clear(formPH.get_Body());
    return formPH.AppendI(form);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   }(x$2),x$2))],Tags$1.Tags().NewTag("div",x$1)),Operators$1.add((x$5=[Attr.Attr().NewAttr("class","invitations")],Tags$1.Tags().NewTag("div",x$5)),[buttons,formPH,errors])))));
  }
 },Web.Control,AssignUsersToOrganization);
 OptionsForm=UserControls.OptionsForm=Runtime.Class({
  WithRightLabel:function(label)
  {
   var f,g,l,i;
   f=function(f$1)
   {
    return Enhance$3.WithTextLabel(label,f$1);
   };
   g=(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
    $:1
   })),function(f$1)
   {
    return Enhance$3.WithLabelConfiguration(l,f$1);
   });
   return function(x)
   {
    return g(f(x));
   };
  },
  get_Body:function()
  {
   var form,x,x$1,x$2,x$3,m,trainerOpts,x$4,c,x$5,x$6,x$7,b;
   form=Enhance$3.WithFormContainer((x=Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(UserOptionsDAO.New,4)),(x$1=Controls$2.Checkbox(this.userOptions.EmailNotifyPrivateMessages),(this.WithRightLabel("I receive a private message"))(x$1))),(x$2=Controls$2.Checkbox(this.userOptions.EmailNotifyResponses),(this.WithRightLabel("Someone responds my question or blog comment"))(x$2))),(x$3=Controls$2.Checkbox(this.userOptions.EmailNotifyNewEvents),(this.WithRightLabel("A new event is created by a group I am a member of"))(x$3))),(m=this.userOptions.TrainerOptions,(m!=null?m.$==1:false)?(trainerOpts=m.$0,Data.$(Formlet$1.Return(function(blogs)
   {
    return{
     $:1,
     $0:{
      EmailNotifyBlogComments:blogs
     }
    };
   }),(x$4=Controls$2.Checkbox(trainerOpts.EmailNotifyBlogComments),(this.WithRightLabel("Someone commented on my blog entry"))(x$4)))):Formlet$1.Return(null))),(c=Server.Large(),Client$3.EnhanceWithSubmitAndResetButtons(c,x))));
   x$5=[(x$6=[Tags$1.Tags().text("Email notifications")],Tags$1.Tags().NewTag("h1",x$6)),(x$7=[Tags$1.Tags().text("Send me an email when:")],Tags$1.Tags().NewTag("p",x$7)),(b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(form,function(a)
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateUserOptions:1084686057",[a])),function(a$1)
     {
      return b.ReturnFrom(a$1.$==0?FormletHelpers.SuccessF("Your options have been successfully updated."):FormletHelpers.ErrorF(a$1.$0));
     });
    });
   }))];
   return Tags$1.Tags().NewTag("div",x$5);
  }
 },Web.Control,OptionsForm);
 AnnounceOptionsForm=UserControls.AnnounceOptionsForm=Runtime.Class({
  get_Body:function()
  {
   var form,x,f,f$1,f$2,f$3,m,trainerOpts,f$4,f$5,c,x$1,x$2,x$3;
   form=Enhance$3.WithFormContainer((x=Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(UserAnnounceOptionsDAO.New,5)),(f=Controls$2.Checkbox(this.userOptions.AdvertiseGroups),Enhance$3.WithTextLabel("Announce my new groups",f))),(f$1=Controls$2.Checkbox(this.userOptions.AdvertiseConferences),Enhance$3.WithTextLabel("Announce my new conferences",f$1))),(f$2=Controls$2.Checkbox(this.userOptions.AdvertiseQuestions),Enhance$3.WithTextLabel("Announce my new questions",f$2))),(f$3=Controls$2.Checkbox(this.userOptions.AdvertiseAnswers),Enhance$3.WithTextLabel("Announce my responses marked as answers",f$3))),(m=this.userOptions.TrainerOptions,(m!=null?m.$==1:false)?(trainerOpts=m.$0,Data.$(Data.$(Formlet$1.Return(function(events)
   {
    return function(blogs)
    {
     return{
      $:1,
      $0:TrainerAnnounceOptionsDAO.New(events,blogs)
     };
    };
   }),(f$4=Controls$2.Checkbox(trainerOpts.AdvertiseEvents),Enhance$3.WithTextLabel("Announce my new events",f$4))),(f$5=Controls$2.Checkbox(trainerOpts.AdvertiseBlogEntries),Enhance$3.WithTextLabel("Announce my new blog entries",f$5)))):Formlet$1.Return(null))),(c=Server.Large(),Client$3.EnhanceWithSubmitAndResetButtons(c,x))));
   x$1=[(x$2=[Tags$1.Tags().text("Use the following options to automatically announce your activities on the "),Operators$1.add((x$3=[Attr.Attr().NewAttr("href","http://twitter.com/fpishnet-news")],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("@fpishnet-news")]),Tags$1.Tags().text(" Twitter account.")],Tags$1.Tags().NewTag("p",x$2))];
   return Tags$1.Tags().NewTag("div",x$1);
  }
 },Web.Control,AnnounceOptionsForm);
 PasswordForm=UserControls.PasswordForm=Runtime.Class({
  get_Body:function()
  {
   var out,form,f,f$1,a,b,b$1;
   out=Tags$1.Tags().NewTag("div",[]);
   form=(f=Data.$(Data.$(Formlet$1.Return(function(oldP)
   {
    return function(newP)
    {
     return[oldP,newP];
    };
   }),(f$1=Enhance$3.WithValidationIcon((a=Controls$2.Password(""),Data.Validator().IsNotEmpty("You must enter your current password",a))),Enhance$3.WithTextLabel("Current password",f$1))),(b=Formlet$1.Do(),b.Delay(function()
   {
    var f$2,a$1;
    return b.Bind((f$2=Enhance$3.WithValidationIcon((a$1=Controls$2.Password(""),Data.Validator().IsNotEmpty("You must set a password",a$1))),Enhance$3.WithTextLabel("New password",f$2)),function(a$2)
    {
     var f$3,a$3;
     return b.Bind((f$3=Enhance$3.WithValidationIcon((a$3=Controls$2.Password(""),Data.Validator().IsEqual(a$2,"Your confirmed password doesn't match",a$3))),Enhance$3.WithTextLabel("Confirm password",f$3)),function(a$4)
     {
      return b.Return(a$4);
     });
    });
   }))),UserControls.SetupForm("Change password",true,f));
   b$1=Formlet$1.Do();
   return b$1.Delay(function()
   {
    return b$1.Bind(form,function(a$1)
    {
     var oldP,newP;
     oldP=a$1[0];
     newP=a$1[1];
     return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.ChangePassword:756462695",[oldP,newP])),function(a$2)
     {
      return b$1.ReturnFrom(a$2.$==1?FormletHelpers.ErrorF("You have mistyped your current password."):a$2.$==2?FormletHelpers.SuccessF("Your password has been successfully changed."):FormletHelpers.ErrorF("You seem to have been disconnected.\nPlease log in again."));
     });
    });
   });
  }
 },Web.Control,PasswordForm);
 OAuthProvidersForm=UserControls.OAuthProvidersForm=Runtime.Class({
  get_Body:function()
  {
   var $this,removeProvderForm,form,b,x;
   $this=this;
   removeProvderForm=function(prov)
   {
    var provName,m,infoForm,f,confMsg,m$1,f$1,b$1;
    provName=(m=prov.OAuthProviderName,m==null?"N/A":m.$0);
    infoForm=(f=Formlet$1.OfElement(function()
    {
     var x$1,x$2,x$3,x$4;
     x$1=[(x$2=[Tags$1.Tags().text(provName)],Tags$1.Tags().NewTag("label",x$2)),(x$3=[(x$4=prov.get_DisplayName(),Tags$1.Tags().text(x$4))],Tags$1.Tags().NewTag("label",x$3))];
     return Tags$1.Tags().NewTag("span",x$1);
    }),Formlet$1.InitWith(null,f));
    confMsg="Do you want to remove association between your "+(m$1=prov.OAuthProviderName,(m$1!=null?m$1.$==1:false)?m$1.$0+" account and your FPish profile?":"account and your FPish profile?");
    return Formlet$1.Deletable((f$1=Formlet$1.Horizontal((b$1=Formlet$1.Do(),b$1.Delay(function()
    {
     return b$1.Bind(infoForm,function()
     {
      return b$1.Bind(Formlet.SmallButton("Remove"),function()
      {
       return b$1.Bind(Formlet.Confirm({
        Title:"Remove associated account",
        Message:confMsg,
        YesLabel:"Yes",
        NoLabel:"No"
       }),function(a)
       {
        var b$2;
        return b$1.ReturnFrom(a?(b$2=Formlet$1.Do(),b$2.Delay(function()
        {
         return b$2.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.RemoveOAuthProviderForUser:-46830063",[{
          OAuthProviderId:prov.OAuthProviderId,
          OAuthUsername:prov.OAuthUsername,
          OAuthUserDisplayName:prov.OAuthUserDisplayName
         }])),function(a$1)
         {
          return b$2.Return(a$1?null:{
           $:1,
           $0:null
          });
         });
        })):Formlet$1.Return({
         $:1,
         $0:null
        }));
       });
      });
     });
    }))),Enhance$3.WithCssClass("dataRow",f$1)));
   };
   form=Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.OAuthProvidersForUser:-167760528",[])),function(a)
    {
     var f;
     return b.ReturnFrom(a.$==0?Formlet$1.OfElement(function()
     {
      var x$1;
      x$1=[Tags$1.Tags().text("You do not have any associated accounts.")];
      return Tags$1.Tags().NewTag("div",x$1);
     }):(f=function(v)
     {
     },function(f$1)
     {
      return Formlet$1.Map(f,f$1);
     }(Formlet$1.Sequence(List.map(removeProvderForm,a)))));
    });
   })));
   x=List.ofSeq(Seq.delay(function()
   {
    var x$1;
    return Seq.append([(x$1=[Tags$1.Tags().text("You have the following account providers registered with your account:")],Tags$1.Tags().NewTag("p",x$1))],Seq.delay(function()
    {
     return Seq.append([form],Seq.delay(function()
     {
      var x$2,x$3,x$4;
      return[(x$2=[Operators$1.add((x$3=[(x$4=$this.loginUrl,Attr.Attr().NewAttr("href",x$4))],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("Add associated accounts")])],Tags$1.Tags().NewTag("p",x$2))];
     }));
    }));
   }));
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,OAuthProvidersForm);
 AuthorProfileForm=UserControls.AuthorProfileForm=Runtime.Class({
  get_Body:function()
  {
   var $this,toAuthorProfileData,out,tags,m,form,f,f$1,f$2,f$3,f$4,b;
   $this=this;
   toAuthorProfileData=function(bio,paypalEmail,blogDefaultTags)
   {
    return{
     Biography:bio,
     PaypalEmail:paypalEmail,
     BlogDefaultTags:blogDefaultTags
    };
   };
   out=Tags$1.Tags().NewTag("div",[]);
   tags=(m=this.trainerData.BlogDefaultTags,m.$==1?m.$1.$==0?m.$0:Seq.reduce(function($1,$2)
   {
    return $1+", "+$2;
   },m):"");
   form=(f=Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried3(toAuthorProfileData)),(f$1=Controls$2.TextArea(this.trainerData.Biography),Enhance$3.WithTextLabel("Biography",f$1))),(f$2=Controls$2.Input(this.trainerData.PaypalEmail),Enhance$3.WithTextLabel("PayPal email",f$2))),(f$3=(f$4=Controls$2.Input(tags),Enhance$3.WithTextLabel("Default blog tags",f$4)),Formlet$1.Map(Client$2.ParseTags,f$3))),UserControls.SetupForm("Update profile",true,f));
   b=Formlet$1.Do();
   return b.Delay(function()
   {
    return b.Bind(form,function(a)
    {
     var m$1,username;
     return b.Bind(Formlet.LoadingFormlet((m$1=$this.usernameToUpdate,(m$1!=null?m$1.$==1:false)?(username=m$1.$0,(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateOtherAuthorProfile:1584084939",[username,a])):(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateAuthorProfile:-2136386801",[a]))),function(a$1)
     {
      return b.ReturnFrom(a$1?FormletHelpers.SuccessF("Your profile has been successfully updated."):FormletHelpers.ErrorF("You seem to have been disconnected.\nPlease log in again."));
     });
    });
   });
  }
 },Web.Control,AuthorProfileForm);
 UserProfileForm=UserControls.UserProfileForm=Runtime.Class({
  get_Body:function()
  {
   var $this,toUserData,out,twitterUserName,f,f$1,m,billingAddress,addr,m$1,f$2,f$3,f$4,f$5,f$6,a,f$7,a$1,euTaxAndBilling,taxAndAddr,companyName,f$8,a$2,taxNum,f$9,b,emailForm,f$10,b$1,form,f$11,f$12,f$13,f$14,f$15,f$16,f$17,f$18,f$19,f$20,f$21,f$22,b$2;
   function fromStrOpt(x)
   {
    return x==null?"":x.$0;
   }
   $this=this;
   toUserData=function(userName,email,fn,ln,comp,phone,st1,st2,city,state,zip,country,twitter,taxCNAddr)
   {
    var p,i;
    p=taxCNAddr==null?[null,null,null]:[{
     $:1,
     $0:taxCNAddr.$0[0]
    },taxCNAddr.$0[1],{
     $:1,
     $0:taxCNAddr.$0[2]
    }];
    i=$this.userData;
    return{
     Username:userName,
     Email:email,
     EmailIsVerified:i.EmailIsVerified,
     FirstName:fn,
     LastName:ln,
     Company:comp,
     Phone:phone,
     Street1:st1,
     Street2:st2,
     City:city,
     State:state,
     Zip:zip,
     Country:country,
     TwitterUsername:twitter,
     PhotoUrl:i.PhotoUrl,
     BillingAddress:p[2],
     EUTaxNumber:p[1],
     BillingCompanyName:p[0],
     EmailVerificationUrl:i.EmailVerificationUrl
    };
   };
   out=Tags$1.Tags().NewTag("div",[]);
   twitterUserName=(f=function(s)
   {
    return s===""?null:{
     $:1,
     $0:s
    };
   },function(f$23)
   {
    return Formlet$1.Map(f,f$23);
   }((f$1=Controls$2.Input((m=this.userData.TwitterUsername,m==null?"":m.$0)),Enhance$3.WithTextLabel("Twitter username",f$1))));
   billingAddress=(addr=(m$1=this.userData.BillingAddress,m$1==null?{
    Street1:"",
    Street2:"",
    Zip:"",
    City:"",
    Country:"",
    State:""
   }:m$1.$0),Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(s1,s2,city,state,zip,cntr)
   {
    return{
     Street1:s1,
     Street2:s2,
     Zip:zip,
     City:city,
     Country:cntr,
     State:state
    };
   },6)),(f$2=Enhance$3.WithValidationIcon(Controls$2.Input(addr.Street1)),Enhance$3.WithTextLabel("Street address 1",f$2))),(f$3=Controls$2.Input(addr.Street2),Enhance$3.WithTextLabel("Street address 2",f$3))),(f$4=Controls$2.Input(addr.City),Enhance$3.WithTextLabel("City",f$4))),(f$5=Controls$2.Input(addr.State),Enhance$3.WithTextLabel("State",f$5))),(f$6=Enhance$3.WithValidationIcon((a=Controls$2.Input(addr.Zip),Data.Validator().IsNotEmpty("You must specify your zip code",a))),Enhance$3.WithTextLabel("Zip code",f$6))),(f$7=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(addr.Country),Data.Validator().IsNotEmpty("You must specify your country",a$1))),Enhance$3.WithTextLabel("Country",f$7))));
   euTaxAndBilling=(taxAndAddr=(companyName=(f$8=Enhance$3.WithValidationIcon((a$2=Controls$2.Input(fromStrOpt(this.userData.BillingCompanyName)),Data.Validator().IsNotEmpty("You must specify your company name",a$2))),Enhance$3.WithTextLabel("Company Name",f$8)),(taxNum=(f$9=Controls$2.Input(fromStrOpt(this.userData.EUTaxNumber)),Enhance$3.WithTextLabel("EU Tax Number",f$9)),Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried3(function(cn,tn,ba)
   {
    return[cn,tn===""?null:{
     $:1,
     $0:tn
    },ba];
   })),companyName),taxNum),billingAddress))),(b=Formlet$1.Do(),b.Delay(function()
   {
    var f$23;
    return b.Bind((f$23=Controls$2.Checkbox($this.userData.BillingAddress!=null),Enhance$3.WithTextLabel("Company Billing Address",f$23)),function(a$3)
    {
     var f$24;
     return b.ReturnFrom(a$3?(f$24=function(a$4)
     {
      return{
       $:1,
       $0:a$4
      };
     },function(f$25)
     {
      return Formlet$1.Map(f$24,f$25);
     }(taxAndAddr)):Formlet$1.Return(null));
    });
   })));
   emailForm=(f$10=Formlet$1.Horizontal((b$1=Formlet$1.Do(),b$1.Delay(function()
   {
    return b$1.Bind(($this.userData.EmailIsVerified?Controls$2.ReadOnlyInput:Controls$2.Input)($this.userData.Email),function(a$3)
    {
     return b$1.Bind(Formlet$1.OfElement(function()
     {
      var e,e$1;
      function e$2()
      {
       var x,x$1,x$2,x$3;
       x=$this.userData.EmailIsVerified?List.ofArray([Tags$1.Tags().text("(verified)")]):a$3!==$this.userData.Email?List.ofArray([Tags$1.Tags().text("(unverified; update your profile to send a verification email)")]):List.ofArray([Tags$1.Tags().text("(unverified; "),(x$1=(x$2=[Attr.Attr().NewAttr("href","#"),Tags$1.Tags().text("resend verification email")],Tags$1.Tags().NewTag("a",x$2)),(x$3=function()
       {
        return Concurrency.Start(Concurrency.Delay(function()
        {
         var _this,_this$1,x$4;
         _this=Lazy.Force(e);
         _this.HtmlProvider.Clear(_this.get_Body());
         _this$1=Lazy.Force(e);
         _this$1.HtmlProvider.AppendNode(_this$1.get_Body(),_this$1.HtmlProvider.CreateTextNode("Sending activation email..."));
         x$4=(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.SendEmailConfirmation:22339411",[a$3,$this.emailActivationUrl]);
         return Concurrency.Bind(x$4,function(a$4)
         {
          var _this$2,_this$3,text;
          _this$2=Lazy.Force(e);
          _this$2.HtmlProvider.Clear(_this$2.get_Body());
          _this$3=Lazy.Force(e);
          text=a$4.$==1?a$4.$0:"Verification email sent";
          _this$3.HtmlProvider.AppendNode(_this$3.get_Body(),_this$3.HtmlProvider.CreateTextNode(text));
          return Concurrency.Return(null);
         });
        }),null);
       },function(a$4)
       {
        EventsPervasives.Events().OnClick(function($1)
        {
         return function($2)
         {
          return x$3($1,$2);
         };
        },a$4);
       }(x$1),x$1)),Tags$1.Tags().text(")")]);
       return Tags$1.Tags().NewTag("span",x);
      }
      e=Lazy.Create(e$2);
      e$1=Lazy.Force(e);
      return e$1;
     }),function()
     {
      return b$1.Return(a$3);
     });
    });
   }))),Enhance$3.WithTextLabel("Email",f$10));
   form=(f$11=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(toUserData,14)),(f$12=Controls$2.ReadOnlyInput("Username"),Enhance$3.WithTextLabel("Username",f$12))),emailForm),(f$13=Controls$2.Input(this.userData.FirstName),Enhance$3.WithTextLabel("First name",f$13))),(f$14=Controls$2.Input(this.userData.LastName),Enhance$3.WithTextLabel("Last name",f$14))),(f$15=Controls$2.Input(this.userData.Company),Enhance$3.WithTextLabel("Company",f$15))),(f$16=Controls$2.Input(this.userData.Phone),Enhance$3.WithTextLabel("Phone",f$16))),(f$17=Controls$2.Input(this.userData.Street1),Enhance$3.WithTextLabel("Street address 1",f$17))),(f$18=Controls$2.Input(this.userData.Street2),Enhance$3.WithTextLabel("Street address 2",f$18))),(f$19=Controls$2.Input(this.userData.City),Enhance$3.WithTextLabel("City",f$19))),(f$20=Controls$2.Input(this.userData.State),Enhance$3.WithTextLabel("State",f$20))),(f$21=Controls$2.Input(this.userData.Zip),Enhance$3.WithTextLabel("Zip code",f$21))),(f$22=Controls$2.Input(this.userData.Country),Enhance$3.WithTextLabel("Country",f$22))),twitterUserName),euTaxAndBilling),UserControls.SetupForm("Update profile",true,f$11));
   b$2=Formlet$1.Do();
   return b$2.Delay(function()
   {
    return b$2.Bind(form,function(a$3)
    {
     return b$2.Bind(Formlet.LoadingFormlet($this.isProfileMine?(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateUserProfile:872592954",[a$3]):(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateOtherUserProfile:-966492970",[$this.userData.Username,a$3])),function(a$4)
     {
      var status;
      return b$2.ReturnFrom(a$4.$==0?(status=a$4.$0,FormletHelpers.SuccessF(status.NewEmail?"Your profile has been successfully updated. An email was sent to your email\r\n                            address with instructions on how to verify your address. Please see the email and\r\n                            proceed accordingly.":"Your profile has been successfully updated.")):a$4.$==1?FormletHelpers.ErrorF("The user name is already in use. Select a different username and try again."):FormletHelpers.ErrorF("You seem to have been disconnected.\nPlease log in again."));
     });
    });
   });
  }
 },Web.Control,UserProfileForm);
 DeveloperForm=UserControls.DeveloperForm=Runtime.Class({
  get_Body:function()
  {
   var $this,isPublicForm,f,headerForm,f$1,a,descriptionForm,f$2,a$1,techForm,f$3,f$4,schoolsForm,f$5,workplaceForm,f$6,blogUrlForm,f$7,f$8,form,f$9,x,x$1,l,i,o,b;
   $this=this;
   isPublicForm=(f=Controls$2.Checkbox(this.devInfo.ShowInPublicSearches),Enhance$3.WithTextLabel("Is Public?",f));
   headerForm=(f$1=Enhance$3.WithValidationIcon((a=function(x$2)
   {
    return x$2.length<=32;
   },function(a$2)
   {
    return Data.Validator().Is(a,"Maximum 32 characters is allowed.",a$2);
   }(Controls$2.Input(this.devInfo.DescriptionSummary)))),Enhance$3.WithTextLabel("Short headline",f$1));
   descriptionForm=(f$2=Enhance$3.WithValidationIcon((a$1=Controls$2.TextArea(this.devInfo.Description),Data.Validator().IsNotEmpty("You must enter your short developer bio",a$1))),Enhance$3.WithTextLabel("Developer biography",f$2));
   techForm=(f$3=(f$4=UserControls.DeveloperTagRankForm(this.devInfo.TagRanks),Enhance$3.WithCssClass("technology-rank",f$4)),Enhance$3.WithTextLabel("Skills",f$3));
   schoolsForm=(f$5=Enhance$3.WithFormContainer(UserControls.SchoolForms(this.devInfo.Schools)),Enhance$3.WithTextLabel("Education",f$5));
   workplaceForm=(f$6=Enhance$3.WithFormContainer(UserControls.WorkPlaceForms(this.devInfo.Workplaces)),Enhance$3.WithTextLabel("Workplaces",f$6));
   blogUrlForm=(f$7=function(a$2)
   {
    return a$2===""?null:{
     $:1,
     $0:a$2
    };
   },function(f$10)
   {
    return Formlet$1.Map(f$7,f$10);
   }((f$8=Controls$2.Input(Operators.DefaultArg(this.devInfo.BlogUrl,"")),Enhance$3.WithTextLabel("Blog RSS URL",f$8))));
   form=(f$9=function(el)
   {
    var x$2;
    return Operators$1.add((x$2=[Attr.Attr().NewAttr("class","edit-developer")],Tags$1.Tags().NewTag("div",x$2)),[el]);
   },function(f$10)
   {
    return Formlet$1.MapElement(f$9,f$10);
   }((x=(x$1=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(DeveloperProfileUpdateData.New,7)),isPublicForm),headerForm),descriptionForm),blogUrlForm),techForm),schoolsForm),workplaceForm),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,{
    $:0
   },i.Placement)),Enhance$3.WithLabelConfiguration(l,x$1))),(o=this.hasAccount?"Update Profile":"Create Profile",UserControls.SetupForm(o,true,x)))));
   b=Formlet$1.Do();
   return b.Delay(function()
   {
    return b.Bind(form,function(a$2)
    {
     var m,username;
     return b.Bind(Formlet.LoadingFormlet((m=$this.usernameToUpdate,(m!=null?m.$==1:false)?(username=m.$0,(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateOtherDeveloperProfile:-439477480",[username,a$2])):(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.UpdateDeveloperProfile:71084165",[a$2]))),function(a$3)
     {
      return b.ReturnFrom(a$3?FormletHelpers.SuccessF("Your profile has been successfully updated."):FormletHelpers.ErrorF("You seem to have been disconnected.\nPlease log in again."));
     });
    });
   });
  }
 },Web.Control,DeveloperForm);
 UserTagsForm=UserControls.UserTagsForm=Runtime.Class({
  get_Body:function()
  {
   var $this,visibleTagsUL,x,invisibleTagsUL,x$1,resetContainer,x$2,x$3,x$4,x$5,l,x$6,x$7,x$8,_this,x$9,x$10,x$11,l$1;
   function visibleEntry(tag,isMaster)
   {
    var tagData,li,x$12,x$13,x$14,x$15;
    tagData=Global.Array.prototype.slice.call(arguments);
    li=Tags$1.Tags().NewTag("li",[]);
    return Operators$1.add(li,[(x$12=Operators$1.add((x$13=[Attr.Attr().NewAttr("class","tag"+(isMaster?" master":""))],Tags$1.Tags().NewTag("a",x$13)),[(x$14=[Attr.Attr().NewAttr("src","/images/icons/close.png"),Attr.Attr().NewAttr("alt","remove"),Attr.Attr().NewAttr("title","remove"),Attr.Attr().NewAttr("style","height: 10px; width: 10px; margin-right: 5px;")],Tags$1.Tags().NewTag("img",x$14)),Tags$1.Tags().text(tag)]),(x$15=function()
    {
     var b;
     return li.AppendI((b=Formlet$1.Do(),b.Delay(function()
     {
      return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.UserTag+Rpc.AddIgnoredTag:346238215",[tag])),function(a)
      {
       var f,g,a$1,g$1;
       return b.ReturnFrom(a.$==0?($this.visibleTags=List.filter((f=function(t)
       {
        return t[0];
       },(g=function(y)
       {
        return tag!==y;
       },function(x$16)
       {
        return g(f(x$16));
       })),$this.visibleTags),li.HtmlProvider.Remove(li.get_Body()),$this.invisibleTags=List.sortBy(function(t)
       {
        return t[0];
       },new List.T({
        $:1,
        $0:tagData,
        $1:$this.invisibleTags
       })),invisibleTagsUL.HtmlProvider.Clear(invisibleTagsUL.get_Body()),a$1=(g$1=function(a$2)
       {
        invisibleTagsUL.AppendI(a$2);
       },function(x$16)
       {
        return g$1(invisibleEntry.apply(null,x$16));
       }),function(l$2)
       {
        List.iter(a$1,l$2);
       }($this.invisibleTags),Formlet$1.Never()):Formlet$1.Never());
      });
     })));
    },function(a)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$15($1,$2);
      };
     },a);
    }(x$12),x$12))]);
   }
   function invisibleEntry(tag,isMaster)
   {
    var tagData,li,x$12,x$13,x$14;
    tagData=Global.Array.prototype.slice.call(arguments);
    li=Tags$1.Tags().NewTag("li",[]);
    return Operators$1.add(li,[(x$12=Operators$1.add((x$13=[Attr.Attr().NewAttr("class","tag"+(isMaster?" master":""))],Tags$1.Tags().NewTag("a",x$13)),[Tags$1.Tags().text(tag)]),(x$14=function()
    {
     var b;
     return li.AppendI((b=Formlet$1.Do(),b.Delay(function()
     {
      return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.UserTag+Rpc.AddFavoriteTag:346238215",[tag])),function(a)
      {
       var a$1,g,f,g$1;
       return b.ReturnFrom(a.$==1?Formlet$1.Never():($this.visibleTags=List.sortBy(function(t)
       {
        return t[0];
       },new List.T({
        $:1,
        $0:tagData,
        $1:$this.visibleTags
       })),visibleTagsUL.HtmlProvider.Clear(visibleTagsUL.get_Body()),a$1=(g=function(a$2)
       {
        visibleTagsUL.AppendI(a$2);
       },function(x$15)
       {
        return g(visibleEntry.apply(null,x$15));
       }),function(l$2)
       {
        List.iter(a$1,l$2);
       }($this.visibleTags),$this.invisibleTags=List.filter((f=function(t)
       {
        return t[0];
       },(g$1=function(y)
       {
        return tag!==y;
       },function(x$15)
       {
        return g$1(f(x$15));
       })),$this.invisibleTags),li.HtmlProvider.Remove(li.get_Body()),Formlet$1.Never()));
      });
     })));
    },function(a)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$14($1,$2);
      };
     },a);
    }(x$12),x$12))]);
   }
   $this=this;
   visibleTagsUL=(x=[Attr.Attr().NewAttr("class","favorite-tags")],Tags$1.Tags().NewTag("ul",x));
   invisibleTagsUL=(x$1=[Attr.Attr().NewAttr("class","ignored-tags")],Tags$1.Tags().NewTag("ul",x$1));
   resetContainer=Tags$1.Tags().NewTag("div",[]);
   x$2=[(x$3=[Tags$1.Tags().text("My tags")],Tags$1.Tags().NewTag("h3",x$3)),(x$4=[Tags$1.Tags().text("Here are the topics displayed on your home page. We have\r\n                         inferred some topics you may be interested in, and you can\r\n                         add or remove some more.")],Tags$1.Tags().NewTag("p",x$4)),(x$5=[Tags$1.Tags().text("Click a tag below to remove it from your subjects of interest.")],Tags$1.Tags().NewTag("p",x$5)),Operators$1.add(visibleTagsUL,(l=this.visibleTags,List.map(function($1)
   {
    return visibleEntry($1[0],$1[1]);
   },l))),(x$6=[Tags$1.Tags().text("If you want to reset your topics of interest to the list we have inferred from your activity,\r\n                         please "),(x$7=Operators$1.add((x$8=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small())),Attr.Attr().NewAttr("href","#")],Tags$1.Tags().NewTag("a",x$8)),[Tags$1.Tags().text("Click here")]),(x$9=function()
   {
    var b;
    resetContainer.HtmlProvider.Clear(resetContainer.get_Body());
    return resetContainer.AppendI((b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.UserTag+Rpc.ResetIgnoredAndFavoriteTags:257325233",[])),function(a)
     {
      var msg,tags,tagsWithMaster,m,a$1,g,p,a$2,g$1;
      return a.$==1?(msg=a.$0,b.ReturnFrom(FormletHelpers.ErrorF(msg))):(tags=a.$0,(tagsWithMaster=(m=function(tag)
      {
       var f,g$2;
       return Seq.find((f=function(t)
       {
        return t[0];
       },(g$2=function(y)
       {
        return tag===y;
       },function(x$12)
       {
        return g$2(f(x$12));
       })),$this.allTags);
      },function(l$2)
      {
       return List.map(m,l$2);
      }(tags)),($this.visibleTags=List.sortBy(function(t)
      {
       return t[0];
      },tagsWithMaster),visibleTagsUL.HtmlProvider.Clear(visibleTagsUL.get_Body()),a$1=(g=function(a$3)
      {
       visibleTagsUL.AppendI(a$3);
      },function(x$12)
      {
       return g(visibleEntry.apply(null,x$12));
      }),function(l$2)
      {
       List.iter(a$1,l$2);
      }($this.visibleTags),$this.invisibleTags=(p=function(tag)
      {
       var p$1;
       p$1=function(vTag)
       {
        return vTag!==tag;
       };
       return function(l$2)
       {
        return List.forAll(function($1)
        {
         return p$1($1[0],$1[1]);
        },l$2);
       }($this.visibleTags);
      },function(l$2)
      {
       return List.filter(function($1)
       {
        return p($1[0],$1[1]);
       },l$2);
      }($this.allTags)),invisibleTagsUL.HtmlProvider.Clear(invisibleTagsUL.get_Body()),a$2=(g$1=function(a$3)
      {
       invisibleTagsUL.AppendI(a$3);
      },function(x$12)
      {
       return g$1(invisibleEntry.apply(null,x$12));
      }),function(l$2)
      {
       List.iter(a$2,l$2);
      }($this.invisibleTags),resetContainer.HtmlProvider.Clear(resetContainer.get_Body()),b.ReturnFrom(Formlet$1.Never()))));
     });
    })));
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$9($1,$2);
     };
    },a);
   }(x$7),x$7))],Tags$1.Tags().NewTag("p",x$6)),resetContainer,(x$10=[Tags$1.Tags().text("Add a tag")],Tags$1.Tags().NewTag("h3",x$10)),(x$11=[Tags$1.Tags().text("Click a tag below to add it to your subjects of interest.")],Tags$1.Tags().NewTag("p",x$11)),Operators$1.add(invisibleTagsUL,(l$1=this.invisibleTags,List.map(function($1)
   {
    return invisibleEntry($1[0],$1[1]);
   },l$1)))];
   return Tags$1.Tags().NewTag("div",x$2);
  }
 },Web.Control,UserTagsForm);
 UserControls.DeveloperTagRankForm=function(techRanks)
 {
  var techLabels,rankLabels,techForm,p,xs,x,m,f,rest,first;
  techLabels=List.ofArray(["F#"]);
  rankLabels=List.ofArray([["Beginner",0],["Intermediate",1],["Advanced",2],["Expert",3]]);
  techForm=function(techRankOpt)
  {
   var p$1,tagRank,rank,label,labelForm,a,a$1,rankForm,f$1,a$2,d,x$1,m$1,l;
   p$1=techRankOpt==null?["",-1]:(tagRank=techRankOpt.$0,[tagRank.Tag,tagRank.Rank]);
   rank=p$1[1];
   label=p$1[0];
   labelForm=(a=function(x$2)
   {
    return x$2.length<32;
   },function(a$3)
   {
    return Data.Validator().Is(a,"Maximum 32 characters.",a$3);
   }((a$1=Controls$2.Input(label),Data.Validator().IsNotEmpty("Enter a Non Empty Label",a$1))));
   rankForm=(f$1=function(x$2)
   {
    return x$2.$0;
   },function(f$2)
   {
    return Formlet$1.Map(f$1,f$2);
   }((a$2=function(o)
   {
    return o!=null;
   },function(a$3)
   {
    return Data.Validator().Is(a$2,"Select a level",a$3);
   }((d=rank+1,function(v)
   {
    return Controls$2.Select(d,v);
   }((x$1=(m$1=function(l$1,v)
   {
    return[l$1,{
     $:1,
     $0:v
    }];
   },function(l$1)
   {
    return List.map(function($1)
    {
     return m$1($1[0],$1[1]);
    },l$1);
   }(rankLabels)),(l=List.ofArray([["Select Level",null]]),List.append(l,x$1)))))))));
   return Enhance$3.WithValidationIcon(Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(label$1)
   {
    return function(rank$1)
    {
     return{
      Tag:label$1,
      IsMaster:false,
      Rank:rank$1
     };
    };
   }),labelForm),rankForm)));
  };
  p=techRanks.$==0?[null,List.T.Empty]:(xs=techRanks.$1,(x=techRanks.$0,[{
   $:1,
   $0:x
  },(m=(f=function(a)
  {
   return{
    $:1,
    $0:a
   };
  },function(x$1)
  {
   return techForm(f(x$1));
  }),function(l)
  {
   return List.map(m,l);
  }(xs))]));
  rest=p[1];
  first=p[0];
  return Data.$(Data.$(Formlet$1.Return(function(x$1)
  {
   return function(xs$1)
   {
    return new List.T({
     $:1,
     $0:x$1,
     $1:xs$1
    });
   };
  }),techForm(first)),Formlet.Many(techForm(null),rest));
 };
 UserControls.WorkPlaceForms=function(data)
 {
  var x,f;
  x=List.map(UserControls.WorkPlaceForm,data);
  f=UserControls.WorkPlaceForm(WorkPlaceInfo.get_Default());
  return Formlet.Many(f,x);
 };
 UserControls.SchoolForms=function(data)
 {
  var x,f;
  x=List.map(UserControls.SchoolForm,data);
  f=UserControls.SchoolForm(SchoolInfo.get_Default());
  return Formlet.Many(f,x);
 };
 UserControls.SchoolForm=function(data)
 {
  var nameF,f,a,degF,f$1,fieldsF,f$2,a$1,yearsF,notesF,f$3,f$4;
  nameF=(f=Enhance$3.WithValidationIcon((a=Controls$2.Input(data.Name),Data.Validator().IsNotEmpty("Specify a non empty school name.",a))),Enhance$3.WithTextLabel("School Name",f));
  degF=(f$1=Controls$2.Input(data.Degree),Enhance$3.WithTextLabel("Degree",f$1));
  fieldsF=(f$2=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(data.Field),Data.Validator().IsNotEmpty("Specify a non empty field of study.",a$1))),Enhance$3.WithTextLabel("Field(s) of study",f$2));
  yearsF=UserControls.PeriodFormlet(data.FromYear,data.EndYear);
  notesF=(f$3=Controls$2.TextArea(data.Notes),Enhance$3.WithTextLabel("Notes",f$3));
  f$4=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","school")],Tags$1.Tags().NewTag("div",x)),[el]);
  };
  return function(f$5)
  {
   return Formlet$1.MapElement(f$4,f$5);
  }(Formlet$1.Vertical(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(name,degree,field,t)
  {
   var fromY,endY;
   fromY=t[0];
   endY=t[1];
   return function(notes)
   {
    return SchoolInfo.New(name,degree,field,fromY,endY,notes);
   };
  },4)),nameF),degF),fieldsF),yearsF),notesF)));
 };
 UserControls.WorkPlaceForm=function(data)
 {
  var workPlaceF,f,a,titleF,f$1,a$1,locationF,f$2,a$2,yearsF,descrF,f$3,f$4;
  workPlaceF=(f=Enhance$3.WithValidationIcon((a=Controls$2.Input(data.WorkPlace),Data.Validator().IsNotEmpty("Specify a non empty name.",a))),Enhance$3.WithTextLabel("Name",f));
  titleF=(f$1=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(data.Title),Data.Validator().IsNotEmpty("Specify a non empty name.",a$1))),Enhance$3.WithTextLabel("Your position",f$1));
  locationF=(f$2=Enhance$3.WithValidationIcon((a$2=Controls$2.Input(data.Location),Data.Validator().IsNotEmpty("Specify a non empty location.",a$2))),Enhance$3.WithTextLabel("Location",f$2));
  yearsF=UserControls.PeriodFormlet(data.FromYear,data.EndYear);
  descrF=(f$3=Controls$2.TextArea(data.Description),Enhance$3.WithTextLabel("Notes",f$3));
  f$4=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","workplace")],Tags$1.Tags().NewTag("div",x)),[el]);
  };
  return function(f$5)
  {
   return Formlet$1.MapElement(f$4,f$5);
  }(Formlet$1.Vertical(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(wp,title,loc,t)
  {
   var fromY,endY;
   fromY=t[0];
   endY=t[1];
   return function(descr)
   {
    return WorkPlaceInfo.New(wp,title,loc,fromY,endY,descr);
   };
  },4)),workPlaceF),titleF),locationF),yearsF),descrF)));
 };
 UserControls.PeriodFormlet=function(fromYear,endYear)
 {
  var yearsLabelsValues,fromYearF,ix,f,a,v,x,m,l,endYearF,ix$1,f$1,v$1,x$1,m$1,l$1,f$2;
  function findIx(year)
  {
   var ixOpt,p;
   ixOpt=(p=function(a$1,y)
   {
    return y===year;
   },function(l$2)
   {
    return Seq.tryFindIndex(function($1)
    {
     return p($1[0],$1[1]);
    },l$2);
   }(yearsLabelsValues));
   return ixOpt==null?0:ixOpt.$0+1;
  }
  yearsLabelsValues=List.rev(List.init(50,function(i)
  {
   var year;
   year=i+1970;
   return[Global.String(year),year];
  }));
  fromYearF=(ix=findIx(fromYear),(f=function(o)
  {
   return o.$0;
  },function(f$3)
  {
   return Formlet$1.Map(f,f$3);
  }((a=function(o)
  {
   return o!=null;
  },function(a$1)
  {
   return Data.Validator().Is(a,"Select a start year.",a$1);
  }((v=(x=(m=function(l$2,v$2)
  {
   return[l$2,{
    $:1,
    $0:v$2
   }];
  },function(l$2)
  {
   return List.map(function($1)
   {
    return m($1[0],$1[1]);
   },l$2);
  }(yearsLabelsValues)),(l=List.ofArray([["Choose",null]]),List.append(l,x))),Controls$2.Select(ix,v)))))));
  endYearF=(ix$1=endYear==null?0:findIx(endYear.$0),(f$1=(v$1=(x$1=(m$1=function(l$2,v$2)
  {
   return[l$2,{
    $:1,
    $0:v$2
   }];
  },function(l$2)
  {
   return List.map(function($1)
   {
    return m$1($1[0],$1[1]);
   },l$2);
  }(yearsLabelsValues)),(l$1=List.ofArray([["Present",null]]),List.append(l$1,x$1))),Controls$2.Select(ix$1,v$1)),Enhance$3.WithTextLabel("To",f$1)));
  f$2=Enhance$3.WithFormContainer(Enhance$3.WithValidationIcon(Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(fromD)
  {
   return function(endD)
   {
    return[fromD,endD];
   };
  }),fromYearF),endYearF))));
  return Enhance$3.WithTextLabel("Period",f$2);
 };
 UserControls.SelectedTagsFormOneOrMore=function(tags)
 {
  var p,ts,t,f;
  p=tags.$==1?[tags.$0,tags.$1]:["",List.T.Empty];
  ts=p[1];
  t=p[0];
  f=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","tags-select")],Tags$1.Tags().NewTag("div",x)),[el]);
  };
  return function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }(Data.$(Data.$(Formlet$1.Return(function(t$1)
  {
   return function(ts$1)
   {
    return new List.T({
     $:1,
     $0:t$1,
     $1:ts$1
    });
   };
  }),Controls$2.Input(t)),UserControls.SelectedTagsForm(ts)));
 };
 UserControls.SelectedTagsForm=function(tags)
 {
  var tagForm,x,m,f,f$1;
  tagForm=function(tag)
  {
   var label,a,a$1;
   label=tag==null?"":tag.$0;
   return Enhance$3.WithValidationIcon((a=function(x$1)
   {
    return x$1.length<32;
   },function(a$2)
   {
    return Data.Validator().Is(a,"Maximum 32 characters.",a$2);
   }((a$1=Controls$2.Input(label),Data.Validator().IsNotEmpty("Enter a Non Empty Label",a$1)))));
  };
  x=(m=(f=function(a)
  {
   return{
    $:1,
    $0:a
   };
  },function(x$1)
  {
   return tagForm(f(x$1));
  }),function(l)
  {
   return List.map(m,l);
  }(tags));
  f$1=tagForm(null);
  return Formlet.Many(f$1,x);
 };
 UserControls.SetupForm=function(okLabel,withReset,formlet)
 {
  var buttonClass,x,l,i;
  buttonClass=Server.Large();
  return Enhance$3.WithFormContainer((x=(withReset?function(f)
  {
   return Client$3.EnhanceWithCustomSubmitAndResetButtons(buttonClass,okLabel,"Reset",f);
  }:function(f)
  {
   return Client$3.EnhanceWithCustomSubmitButton(buttonClass,okLabel,f);
  })(formlet),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
   $:1
  },i.VerticalAlign,i.Placement)),Enhance$3.WithLabelConfiguration(l,x))));
 };
 UserControls.Logout=function(backlink,logoutUrls)
 {
  var x,f;
  x=Tags$1.Tags().NewTag("div",[]);
  f=function()
  {
   Concurrency.Start(Concurrency.Delay(function()
   {
    var x$1,m;
    x$1=Concurrency.Parallel((m=function(url)
    {
     var a;
     a=function(ok)
     {
      var v,a$1,r;
      v=(a$1=(r={},r.url=url,r.method="POST",r.xhrFields={
       withCredentials:true
      },r.success=function()
      {
       return ok();
      },r.error=function()
      {
       return ok();
      },r),Global.jQuery.ajax(a$1));
     };
     return Concurrency.FromContinuations(function($1,$2,$3)
     {
      return a.apply(null,[$1,$2,$3]);
     });
    },function(a)
    {
     return Arrays.map(m,a);
    }(logoutUrls)));
    return Concurrency.Bind(x$1,function()
    {
     Global.window.location.replace(backlink);
     return Concurrency.Return(null);
    });
   }),null);
  };
  (function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x));
  return x;
 };
 RegistrationControl=Registration.RegistrationControl=Runtime.Class({
  get_Body:function()
  {
   var $this,buttonClass,conf,confAuthorStep1,container,AuthorRegistrationForm,step1a,f,f$1,f$2,x,f$3,a,f$4,a$1,step1,b,b$1,RegistrationForm,toUserData,toRegData,passwordForm,b$2,form,f$5,a$2,f$6,a$3,f$7,a$4,f$8,f$9,x$1,f$10,a$5,f$11,a$6,f$12,f$13,f$14,f$15,a$7,f$16,a$8,b$3,x$2,x$3;
   $this=this;
   buttonClass=Server.Large();
   conf=FormContainerConfiguration.New(null,Padding.New(null,null,null,null),{
    $:1,
    $0:{
     $:0,
     $0:"Fill out the form to create your user profile."
    }
   },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
   confAuthorStep1=FormContainerConfiguration.New({
    $:1,
    $0:{
     $:0,
     $0:"Look up"
    }
   },Padding.New(null,null,null,null),{
    $:1,
    $0:{
     $:0,
     $0:"Please enter your existing username to create an author profile."
    }
   },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
   container=Tags$1.Tags().NewTag("div",[]);
   AuthorRegistrationForm=(step1a=(f=(f$1=Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(emailOrUsername,pw,$1,ic)
   {
    return[emailOrUsername,pw,ic];
   },4)),(f$2=Enhance$3.WithValidationIcon((x=Controls$2.Input(""),(Data.Validator().IsEmail("You must enter your registered email address"))(x))),Enhance$3.WithTextLabel("Email",f$2))),(f$3=Enhance$3.WithValidationIcon((a=Controls$2.Password(""),Data.Validator().IsNotEmpty("You must enter your password",a))),Enhance$3.WithTextLabel("Password",f$3))),Formlet$1.OfElement(function()
   {
    var x$4;
    x$4=[Tags$1.Tags().NewTag("hr",[])];
    return Tags$1.Tags().NewTag("div",x$4);
   })),(f$4=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must enter your invitation code",a$1))),Enhance$3.WithTextLabel("Invitation code",f$4))),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$1)),Enhance$3.WithCustomFormContainer(confAuthorStep1,f)),(step1=Enhance$3.WithFormContainer(Formlet$1.Vertical((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(step1a,function(a$9)
    {
     var pw,ic,email;
     pw=a$9[1];
     ic=a$9[2];
     email=a$9[0];
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Registration+Server.ValidateByEmail:2100242406",[email,pw,ic])),function(a$10)
     {
      return b.ReturnFrom(a$10==null?Formlet$1.Return([email,pw,ic]):FormletHelpers.ErrorF(a$10.$0));
     });
    });
   })))),Formlet$1.Flowlet((b$1=Formlet$1.Do(),b$1.Delay(function()
   {
    return b$1.Bind(step1,function(a$9)
    {
     var email;
     email=a$9[0];
     return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.CreateAuthorProfileByEmailOrUsername:-965607249",[email])),function(a$10)
     {
      var url;
      return b$1.ReturnFrom(a$10.$==1?FormletHelpers.ErrorF(a$10.$0):(url=$this.args.CreateAuthorUrl,Global.location.href=url,Formlet$1.Return(null)));
     });
    });
   })))));
   RegistrationForm=(toUserData=function(un,fn,ln,comp,email,phone,st1,st2,city,state,zip,country)
   {
    return UserData.New(un,fn,ln,comp,email,phone,st1,st2,city,state,zip,country,false,false,false,null,List.T.Empty,List.T.Empty,null,null,null,null,0,0,null,null,null,false,false,null,null,false,List.T.Empty,UserOptionsDAO.get_Empty());
   },(toRegData=function(un,fn,ln,comp,email,phone,st1,st2,city,state,zip,country,pw)
   {
    return{
     Data:toUserData(un,fn,ln,comp,email,phone,st1,st2,city,state,zip,country),
     Password:{
      $:1,
      $0:pw
     },
     ConfirmationLink:$this.args.ConfirmationLink,
     OAuthUserData:$this.args.OAuthUserData
    };
   },(passwordForm=(b$2=Formlet$1.Do(),b$2.Delay(function()
   {
    var f$17,a$9;
    return b$2.Bind((f$17=Enhance$3.WithValidationIcon((a$9=Controls$2.Password(""),Data.Validator().IsNotEmpty("You must set a password",a$9))),Enhance$3.WithTextLabel("Password",f$17)),function(a$10)
    {
     var f$18,a$11;
     return b$2.Bind((f$18=Enhance$3.WithValidationIcon((a$11=Controls$2.Password(""),Data.Validator().IsEqual(a$10,"Your confirmed password doesn't match",a$11))),Enhance$3.WithTextLabel("Confirm password",f$18)),function(a$12)
     {
      return b$2.Return(a$12);
     });
    });
   })),(form=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(toRegData,13)),(f$5=Enhance$3.WithValidationIcon((a$2=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your desired username",a$2))),Enhance$3.WithTextLabel("Username",f$5))),(f$6=Enhance$3.WithValidationIcon((a$3=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your first name",a$3))),Enhance$3.WithTextLabel("First name",f$6))),(f$7=Enhance$3.WithValidationIcon((a$4=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your last name",a$4))),Enhance$3.WithTextLabel("Last name",f$7))),(f$8=Controls$2.Input(""),Enhance$3.WithTextLabel("Company",f$8))),(f$9=Enhance$3.WithValidationIcon((x$1=Controls$2.Input(""),(Data.Validator().IsEmail("You must specify a correct email"))(x$1))),Enhance$3.WithTextLabel("Email",f$9))),(f$10=Enhance$3.WithValidationIcon((a$5=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your phone number",a$5))),Enhance$3.WithTextLabel("Phone",f$10))),(f$11=Enhance$3.WithValidationIcon((a$6=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your street address",a$6))),Enhance$3.WithTextLabel("Street address 1",f$11))),(f$12=Controls$2.Input(""),Enhance$3.WithTextLabel("Street address 2",f$12))),(f$13=Controls$2.Input(""),Enhance$3.WithTextLabel("City",f$13))),(f$14=Controls$2.Input(""),Enhance$3.WithTextLabel("State",f$14))),(f$15=Enhance$3.WithValidationIcon((a$7=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your zip code",a$7))),Enhance$3.WithTextLabel("Zip code",f$15))),(f$16=Enhance$3.WithValidationIcon((a$8=Controls$2.Input(""),Data.Validator().IsNotEmpty("You must specify your country",a$8))),Enhance$3.WithTextLabel("Country",f$16))),passwordForm),(b$3=Formlet$1.Do(),b$3.Delay(function()
   {
    var f$17,x$4,l,i;
    return b$3.Bind((f$17=(x$4=Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,form),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
     $:1
    },i.VerticalAlign,i.Placement)),Enhance$3.WithLabelConfiguration(l,x$4))),Enhance$3.WithCustomFormContainer(conf,f$17)),function(a$9)
    {
     return b$3.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc+Async.Register:1317529260",[a$9])),function(a$10)
     {
      return b$3.ReturnFrom(Formlet$1.OfElement(function()
      {
       var e,x$5,x$6,x$7,x$8,x$9,x$10,x$11;
       return a$10.$==1?(e=a$10.$0,Operators$1.add((x$5=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$5)),[Tags$1.Tags().text(e)])):Operators$1.add((x$6=[Attr.Attr().NewAttr("class","success")],Tags$1.Tags().NewTag("div",x$6)),[(x$7=[Tags$1.Tags().text("\r\n                                We have created your account and sent you a confirmation link to\r\n                                complete your registration.  Please check your email and proceed\r\n                                accordingly.")],Tags$1.Tags().NewTag("span",x$7)),Tags$1.Tags().NewTag("br",[]),Operators$1.add((x$8=[Attr.Attr().NewAttr("style","padding-top:10px")],Tags$1.Tags().NewTag("div",x$8)),[(x$9=[Tags$1.Tags().text("Back to the ")],Tags$1.Tags().NewTag("span",x$9)),Operators$1.add((x$10=[(x$11=$this.args.MainPage,Attr.Attr().NewAttr("href",x$11)),Attr.Attr().NewAttr("id","registration-main-page-link")],Tags$1.Tags().NewTag("a",x$10)),[Tags$1.Tags().text("main page")])])]);
      }));
     });
    });
   }))))));
   container.AppendI(RegistrationForm);
   return Tabs.New2(List.ofArray([["User",Operators$1.add((x$2=[Attr.Attr().NewAttr("class","registration-form")],Tags$1.Tags().NewTag("div",x$2)),[Operators$1.add(container,[Attr.Attr().NewAttr("class","yui-skin-sam")])])],["Author",Operators$1.add((x$3=[Attr.Attr().NewAttr("class","registration-form")],Tags$1.Tags().NewTag("div",x$3)),[AuthorRegistrationForm])]]));
  }
 },Web.Control,RegistrationControl);
 NewTopicForm=Client$8.NewTopicForm=Runtime.Class({
  get_Body:function()
  {
   var $this,buttonClass,x;
   $this=this;
   buttonClass=Server.Comment();
   x=List.ofSeq(Seq.delay(function()
   {
    return Seq.append(Client$8.ReplyForm(buttonClass,{
     $:1
    },$this.NewTopicUrl,"even",$this.DefaultTags,$this.ProductsAvailable,0),Seq.delay(function()
    {
     var x$1;
     return[Operators$1.add((x$1=[Attr.Attr().NewAttr("class","markup-help-container")],Tags$1.Tags().NewTag("div",x$1)),[Client$8.MarkupHelp()])];
    }));
   }));
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,NewTopicForm);
 ContactButtonConfiguration.get_Default=function()
 {
  return ContactButtonConfiguration.New(function()
  {
   return Tags$1.Tags().NewTag("div",[]);
  },Server.Small(),"","Contact","Hide contact box");
 };
 ContactButtonConfiguration.New=function(ReplyFormElement,ButtonClass,ReplyPanelId,ButtonLabel,ButtonHideLabel)
 {
  return{
   ReplyFormElement:ReplyFormElement,
   ButtonClass:ButtonClass,
   ReplyPanelId:ReplyPanelId,
   ButtonLabel:ButtonLabel,
   ButtonHideLabel:ButtonHideLabel
  };
 };
 ContactButtonControl=Client$8.ContactButtonControl=Runtime.Class({
  get_Body:function()
  {
   var $this,i,R;
   $this=this;
   return Client$8.ContactButton((i=ContactButtonConfiguration.get_Default(),(R=this.conf.ReplyPanelId,ContactButtonConfiguration.New(function(hideForm)
   {
    var form,b;
    form=(b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet$1.WithNotificationChannel(Client$8.MarkupMessageForm({
      FixedRecipient:{
       $:1,
       $0:$this.conf.Recipient
      },
      ButtonClass:Server.Small(),
      IncludeTitle:true,
      Text:""
     })),function(a)
     {
      var title,reset,message,format;
      title=a[0][1];
      reset=a[1];
      message=a[0][2];
      format=a[0][3];
      return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.PrivateMessage+Rpc.PostMessage:-1447099212",[{
       Recipients:List.ofArray([$this.conf.Recipient]),
       Title:title,
       Message:message,
       Format:format,
       Type:{
        $:0
       }
      }])),function(a$1)
      {
       return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(reset(void 0),hideForm(),FormletHelpers.SuccessF("Message successfully sent.")));
      });
     });
    }));
    return Tags$1.Tags().NewTag("div",[form]);
   },i.ButtonClass,R,i.ButtonLabel,i.ButtonHideLabel))));
  }
 },Web.Control,ContactButtonControl);
 DeleteButton=Client$8.DeleteButton=Runtime.Class({
  get_Body:function()
  {
   return Client$8.deleteButton(this.TopicId,this.ButtonClass,this.OnDeleteUrl);
  }
 },Web.Control,DeleteButton);
 ReplyEditButton=Client$8.ReplyEditButton=Runtime.Class({
  ToggleMarkupHelp:function(buttons)
  {
   if(this.IsMarkupHelpOpen)
    this.HideMarkupHelp(buttons);
   else
    this.ShowMarkupHelp(buttons);
  },
  HideMarkupHelp:function(buttons)
  {
   var selector,_this;
   this.IsMarkupHelpOpen=false;
   (selector="#markup-help-container-"+Global.String(this.CommentId),Global.jQuery(selector)).empty();
   _this=buttons.MarkupHelpButton;
   _this.HtmlProvider.Clear(_this.get_Body());
   buttons.MarkupHelpButton.AppendI(Tags$1.Tags().text("Markup help"));
  },
  ShowMarkupHelp:function(buttons)
  {
   var tabs,_this,selector,_this$1;
   this.IsMarkupHelpOpen=true;
   tabs=Client$8.MarkupHelp();
   _this=(selector="#markup-help-container-"+Global.String(this.CommentId),Global.jQuery(selector)).empty();
   _this.append.apply(_this,[tabs.Dom].concat([]));
   tabs.Render();
   _this$1=buttons.MarkupHelpButton;
   _this$1.HtmlProvider.Clear(_this$1.get_Body());
   buttons.MarkupHelpButton.AppendI(Tags$1.Tags().text("Hide markup help"));
  },
  ToggleEditForm:function(buttons)
  {
   var element,element$1;
   if(this.IsReplyOpen)
    {
     (element=buttons.ReplyButton.get_Body(),Global.jQuery(element)).show();
     this.HideEditForm(buttons);
    }
   else
    {
     (element$1=buttons.ReplyButton.get_Body(),Global.jQuery(element$1)).hide();
     this.ShowEditForm(buttons);
    }
  },
  HideEditForm:function(buttons)
  {
   var selector,selector$1,_this;
   this.IsReplyOpen=false;
   this.HideMarkupHelp(buttons);
   (selector="#comment-reply-container-"+Global.String(this.CommentId),Global.jQuery(selector)).empty();
   (selector$1="#"+this.get_ExtraButtonId(),Global.jQuery(selector$1)).addClass("no-display");
   _this=buttons.EditButton;
   _this.HtmlProvider.Clear(_this.get_Body());
   buttons.EditButton.AppendI(Tags$1.Tags().text("Edit"));
  },
  ShowEditForm:function(buttons)
  {
   var $this,x,form,x$1,_this,_this$1,selector,x$2,selector$1,_this$2;
   $this=this;
   this.IsReplyOpen=true;
   x=function()
   {
    return $this.ToggleMarkupHelp(buttons);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x($1,$2);
     };
    },a);
   }(buttons.MarkupHelpButton));
   form=(x$1=new List.T({
    $:1,
    $0:buttons.MarkupHelpButton,
    $1:Client$8.ReplyForm(this.get_ButtonClass(),{
     $:2,
     $0:this.CommentId,
     $1:this.ToplevelId
    },"",this.Level%2===0?"odd":"even",List.T.Empty,List.T.Empty,this.CommentFormat)
   }),Tags$1.Tags().NewTag("div",x$1));
   _this=(_this$1=(selector="#comment-reply-container-"+Global.String(this.CommentId),Global.jQuery(selector)).empty(),_this$1.append.apply(_this$1,[(x$2=[Tags$1.Tags().text("Edit message")],Tags$1.Tags().NewTag("h3",x$2)).Dom].concat([])));
   _this.append.apply(_this,[form.Dom].concat([]));
   (selector$1="#"+this.get_ExtraButtonId(),Global.jQuery(selector$1)).removeClass("no-display");
   _this$2=buttons.EditButton;
   _this$2.HtmlProvider.Clear(_this$2.get_Body());
   buttons.EditButton.AppendI(Tags$1.Tags().text("Hide edit box"));
  },
  ToggleReplyForm:function(buttons)
  {
   var element,element$1;
   if(this.IsReplyOpen)
    {
     (element=buttons.EditButton.get_Body(),Global.jQuery(element)).show();
     this.HideReplyForm(buttons);
    }
   else
    {
     (element$1=buttons.EditButton.get_Body(),Global.jQuery(element$1)).hide();
     this.ShowReplyForm(buttons);
    }
  },
  HideReplyForm:function(buttons)
  {
   var selector,selector$1,_this,x;
   this.IsReplyOpen=false;
   this.HideMarkupHelp(buttons);
   (selector="#comment-reply-container-"+Global.String(this.CommentId),Global.jQuery(selector)).empty();
   (selector$1="#"+this.get_ExtraButtonId(),Global.jQuery(selector$1)).addClass("no-display");
   _this=buttons.ReplyButton;
   _this.HtmlProvider.Clear(_this.get_Body());
   buttons.ReplyButton.AppendI((x=this.ReplyText,Tags$1.Tags().text(x)));
  },
  ShowReplyForm:function(buttons)
  {
   var $this,x,form,x$1,_this,_this$1,selector,x$2,selector$1,_this$2;
   $this=this;
   this.IsReplyOpen=true;
   x=function()
   {
    return $this.ToggleMarkupHelp(buttons);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x($1,$2);
     };
    },a);
   }(buttons.MarkupHelpButton));
   form=(x$1=new List.T({
    $:1,
    $0:buttons.MarkupHelpButton,
    $1:Client$8.ReplyForm(this.get_ButtonClass(),{
     $:0,
     $0:this.CommentId,
     $1:this.ToplevelId
    },"",this.Level%2===0?"odd":"even",List.T.Empty,List.T.Empty,0)
   }),Tags$1.Tags().NewTag("div",x$1));
   _this=(_this$1=(selector="#comment-reply-container-"+Global.String(this.CommentId),Global.jQuery(selector)).empty(),_this$1.append.apply(_this$1,[(x$2=[Tags$1.Tags().text("Add comment")],Tags$1.Tags().NewTag("h3",x$2)).Dom].concat([])));
   _this.append.apply(_this,[form.Dom].concat([]));
   (selector$1="#"+this.get_ExtraButtonId(),Global.jQuery(selector$1)).removeClass("no-display");
   _this$2=buttons.ReplyButton;
   _this$2.HtmlProvider.Clear(_this$2.get_Body());
   buttons.ReplyButton.AppendI(Tags$1.Tags().text("Hide reply box"));
  },
  get_ExtraButtonId:function()
  {
   return"comment-response-extra-button-"+Global.String(this.CommentId);
  },
  get_ReplyFormId:function()
  {
   return"forum-reply-form-"+Global.String(this.CommentId);
  },
  get_ButtonClass:function()
  {
   return this.Level<0?Server.Small():Server.Comment();
  },
  get_Body:function()
  {
   var $this,mhButton,x,replyButton,x$1,x$2,editButton,x$3,buttons,x$4,x$5,delButton,x$6;
   $this=this;
   mhButton=Operators$1.add((x=[Attr.Attr().NewAttr("class",this.get_ButtonClass()+" comment-button no-display"),Attr.Attr().NewAttr("id",this.get_ExtraButtonId())],Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text("Markup help")]);
   replyButton=Operators$1.add((x$1=[Attr.Attr().NewAttr("class",this.get_ButtonClass()+" comment-button")],Tags$1.Tags().NewTag("a",x$1)),[(x$2=this.ReplyText,Tags$1.Tags().text(x$2))]);
   editButton=Operators$1.add((x$3=[Attr.Attr().NewAttr("class",this.get_ButtonClass()+" comment-button")],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("Edit")]);
   buttons={
    ReplyButton:replyButton,
    EditButton:editButton,
    MarkupHelpButton:mhButton
   };
   x$4=function()
   {
    return $this.ToggleReplyForm(buttons);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   }(replyButton));
   x$5=function()
   {
    return $this.ToggleEditForm(buttons);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$5($1,$2);
     };
    },a);
   }(editButton));
   delButton=Client$8.deleteButton(this.CommentId,this.get_ButtonClass()+" comment-button",this.Level<0?{
    $:1,
    $0:this.TopicListUrl
   }:null);
   x$6=List.ofSeq(Seq.delay(function()
   {
    return Seq.append([replyButton],Seq.delay(function()
    {
     return Seq.append($this.CanEdit?[editButton]:[],Seq.delay(function()
     {
      return $this.CanDelete?[delButton]:[];
     }));
    }));
   }));
   return Tags$1.Tags().NewTag("span",x$6);
  }
 },Web.Control,ReplyEditButton);
 MarkAsAnswerButton=Client$8.MarkAsAnswerButton=Runtime.Class({
  TryUnmarkAsAnswer:function(container)
  {
   var $this,b;
   $this=this;
   container.HtmlProvider.Clear(container.get_Body());
   container.AppendI((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.UnmarkAsAnswer:-322117664",[$this.CommentId])),function(a)
    {
     return b.ReturnFrom(Formlet$1.OfElement(function()
     {
      var selector,x;
      return a.$==0?((selector="#comment-"+Global.String($this.CommentId),Global.jQuery(selector)).parent().removeClass("isanswer"),$this.MarkButton(container)):(x=[$this.UnmarkButton(container),Tags$1.Tags().text("Error when unmarking this comment")],Tags$1.Tags().NewTag("span",x));
     }));
    });
   })));
  },
  TryMarkAsAnswer:function(container)
  {
   var $this,b;
   $this=this;
   container.HtmlProvider.Clear(container.get_Body());
   container.AppendI((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.MarkAsAnswer:-322117664",[$this.CommentId])),function(a)
    {
     return b.ReturnFrom(Formlet$1.OfElement(function()
     {
      var selector,x;
      return a.$==0?((selector="#comment-"+Global.String($this.CommentId),Global.jQuery(selector)).parent().addClass("isanswer"),$this.UnmarkButton(container)):(x=[$this.MarkButton(container),Tags$1.Tags().text("Error when marking this comment as answer")],Tags$1.Tags().NewTag("span",x));
     }));
    });
   })));
  },
  UnmarkButton:function(container)
  {
   var $this,x,x$1,x$2,_this,x$3;
   $this=this;
   x=[(x$1=Operators$1.add((x$2=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Comment()+" comment-button"))],Tags$1.Tags().NewTag("a",x$2)),[Tags$1.Tags().text("Unmark answer")]),(x$3=function()
   {
    return $this.TryUnmarkAsAnswer(container);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$3($1,$2);
     };
    },a);
   }(x$1),x$1))];
   return Tags$1.Tags().NewTag("span",x);
  },
  MarkButton:function(container)
  {
   var $this,x,x$1,_this,x$2;
   $this=this;
   x=Operators$1.add((x$1=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Comment()))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Mark as an answer")]);
   x$2=function()
   {
    return $this.TryMarkAsAnswer(container);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x));
   return x;
  },
  get_Body:function()
  {
   var $this,container;
   $this=this;
   container=Tags$1.Tags().NewTag("span",[]);
   return Operators$1.add(container,[(this.BeginIsAnswer?function(a)
   {
    return $this.UnmarkButton(a);
   }:function(a)
   {
    return $this.MarkButton(a);
   })(container)]);
  }
 },Web.Control,MarkAsAnswerButton);
 ScoreDisplay=Client$8.ScoreDisplay=Runtime.Class({
  get_Body:function()
  {
   var $this,showCount,showPosNegCount,plusButton,x,minusButton,x$1,scoreDisplay,x$2,x$3,updateDisplayAfterVote,x$4,x$5,x$6,x$7;
   $this=this;
   showCount=function(count)
   {
    return count>=1000000?Global.String(count/1000000>>0)+"."+Global.String((count/100000>>0)%10)+"M":count>=1000?Global.String(count/1000>>0)+"."+Global.String((count/100>>0)%10)+"k":Global.String(count);
   };
   showPosNegCount=function(count)
   {
    return(count>0?"+":"")+showCount(count);
   };
   plusButton=Operators$1.add((x=[Attr.Attr().NewAttr("class","topic-counter-plus"),Attr.Attr().NewAttr("title","Upvote")],Tags$1.Tags().NewTag("td",x)),[Tags$1.Tags().text("+")]);
   minusButton=Operators$1.add((x$1=[Attr.Attr().NewAttr("class","topic-counter-minus"),Attr.Attr().NewAttr("title","Downvote")],Tags$1.Tags().NewTag("td",x$1)),[Tags$1.Tags().text("-")]);
   scoreDisplay=Operators$1.add((x$2=[Attr.Attr().NewAttr("class","topic-counter-count")],Tags$1.Tags().NewTag("span",x$2)),[(x$3=showPosNegCount(this.Score),Tags$1.Tags().text(x$3))]);
   updateDisplayAfterVote=function()
   {
    var x$8,selector;
    scoreDisplay.HtmlProvider.Clear(scoreDisplay.get_Body());
    scoreDisplay.AppendI((x$8=showPosNegCount($this.Score),Tags$1.Tags().text(x$8)));
    minusButton.HtmlProvider.Remove(minusButton.get_Body());
    plusButton.HtmlProvider.Remove(plusButton.get_Body());
    (selector="#score-display-"+Global.String($this.TopicId),Global.jQuery(selector)).parent().removeClass("good").removeClass("bad").addClass($this.Score>0?"good":$this.Score<0?"bad":"");
   };
   x$4=[(x$5=[(x$6=List.ofSeq(Seq.delay(function()
   {
    var x$8,x$9;
    return Seq.append([Operators$1.add((x$8=[Attr.Attr().NewAttr("class","score-display-box"),Attr.Attr().NewAttr("rowspan","2")],Tags$1.Tags().NewTag("td",x$8)),[scoreDisplay,Tags$1.Tags().NewTag("br",[]),Operators$1.add((x$9=[Attr.Attr().NewAttr("class","topic-counter-label")],Tags$1.Tags().NewTag("span",x$9)),[Tags$1.Tags().text("score")])])],Seq.delay(function()
    {
     var x$10;
     return $this.CanVote?[((x$10=function()
     {
      return Concurrency.Start(Concurrency.Delay(function()
      {
       var x$11;
       x$11=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.UpVote:-322117664",[$this.TopicId]);
       return Concurrency.Bind(x$11,function(a)
       {
        (a!=null?a.$==1:false)?a.$0.$==0?($this.Score=$this.Score+1,updateDisplayAfterVote()):void 0:Global.window.open("/login-frame","login","width=600,height=500,status=0,resizable=0,location=0");
        return Concurrency.Return(null);
       });
      }),null);
     },function(a)
     {
      EventsPervasives.Events().OnClick(function($1)
      {
       return function($2)
       {
        return x$10($1,$2);
       };
      },a);
     })(plusButton),plusButton)]:[];
    }));
   })),Tags$1.Tags().NewTag("tr",x$6)),(x$7=List.ofSeq(Seq.delay(function()
   {
    var x$8;
    return $this.CanVote?[((x$8=function()
    {
     return Concurrency.Start(Concurrency.Delay(function()
     {
      var x$9;
      x$9=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.DownVote:-322117664",[$this.TopicId]);
      return Concurrency.Bind(x$9,function(a)
      {
       (a!=null?a.$==1:false)?a.$0.$==0?($this.Score=$this.Score-1,updateDisplayAfterVote()):void 0:Global.window.open("/login-frame","login","width=600,height=500,status=0,resizable=0,location=0");
       return Concurrency.Return(null);
      });
     }),null);
    },function(a)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$8($1,$2);
      };
     },a);
    })(minusButton),minusButton)]:[];
   })),Tags$1.Tags().NewTag("tr",x$7))],Tags$1.Tags().NewTag("tbody",x$5))];
   return Tags$1.Tags().NewTag("table",x$4);
  }
 },Web.Control,ScoreDisplay);
 EditTagsButton=Client$8.EditTagsButton=Runtime.Class({
  get_Body:function()
  {
   var $this,editPanel,x,msgPanel,x$1,buttonCssClass,x$2,x$3,x$4;
   $this=this;
   editPanel=(x=[Attr.Attr().NewAttr("class","tag-edit")],Tags$1.Tags().NewTag("div",x));
   msgPanel=(x$1=[Attr.Attr().NewAttr("style","display: block;")],Tags$1.Tags().NewTag("div",x$1));
   buttonCssClass=Server.Small();
   x$2=[(x$3=Client$3.Button("Change tags","",buttonCssClass+" comment-button"),(x$4=function()
   {
    var f,b;
    editPanel.HtmlProvider.Clear(editPanel.get_Body());
    return editPanel.AppendI((f=function()
    {
    },function(f$1)
    {
     return Formlet$1.Run(f,f$1);
    }((b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetTagsStringForQuestionById:-240413350",[$this.topicId])),function(a)
     {
      var tagsString,editBox,x$5,saveButton,x$6,x$7,cancelButton,x$8,x$9,element;
      tagsString=a.$==0?a.$0:"[Failed to retrieve tags]";
      editBox=(x$5=[Attr.Attr().NewAttr("type","text"),Attr.Attr().NewAttr("value",tagsString),Attr.Attr().NewAttr("class","tag-edit-box")],Tags$1.Tags().NewTag("input",x$5));
      saveButton=(x$6=Client$3.Button("Save","",buttonCssClass),(x$7=function()
      {
       var f$1,b$1;
       msgPanel.HtmlProvider.Clear(msgPanel.get_Body());
       return msgPanel.AppendI((f$1=function()
       {
       },function(f$2)
       {
        return Formlet$1.Run(f$1,f$2);
       }((b$1=Formlet$1.Do(),b$1.Delay(function()
       {
        return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.UpdateTagsStringForQuestionById:-279546599",[$this.topicId,Client$2.ParseTags(editBox.get_Value())])),function(a$1)
        {
         var msg;
         a$1.$==0?(msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"error"),msgPanel.HtmlProvider.AddClass(msgPanel.get_Body(),"success"),msgPanel.AppendI(Tags$1.Tags().text("Updated, refresh page to reflect"))):(msg=a$1.$0,msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"success"),msgPanel.HtmlProvider.AddClass(msgPanel.get_Body(),"error"),msgPanel.AppendI(Tags$1.Tags().text("Error: "+msg)));
         return b$1.Return();
        });
       })))));
      },function(a$1)
      {
       EventsPervasives.Events().OnClick(function($1)
       {
        return function($2)
        {
         return x$7($1,$2);
        };
       },a$1);
      }(x$6),x$6));
      cancelButton=(x$8=Client$3.Button("Cancel","",buttonCssClass),(x$9=function()
      {
       msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"success");
       msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"error");
       msgPanel.HtmlProvider.Clear(msgPanel.get_Body());
       return editPanel.HtmlProvider.Clear(editPanel.get_Body());
      },function(a$1)
      {
       EventsPervasives.Events().OnClick(function($1)
       {
        return function($2)
        {
         return x$9($1,$2);
        };
       },a$1);
      }(x$8),x$8));
      editPanel.AppendI(editBox);
      editPanel.AppendI(saveButton);
      editPanel.AppendI(cancelButton);
      (element=editBox.get_Body(),Global.jQuery(element)).focus();
      return b.Return();
     });
    })))));
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   }(x$3),x$3)),editPanel,msgPanel];
   return Tags$1.Tags().NewTag("div",x$2);
  }
 },Web.Control,EditTagsButton);
 FoldComment=Client$8.FoldComment=Runtime.Class({
  get_Body:function()
  {
   var $this,x,x$1,x$2,x$3;
   $this=this;
   x=Operators$1.add((x$1=[Attr.Attr().NewAttr("class","comment-unfold-button")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=[Attr.Attr().NewAttr("src","/images/uparrow.gif"),Attr.Attr().NewAttr("title","Hide this comment"),Attr.Attr().NewAttr("alt","Hide this comment")],Tags$1.Tags().NewTag("img",x$2))]);
   x$3=function(e)
   {
    var selector,element,x$4,element$1,x$5;
    (selector="#"+$this.blockId,Global.jQuery(selector)).slideToggle("fast");
    $this.isFolded=!$this.isFolded;
    e.HtmlProvider.Clear(e.get_Body());
    return $this.isFolded?((element=e.get_Body(),Global.jQuery(element)).addClass("folded"),e.AppendI((x$4=[Attr.Attr().NewAttr("src","/images/downarrow.gif"),Attr.Attr().NewAttr("title","Show this comment"),Attr.Attr().NewAttr("alt","Show this comment")],Tags$1.Tags().NewTag("img",x$4)))):((element$1=e.get_Body(),Global.jQuery(element$1)).removeClass("folded"),e.AppendI((x$5=[Attr.Attr().NewAttr("src","/images/uparrow.gif"),Attr.Attr().NewAttr("title","Hide this comment"),Attr.Attr().NewAttr("alt","Hide this comment")],Tags$1.Tags().NewTag("img",x$5))));
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$3($1,$2);
     };
    },a);
   }(x));
   return x;
  }
 },Web.Control,FoldComment);
 ProductTag=Client$8.ProductTag=Runtime.Class({
  get_Body:function()
  {
   var $this,x;
   $this=this;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","tag product-tag"),Attr.Attr().NewAttr("title","Product associated"),Attr.Attr().NewAttr("href",this.href)],Tags$1.Tags().NewTag("a",x)),List.ofSeq(Seq.delay(function()
   {
    return Seq.append($this.canRemove?[Client$8.RemoveProductButton($this.topicId)]:[],Seq.delay(function()
    {
     var x$1,x$2;
     return[(x$1=[(x$2=$this.productName,Tags$1.Tags().text(x$2))],Tags$1.Tags().NewTag("span",x$1))];
    }));
   })));
  }
 },Web.Control,ProductTag);
 AddProductButton=Client$8.AddProductButton=Runtime.Class({
  get_Body:function()
  {
   var $this,f,b;
   $this=this;
   f=function(productId)
   {
    Concurrency.Start(Concurrency.Delay(function()
    {
     var x;
     x=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.AddProduct:1490295466",[$this.topicId,productId]);
     return Concurrency.Bind(x,function(a)
     {
      return a.$==0?(Global.window.location.reload(true),Concurrency.Return(null)):Concurrency.Return(null);
     });
    }),null);
   };
   return function(f$1)
   {
    return Formlet$1.Run(f,f$1);
   }((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Controls$2.ElementButton(function()
    {
     var x,x$1;
     return Operators$1.add((x=[Attr.Attr().NewAttr("title","Associate a product")],Tags$1.Tags().NewTag("a",x)),[(x$1=[Attr.Attr().NewAttr("src","/images/icons/add.png")],Tags$1.Tags().NewTag("img",x$1)),Tags$1.Tags().text("Product")]);
    }),function()
    {
     var x,c,r;
     return b.ReturnFrom((x=Enhance$3.WithFormContainer(FwL.Select(0,"Set product",$this.availableProducts)),(c=(r=new DialogConfiguration.New(),r.title="Set product for this topic",r.width=400,r),Enhance$1.WithCustomDialogWithButtons(c,x))));
    });
   })));
  }
 },Web.Control,AddProductButton);
 Client$8.RemoveProductButton=function(topicId)
 {
  var errorMessage,body,x,img,x$1,dialog,f;
  errorMessage=Tags$1.Tags().NewTag("div",[]);
  body=Operators$1.add((x=[Tags$1.Tags().text("Remove product association from this topic?")],Tags$1.Tags().NewTag("div",x)),[errorMessage]);
  img=Operators$1.add((x$1=[Attr.Attr().NewAttr("src","/images/icons/close.png"),Attr.Attr().NewAttr("alt","Unassociate"),Attr.Attr().NewAttr("title","Unassociate"),Attr.Attr().NewAttr("style","cursor: pointer;")],Tags$1.Tags().NewTag("img",x$1)),[body]);
  dialog=Client$3.YesNoDialog("Remove product",body,function(dialog$1)
  {
   Concurrency.Start(Concurrency.Delay(function()
   {
    var x$2;
    x$2=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.RemoveProduct:1042149960",[topicId]);
    return Concurrency.Bind(x$2,function(a)
    {
     var msg,x$3;
     return a.$==1?(msg=a.$0,(errorMessage.HtmlProvider.Clear(errorMessage.get_Body()),errorMessage.AppendI((x$3=[Tags$1.Tags().text("Error: "+msg)],Tags$1.Tags().NewTag("div",x$3))),Concurrency.Return(null))):(Global.jQuery(dialog$1.element.Dom).dialog("close"),Global.window.location.reload(true),Concurrency.Return(null));
    });
   }),null);
  });
  (f=function(img$1)
  {
   var _this,element,a;
   _this=(element=img$1.get_Body(),Global.jQuery(element));
   a=function(el,ev)
   {
    Global.jQuery(dialog.element.Dom).dialog("open");
    return ev.preventDefault();
   };
   _this.click(function($1)
   {
    return a(this,$1);
   });
  },function(w)
  {
   Operators$1.OnAfterRender(f,w);
  })(img);
  return img;
 };
 Client$8.deleteButton=function(topicId,buttonClass,onDeleteUrl)
 {
  var container;
  function deleteButton(container$1)
  {
   var x,x$1,x$2;
   x=Operators$1.add((x$1=[Attr.Attr().NewAttr("class",buttonClass)],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Delete")]);
   x$2=function()
   {
    return showForm(container$1);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x));
   return x;
  }
  function showForm(container$1)
  {
   var waitFormContainer,x,x$1,x$2,x$3,x$4,x$5,x$6,x$7;
   container$1.HtmlProvider.Clear(container$1.get_Body());
   container$1.AppendI((waitFormContainer=Tags$1.Tags().NewTag("span",[]),(x=[(x$1=[Tags$1.Tags().text("Really delete?")],Tags$1.Tags().NewTag("span",x$1)),(x$2=Operators$1.add((x$3=[Attr.Attr().NewAttr("class",buttonClass)],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("Yes")]),(x$4=function()
   {
    var b;
    waitFormContainer.HtmlProvider.Clear(waitFormContainer.get_Body());
    return waitFormContainer.AppendI((b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.DeleteTopic:-322117664",[topicId])),function(a)
     {
      var url;
      return b.ReturnFrom(a.$==1?FormletHelpers.ErrorF(a.$0):((onDeleteUrl!=null?onDeleteUrl.$==1:false)?(url=onDeleteUrl.$0,Global.location.href=url):Global.window.location.reload(true),Formlet$1.Return()));
     });
    })));
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   }(x$2),x$2)),(x$5=Operators$1.add((x$6=[Attr.Attr().NewAttr("class",buttonClass)],Tags$1.Tags().NewTag("a",x$6)),[Tags$1.Tags().text("No")]),(x$7=function()
   {
    return hideForm(container$1);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$7($1,$2);
     };
    },a);
   }(x$5),x$5)),waitFormContainer],Tags$1.Tags().NewTag("span",x))));
  }
  function hideForm(container$1)
  {
   container$1.HtmlProvider.Clear(container$1.get_Body());
   container$1.AppendI(deleteButton(container$1));
  }
  container=Tags$1.Tags().NewTag("span",[]);
  return Operators$1.add(container,[deleteButton(container)]);
 };
 Client$8.ContactButton=function(conf)
 {
  var x,x$1,x$2,x$3,x$4,c,r,c$1,contactButton,replyContainer,contentContainer,v,_this,selector,x$5,x$6,x$7,isReplyOpen,isMarkupHelpOpen,markupHelpContainer,isRendered,markupHelpButton;
  function c$2()
  {
   var x$8,x$9,x$10,x$11;
   x$8=Operators$1.add((x$9=[Attr.Attr().NewAttr("class",conf.ButtonClass)],Tags$1.Tags().NewTag("a",x$9)),[(x$10=conf.ButtonLabel,Tags$1.Tags().text(x$10))]);
   x$11=function(e)
   {
    var _this$1;
    return isReplyOpen[0]?hide():(isReplyOpen[0]=true,!isRendered[0]?(isRendered[0]=true,Lazy.Force(c$1).Render()):void 0,_this$1=Lazy.Force(c$1),_this$1.HtmlProvider.SetCss(_this$1.get_Body(),"display","block"),markupHelpButton.HtmlProvider.RemoveClass(markupHelpButton.get_Body(),"no-display"),e.set_Text(conf.ButtonHideLabel));
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$11($1,$2);
     };
    },a);
   }(x$8));
   return x$8;
  }
  function r$1()
  {
   var x$8;
   x$8=[conf.ReplyFormElement(hide)];
   return Tags$1.Tags().NewTag("div",x$8);
  }
  function c$3()
  {
   var x$8;
   return Operators$1.add((x$8=[Attr.Attr().NewAttr("style","display:none")],Tags$1.Tags().NewTag("div",x$8)),[markupHelpContainer,Lazy.Force(r)]);
  }
  function hide()
  {
   var _this$1;
   isReplyOpen[0]=false;
   _this$1=Lazy.Force(c$1);
   _this$1.HtmlProvider.SetCss(_this$1.get_Body(),"display","none");
   markupHelpButton.HtmlProvider.AddClass(markupHelpButton.get_Body(),"no-display");
   Lazy.Force(c).set_Text(conf.ButtonLabel);
  }
  isReplyOpen=[false];
  isMarkupHelpOpen=[false];
  markupHelpContainer=Operators$1.add((x=[Attr.Attr().NewAttr("style","display:none"),Attr.Attr().NewAttr("class","markup-help-container")],Tags$1.Tags().NewTag("div",x)),[Client$8.MarkupHelp()]);
  isRendered=[false];
  markupHelpButton=Operators$1.add((x$1=[Attr.Attr().NewAttr("class","no-display")],Tags$1.Tags().NewTag("span",x$1)),[(x$2=Operators$1.add((x$3=[Attr.Attr().NewAttr("class",conf.ButtonClass)],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("Markup help")]),(x$4=function(e)
  {
   isMarkupHelpOpen[0]?(isMarkupHelpOpen[0]=false,markupHelpContainer.HtmlProvider.SetCss(markupHelpContainer.get_Body(),"display","none"),e.set_Text("Markup help")):(isMarkupHelpOpen[0]=true,markupHelpContainer.HtmlProvider.SetCss(markupHelpContainer.get_Body(),"display","block"),e.set_Text("Hide markup help"));
   return null;
  },function(a)
  {
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return x$4($1,$2);
    };
   },a);
  }(x$2),x$2))]);
  c=Lazy.Create(c$2);
  r=Lazy.Create(r$1);
  c$1=Lazy.Create(c$3);
  contactButton=Lazy.Force(c);
  replyContainer=Lazy.Force(r);
  contentContainer=Lazy.Force(c$1);
  v=(_this=(selector="#"+conf.ReplyPanelId,Global.jQuery(selector)),_this.append.apply(_this,[contentContainer.Dom].concat([])));
  x$5=[(x$6=[(x$7=[Tags$1.Tags().NewTag("td",[contactButton]),Tags$1.Tags().NewTag("td",[markupHelpButton])],Tags$1.Tags().NewTag("tr",x$7))],Tags$1.Tags().NewTag("table",x$6))];
  return Tags$1.Tags().NewTag("div",x$5);
 };
 Client$8.MarkupHelp=function()
 {
  var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12,x$13,x$14,x$15,x$16,x$17,x$18,x$19,x$20,x$21,x$22,x$23,x$24,x$25,x$26,x$27,x$28,x$29,x$30,x$31,x$32,x$33,x$34,x$35,x$36,x$37,x$38,x$39,x$40,x$41,x$42,x$43,x$44,x$45,x$46,x$47,x$48,x$49,x$50,x$51,x$52,x$53,x$54,x$55,x$56,x$57,x$58,x$59,x$60,x$61,x$62,x$63,x$64,x$65,x$66,x$67,x$68,x$69,x$70,x$71,x$72,x$73,x$74,x$75;
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","forum-text")],Tags$1.Tags().NewTag("div",x)),[(x$1=[Tags$1.Tags().text("The FPish messages use an HTML-like markup language to include elements such as code snippets, images or links. These are the tags you can use:")],Tags$1.Tags().NewTag("p",x$1)),Tabs.New2(List.ofArray([["Simple formatting",(x$2=[(x$3=[(x$4=[Tags$1.Tags().text("<b>This syntax</b>")],Tags$1.Tags().NewTag("code",x$4)),Tags$1.Tags().text(" inserts "),(x$5=[Tags$1.Tags().text("bold text")],Tags$1.Tags().NewTag("b",x$5)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$3)),(x$6=[(x$7=[Tags$1.Tags().text("<i>This syntax</i>")],Tags$1.Tags().NewTag("code",x$7)),Tags$1.Tags().text(" inserts "),(x$8=[Tags$1.Tags().text("italic text")],Tags$1.Tags().NewTag("i",x$8)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$6)),(x$9=[(x$10=[Tags$1.Tags().text("<c>This syntax</c>")],Tags$1.Tags().NewTag("code",x$10)),Tags$1.Tags().text(" inserts "),(x$11=[Tags$1.Tags().text("inline code")],Tags$1.Tags().NewTag("code",x$11)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$9)),(x$12=[(x$13=[Tags$1.Tags().text("<s>This syntax</s>")],Tags$1.Tags().NewTag("code",x$13)),Tags$1.Tags().text(" inserts "),(x$14=[Tags$1.Tags().text("strikethrough text")],Tags$1.Tags().NewTag("del",x$14)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$12)),(x$15=[(x$16=[Tags$1.Tags().text("<h1>This syntax</h1>")],Tags$1.Tags().NewTag("code",x$16)),Tags$1.Tags().text(" inserts a header. Available header tags are "),(x$17=[Tags$1.Tags().text("<h1>")],Tags$1.Tags().NewTag("code",x$17)),Tags$1.Tags().text(", "),(x$18=[Tags$1.Tags().text("<h2>")],Tags$1.Tags().NewTag("code",x$18)),Tags$1.Tags().text(", "),(x$19=[Tags$1.Tags().text("<h3>")],Tags$1.Tags().NewTag("code",x$19)),Tags$1.Tags().text(" and "),(x$20=[Tags$1.Tags().text("<h4>")],Tags$1.Tags().NewTag("code",x$20)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$15))],Tags$1.Tags().NewTag("div",x$2))],["Code",(x$21=[(x$22=[(x$23=[Tags$1.Tags().text("<code>...</code>")],Tags$1.Tags().NewTag("code",x$23)),Tags$1.Tags().text(" inserts a code snippet, like this:")],Tags$1.Tags().NewTag("p",x$22)),Operators$1.add((x$24=[Attr.Attr().NewAttr("class","brush: text; toolbar: false;")],Tags$1.Tags().NewTag("pre",x$24)),[Tags$1.Tags().text("main = putStrLn \"This is a code snippet.\"")]),(x$25=[(x$26=[Tags$1.Tags().text("<code lang=\"fsharp\">...</code>")],Tags$1.Tags().NewTag("code",x$26)),Tags$1.Tags().text(" specifies the programming language, providing syntax higlighting:")],Tags$1.Tags().NewTag("p",x$25)),Operators$1.add((x$27=[Attr.Attr().NewAttr("class","brush: fsharp; toolbar: false;")],Tags$1.Tags().NewTag("pre",x$27)),[Tags$1.Tags().text("let main() =\n  printfn \"This is an F# code snippet.\"")])],Tags$1.Tags().NewTag("div",x$21))],["Links & Images",(x$28=[(x$29=[(x$30=[Tags$1.Tags().text("<a href=\"http://fpish.net\">this syntax</a>")],Tags$1.Tags().NewTag("code",x$30)),Tags$1.Tags().text(" inserts "),Operators$1.add((x$31=[Attr.Attr().NewAttr("href","http://fpish.net")],Tags$1.Tags().NewTag("a",x$31)),[Tags$1.Tags().text("a link to FPish.net")]),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$29)),(x$32=[(x$33=[Tags$1.Tags().text("<img src=\"http://fpish.net/images/fish.png\">")],Tags$1.Tags().NewTag("code",x$33)),Tags$1.Tags().text(" inserts an image.")],Tags$1.Tags().NewTag("p",x$32)),(x$34=[Attr.Attr().NewAttr("src","/images/fish.png")],Tags$1.Tags().NewTag("img",x$34))],Tags$1.Tags().NewTag("div",x$28))],["Lists",(x$35=[(x$36=[Tags$1.Tags().text("You can insert ordered and unordered listings. They are identical to their HTML counterparts.")],Tags$1.Tags().NewTag("p",x$36)),(x$37=[(x$38=[(x$39=[(x$40=[(x$41=[Tags$1.Tags().text("<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>")],Tags$1.Tags().NewTag("pre",x$41))],Tags$1.Tags().NewTag("td",x$40)),(x$42=[Tags$1.Tags().text("becomes")],Tags$1.Tags().NewTag("td",x$42)),(x$43=[(x$44=[(x$45=[Tags$1.Tags().text("Item 1")],Tags$1.Tags().NewTag("li",x$45)),(x$46=[Tags$1.Tags().text("Item 2")],Tags$1.Tags().NewTag("li",x$46))],Tags$1.Tags().NewTag("ul",x$44))],Tags$1.Tags().NewTag("td",x$43))],Tags$1.Tags().NewTag("tr",x$39)),(x$47=[(x$48=[(x$49=[Tags$1.Tags().text("<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ol>")],Tags$1.Tags().NewTag("pre",x$49))],Tags$1.Tags().NewTag("td",x$48)),(x$50=[Tags$1.Tags().text("becomes")],Tags$1.Tags().NewTag("td",x$50)),(x$51=[(x$52=[(x$53=[Tags$1.Tags().text("Item 1")],Tags$1.Tags().NewTag("li",x$53)),(x$54=[Tags$1.Tags().text("Item 2")],Tags$1.Tags().NewTag("li",x$54))],Tags$1.Tags().NewTag("ol",x$52))],Tags$1.Tags().NewTag("td",x$51))],Tags$1.Tags().NewTag("tr",x$47))],Tags$1.Tags().NewTag("tbody",x$38))],Tags$1.Tags().NewTag("table",x$37))],Tags$1.Tags().NewTag("div",x$35))],["Misc",(x$55=[(x$56=[Tags$1.Tags().text("You can quote another post using <quote>...</quote>.")],Tags$1.Tags().NewTag("p",x$56)),(x$57=[(x$58=[Tags$1.Tags().text("This is some nice code.")],Tags$1.Tags().NewTag("blockquote",x$58)),(x$59=[Tags$1.Tags().text("I quite agree with you.")],Tags$1.Tags().NewTag("span",x$59))],Tags$1.Tags().NewTag("blockquote",x$57)),(x$60=[Tags$1.Tags().text("You can add tables using HTML's <table>, <tr> and <td>.")],Tags$1.Tags().NewTag("p",x$60)),(x$61=[(x$62=[(x$63=[(x$64=[(x$65=[Tags$1.Tags().text("<table>\r\n  <tr>\r\n    <td>C1</td>\r\n    <td>C2</td>\r\n  </tr><tr>\r\n    <td>C3</td>\r\n    <td>C4</td>\r\n  </tr>\r\n</table>")],Tags$1.Tags().NewTag("pre",x$65))],Tags$1.Tags().NewTag("td",x$64)),(x$66=[Tags$1.Tags().text("becomes")],Tags$1.Tags().NewTag("td",x$66)),(x$67=[Operators$1.add((x$68=[Attr.Attr().NewAttr("class","comment-body")],Tags$1.Tags().NewTag("div",x$68)),[(x$69=[(x$70=[(x$71=[Tags$1.Tags().text("C1")],Tags$1.Tags().NewTag("td",x$71)),(x$72=[Tags$1.Tags().text("C2")],Tags$1.Tags().NewTag("td",x$72))],Tags$1.Tags().NewTag("tr",x$70)),(x$73=[(x$74=[Tags$1.Tags().text("C3")],Tags$1.Tags().NewTag("td",x$74)),(x$75=[Tags$1.Tags().text("C4")],Tags$1.Tags().NewTag("td",x$75))],Tags$1.Tags().NewTag("tr",x$73))],Tags$1.Tags().NewTag("table",x$69))])],Tags$1.Tags().NewTag("td",x$67))],Tags$1.Tags().NewTag("tr",x$63))],Tags$1.Tags().NewTag("tbody",x$62))],Tags$1.Tags().NewTag("table",x$61))],Tags$1.Tags().NewTag("div",x$55))]]))]);
 };
 Client$8.MarkupMessageForm=function(conf)
 {
  var lookupRecipients,subform,titleForm,f,a,f$1,msgForm,f$2,a$1,f$3,m,b,x,b$1,c;
  lookupRecipients=function(name)
  {
   return Concurrency.Delay(function()
   {
    var x$1;
    x$1=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetRecipientCompletion:-68313592",[name]);
    return Concurrency.Bind(x$1,function(a$2)
    {
     var m$1;
     return Concurrency.Return((m$1=function(a$3)
     {
      var urlName,pName,username;
      return a$3.$==1?(urlName=a$3.$0,{
       label:"Group: "+a$3.$1+" <"+urlName+">",
       value:"org:"+urlName
      }):a$3.$==2?(pName=a$3.$2,{
       label:"Product: "+a$3.$1+" / "+pName,
       value:"product:"+a$3.$0+"/"+pName
      }):(username=a$3.$0,{
       label:a$3.$1+" <"+username+">",
       value:username
      });
     },function(l)
     {
      return List.map(m$1,l);
     }(a$2)));
    });
   });
  };
  subform=(titleForm=conf.IncludeTitle?Enhance$3.WithLabelAbove((f=Enhance$3.WithValidationIcon((a=(f$1=Controls$2.Input(""),Enhance$3.WithCssClass("forum-reply-title",f$1)),Data.Validator().IsNotEmpty("You must enter a title",a))),Enhance$3.WithTextLabel("Title:",f))):Formlet$1.Return(""),(msgForm=Enhance$3.WithLabelAbove((f$2=Enhance$3.WithValidationIcon((a$1=(f$3=Controls$2.TextArea(conf.Text),Enhance$3.WithCssClass("forum-reply",f$3)),Data.Validator().IsNotEmpty("You must enter a message.",a$1))),Enhance$3.WithTextLabel("Message:",f$2))),Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried3(function(recipient,title,text)
  {
   return[recipient,title,text,0];
  })),(m=conf.FixedRecipient,m==null?(b=Formlet$1.Do(),b.Delay(function()
  {
   var f$4,a$2,f$5;
   return b.ReturnFrom(Enhance$3.WithFormContainer(Enhance$3.WithLabelAbove((f$4=(a$2=(f$5=Controls.Autocomplete("",lookupRecipients),Enhance$3.WithCssClass("forum-reply-recipient",f$5)),Data.Validator().IsNotEmpty("You must specify a recipient",a$2)),Enhance$3.WithTextLabel("To (username, user group or product name):",f$4)))));
  })):Formlet$1.Return(m.$0))),titleForm),msgForm)));
  return Enhance$3.WithFormContainer((x=(b$1=Formlet$1.Do(),b$1.Delay(function()
  {
   return b$1.Bind(subform,function(a$2)
   {
    var title,text,recipient,format;
    title=a$2[1];
    text=a$2[2];
    recipient=a$2[0];
    format=a$2[3];
    return b$1.Bind(Formlet$1.OfElement(function()
    {
     var x$1,x$2;
     x$1=[Operators$1.add((x$2=[Attr.Attr().NewAttr("class","preview-title")],Tags$1.Tags().NewTag("div",x$2)),[Tags$1.Tags().text("Message preview:")]),Operators$1.add(Client$8.Render(text,format),[Attr.Attr().NewAttr("class","forum-text preview")])];
     return Tags$1.Tags().NewTag("div",x$1);
    }),function()
    {
     return b$1.Return([recipient,title,text,format]);
    });
   });
  })),(c=conf.ButtonClass,Client$3.EnhanceWithSubmitButton(c,x))));
 };
 Client$8.ReplyForm=function(buttonClass,formType,newTopicUrl,previewClass,defaultTags,products,format)
 {
  var subform,form,f,b,form$1,b$1,form$2,quoteParentButton;
  subform=function(title,prefill)
  {
   var $1,prods,m,$2,f$1,$3,$4,$5,x,f$2,l,i;
   return Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(product,tags,title$1,text,isMinor)
   {
    return[product,tags,title$1,text,isMinor,format];
   },5)),(formType.$==0?true:formType.$==1?false:formType.$1==null?false:true)?Formlet$1.Return(null):products.$==0?Formlet$1.Return(null):(prods=new List.T({
    $:1,
    $0:["None",null],
    $1:(m=function(p)
    {
     return[p.Name,{
      $:1,
      $0:p.Id
     }];
    },function(l$1)
    {
     return List.map(m,l$1);
    }(products))
   }),Enhance$3.WithLabelAbove(FwLS.Select(0,"Associate with",prods,"forum-reply-products")))),(formType.$==0?false:formType.$==2?false:true)?(f$1=Enhance$3.WithLabelAbove(FwLS.InputWithValueAndValidator(Client$2.PrettyTags(defaultTags),"Tags (comma-separated)",function(a)
   {
    return Data.Validator().IsRegexMatch("[^ ,]+","You need to associate your question with at least one tag",a);
   },"forum-reply-tags")),Formlet$1.Map(Client$2.ParseTags,f$1)):Formlet$1.Return(List.T.Empty)),(formType.$==2?($4=formType.$1,$4!=null?$4.$==1:false)?false:true:formType.$==0?false:true)?Enhance$3.WithLabelAbove(FwLS.InputWithValue(title,"Title","Enter a title","forum-reply-title")):Formlet$1.Return("")),Enhance$3.WithLabelAbove(FwLS.TextAreaWithValue(prefill,"Message","Enter your question.","forum-reply"))),(formType.$==1?true:formType.$==2?false:true)?Formlet$1.Return(true):(x=(f$2=Controls$2.Checkbox(true),Enhance$3.WithTextLabel("Minor edit (don't bump the question)",f$2)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
    $:1
   },i.VerticalAlign,i.Placement)),Enhance$3.WithLabelConfiguration(l,x))));
  };
  form=(f=(b=Formlet$1.Do(),b.Delay(function()
  {
   var $1,toplevelId,commentId,f$1,i;
   return b.Bind((formType.$==1?true:formType.$==2?false:true)?Formlet$1.Return(["",""]):(toplevelId=formType.$1,(commentId=formType.$0,(f$1=function(a)
   {
    var err;
    return a.$==0?a.$0:(err=a.$0,(Global.alert(err),["",""]));
   },function(f$2)
   {
    return Formlet$1.Map(f$1,f$2);
   }(Formlet.LoadingFormlet(toplevelId==null?(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetMessageForEdit:1738835724",[commentId]):(i=toplevelId.$0,(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetCommentForEdit:23949294",[i,commentId]))))))),function(a)
   {
    return b.Bind(subform.apply(null,a),function(a$1)
    {
     var text,format$1;
     text=a$1[3];
     format$1=a$1[5];
     return b.Bind(Formlet$1.OfElement(function()
     {
      var x,x$1;
      x=[Operators$1.add((x$1=[Attr.Attr().NewAttr("class","preview-title")],Tags$1.Tags().NewTag("div",x$1)),[Tags$1.Tags().text("Message preview:")]),Operators$1.add(Client$8.Render(text,format$1),[Attr.Attr().NewAttr("class","forum-text comment-body preview "+previewClass)])];
      return Tags$1.Tags().NewTag("div",x);
     }),function()
     {
      return b.Return(a$1);
     });
    });
   });
  })),Client$3.EnhanceWithSubmitButton(buttonClass,f));
  form$1=Enhance$3.WithFormContainer((b$1=Formlet$1.Do(),b$1.Delay(function()
  {
   return b$1.Bind(form,function(a)
   {
    var title,text,tags,productId,isMinor,format$1,commentId,parentId;
    title=a[2];
    text=a[3];
    tags=a[1];
    productId=a[0];
    isMinor=a[4];
    format$1=a[5];
    return b$1.Bind(Formlet.LoadingFormletWithLogin(formType.$==1?(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.PostNewTopic:1544218058",[Runtime.DeleteEmptyFields({
     title:title,
     body:text,
     format:format$1,
     tags:Arrays.ofList(tags),
     productId:productId?productId.$0:void 0
    },["productId"])]):formType.$==2?(commentId=formType.$0,(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.Edit:-1190809365",[Runtime.DeleteEmptyFields({
     id:commentId,
     title:title,
     body:text,
     format:format$1,
     tags:Arrays.ofList(tags),
     productId:productId?productId.$0:void 0,
     isMinor:isMinor
    },["productId"])])):(parentId=formType.$0,(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.PostComment:-1665125129",[{
     parentId:parentId,
     body:text,
     format:format$1
    }]))),function(a$1)
    {
     var newCommentId,$1;
     return b$1.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(newCommentId=a$1.$0,((formType.$==2?true:formType.$==1?false:true)?Global.window.location.reload(true):Global.location.href=newTopicUrl+Global.String(newCommentId),FormletHelpers.SuccessF(formType.$==1?"Topic successfully created.":formType.$==2?"Message successfully edited.":"Comment successfully added."))));
    });
   });
  })));
  form$2=Tags$1.Tags().NewTag("div",[form$1]);
  quoteParentButton=function(rpcCall)
  {
   var x,x$1,_this,x$2;
   x=Operators$1.add((x$1=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()+" comment-button"))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Quote parent")]);
   x$2=function()
   {
    return Concurrency.Start(Concurrency.Delay(function()
    {
     var x$3;
     x$3=rpcCall();
     return Concurrency.Bind(x$3,function(a)
     {
      var text,e,element,v;
      return a.$==0?(text=a.$0,(e=(element=form$2.get_Body(),Global.jQuery(element)).find(".forum-reply textarea"),(v=e.val(Global.String(e.val())+("<quote>\n"+text+"\n</quote>")),Concurrency.Return(null)))):Concurrency.Return(null);
     });
    }),null);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x));
   return x;
  };
  return List.ofSeq(Seq.delay(function()
  {
   var $1,$2,$3,parentId,toplevelId;
   switch(formType.$==0?($2=[formType.$0,formType.$1],0):formType.$==2?($3=formType.$1,$3!=null?$3.$==1:false)?($2=formType.$0,1):2:2)
   {
    case 0:
     $1=(parentId=$2[0],(toplevelId=$2[1],[quoteParentButton(function()
     {
      var toplevelId$1;
      return(toplevelId!=null?toplevelId.$==1:false)?(toplevelId$1=toplevelId.$0,(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetCommentMarkup:-1755152968",[toplevelId$1,parentId])):(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetMessageMarkup:-240413350",[parentId]);
     })]));
     break;
    case 1:
     $1=[quoteParentButton(function()
     {
      return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.Topic+Rpc.GetParentMessageMarkup:-240413350",[$2]);
     })];
     break;
    case 2:
     $1=[];
     break;
   }
   return Seq.append($1,Seq.delay(function()
   {
    var x,_this;
    return Seq.append([(x=[(_this=Attr.Attr(),_this.NewAttr("id","markup-help-container-"+Global.String(formType.$==2?formType.$0:formType.$==1?0:formType.$0))),Attr.Attr().NewAttr("class","markup-help-container")],Tags$1.Tags().NewTag("div",x))],Seq.delay(function()
    {
     return[form$2];
    }));
   }));
  }));
 };
 Client$8.Render=function(text,format)
 {
  var x;
  return Unchecked.Equals(format,0)?Client$30.Translate(text):Unchecked.Equals(format,1)?(x=Client$31.ParseContent("text","",text),Tags$1.Tags().NewTag("div",x)):Operators.FailWith("Unknown format");
 };
 ScrapeButtonForUsername=Client$9.ScrapeButtonForUsername=Runtime.Class({
  get_Body:function()
  {
   var $this,msgPanel,x,x$1,x$2,x$3,x$4;
   $this=this;
   msgPanel=(x=[Attr.Attr().NewAttr("style","display: block;")],Tags$1.Tags().NewTag("div",x));
   return this.Username!=null?(x$1=[(x$2=Operators$1.add((x$3=[Attr.Attr().NewAttr("href","#")],Tags$1.Tags().NewTag("a",x$3)),[Tags$1.Tags().text("Scrape feed")]),(x$4=function()
   {
    var msg,x$5,b;
    msgPanel.HtmlProvider.Clear(msgPanel.get_Body());
    msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"success");
    msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"error");
    msg=(x$5=[(b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Blog+Rpc.ScrapeBlogByUsername:-1189094116",[$this.Username.$0])),function(a)
     {
      var count,o,a$1,msg$1;
      a.$==0?(count=a.$0,msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"error"),msgPanel.HtmlProvider.AddClass(msgPanel.get_Body(),"success"),o=msgPanel.HtmlProvider,a$1=msgPanel.get_Body(),o.AppendNode(a$1,msgPanel.HtmlProvider.CreateTextNode("Success, "+Global.String(count)+" new article(s) loaded"))):(msg$1=a.$0,msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"success"),msgPanel.HtmlProvider.AddClass(msgPanel.get_Body(),"error"),msgPanel.HtmlProvider.AppendNode(msgPanel.get_Body(),msgPanel.HtmlProvider.CreateTextNode(msg$1)));
      return b.Return();
     });
    }))],Tags$1.Tags().NewTag("div",x$5));
    msgPanel.HtmlProvider.Clear(msgPanel.get_Body());
    return msgPanel.AppendI(msg);
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   }(x$2),x$2)),msgPanel],Tags$1.Tags().NewTag("div",x$1)):Tags$1.Tags().NewTag("div",[]);
  }
 },Web.Control,ScrapeButtonForUsername);
 ShowHideArticleButton=Client$9.ShowHideArticleButton=Runtime.Class({
  get_Body:function()
  {
   var $this,p,text,x,x$1,_this,x$2;
   $this=this;
   p=this.IsVisible?["Hide","Show"]:["Show","Hide"];
   text=p[0];
   x=Operators$1.add((x$1=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text(text)]);
   x$2=function(e)
   {
    return $this.BlogArticleId!==""?Concurrency.Start(Concurrency.Delay(function()
    {
     var x$3;
     x$3=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Blog+Rpc.SetBlogArticleVisibility:721576222",[$this.BlogArticleId,!$this.IsVisible]);
     return Concurrency.Bind(x$3,function(a)
     {
      var p$1,textTo,span,x$4,x$5,v,_this$1,selector;
      return a.$==1?(e.HtmlProvider.Clear(e.get_Body()),e.AppendI(Tags$1.Tags().text("Can't set visibility")),Concurrency.Return(null)):(p$1=$this.IsVisible?["Hide","Show"]:["Show","Hide"],(textTo=p$1[1],($this.IsVisible=!$this.IsVisible,span=$this.IsVisible?Operators$1.add((x$4=[Attr.Attr().NewAttr("class","head-label price free")],Tags$1.Tags().NewTag("span",x$4)),[Tags$1.Tags().text("Visible")]):Operators$1.add((x$5=[Attr.Attr().NewAttr("class","head-label price not-published")],Tags$1.Tags().NewTag("span",x$5)),[Tags$1.Tags().text("Hidden")]),v=(_this$1=(selector="#"+$this.BlockId+" .head2 span",Global.jQuery(selector)).empty(),_this$1.append.apply(_this$1,[span.Dom].concat([]))),e.HtmlProvider.Clear(e.get_Body()),e.AppendI(Tags$1.Tags().text(textTo)),Concurrency.Return(null))));
     });
    }),null):null;
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x));
   return x;
  }
 },Web.Control,ShowHideArticleButton);
 EditTagsButton$1=Client$9.EditTagsButton=Runtime.Class({
  get_Body:function()
  {
   var $this,editPanel,x,msgPanel,x$1,buttonCssClass,v,_this,_this$1,selector,x$2,x$3;
   $this=this;
   editPanel=(x=[Attr.Attr().NewAttr("class","tag-edit")],Tags$1.Tags().NewTag("div",x));
   msgPanel=(x$1=[Attr.Attr().NewAttr("style","display: block;")],Tags$1.Tags().NewTag("div",x$1));
   buttonCssClass=Server.Small();
   v=(_this=(_this$1=(selector="#"+this.editTagsPanelId,Global.jQuery(selector)),_this$1.append.apply(_this$1,[editPanel.Dom].concat([]))),_this.append.apply(_this,[msgPanel.Dom].concat([])));
   x$2=Client$3.Button("Change tags","",buttonCssClass);
   x$3=function()
   {
    var f,b;
    editPanel.HtmlProvider.Clear(editPanel.get_Body());
    return editPanel.AppendI((f=function()
    {
    },function(f$1)
    {
     return Formlet$1.Run(f,f$1);
    }((b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Blog+Rpc.GetTagsStringForArticleById:1593147413",[$this.articleId])),function(a)
     {
      var tagsString,editBox,x$4,saveButton,x$5,x$6,cancelButton,x$7,x$8,element;
      tagsString=a.$==0?a.$0:"[Failed to retrieve tags]";
      editBox=(x$4=[Attr.Attr().NewAttr("type","text"),Attr.Attr().NewAttr("value",tagsString),Attr.Attr().NewAttr("class","tag-edit-box")],Tags$1.Tags().NewTag("input",x$4));
      saveButton=(x$5=Client$3.Button("Save","",buttonCssClass),(x$6=function()
      {
       var f$1,b$1;
       msgPanel.HtmlProvider.Clear(msgPanel.get_Body());
       return msgPanel.AppendI((f$1=function()
       {
       },function(f$2)
       {
        return Formlet$1.Run(f$1,f$2);
       }((b$1=Formlet$1.Do(),b$1.Delay(function()
       {
        return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Blog+Rpc.UpdateTagsForArticleById:-137970944",[$this.articleId,Client$2.ParseTags(editBox.get_Value())])),function(a$1)
        {
         var msg;
         a$1.$==0?(msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"error"),msgPanel.HtmlProvider.AddClass(msgPanel.get_Body(),"success"),msgPanel.AppendI(Tags$1.Tags().text("Updated, refresh page to reflect"))):(msg=a$1.$0,msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"success"),msgPanel.HtmlProvider.AddClass(msgPanel.get_Body(),"error"),msgPanel.AppendI(Tags$1.Tags().text("Error: "+msg)));
         return b$1.Return();
        });
       })))));
      },function(a$1)
      {
       EventsPervasives.Events().OnClick(function($1)
       {
        return function($2)
        {
         return x$6($1,$2);
        };
       },a$1);
      }(x$5),x$5));
      cancelButton=(x$7=Client$3.Button("Cancel","",buttonCssClass),(x$8=function()
      {
       msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"success");
       msgPanel.HtmlProvider.RemoveClass(msgPanel.get_Body(),"error");
       msgPanel.HtmlProvider.Clear(msgPanel.get_Body());
       return editPanel.HtmlProvider.Clear(editPanel.get_Body());
      },function(a$1)
      {
       EventsPervasives.Events().OnClick(function($1)
       {
        return function($2)
        {
         return x$8($1,$2);
        };
       },a$1);
      }(x$7),x$7));
      editPanel.AppendI(editBox);
      editPanel.AppendI(saveButton);
      editPanel.AppendI(cancelButton);
      (element=editBox.get_Body(),Global.jQuery(element)).focus();
      return b.Return();
     });
    })))));
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$3($1,$2);
     };
    },a);
   }(x$2));
   return x$2;
  }
 },Web.Control,EditTagsButton$1);
 EditOrCreateBlogEntryControl=Client$9.EditOrCreateBlogEntryControl=Runtime.Class({
  get_Creating:function()
  {
   return this.Dao==null;
  },
  get_Body:function()
  {
   var $this,daoElt,b;
   $this=this;
   daoElt=function(f)
   {
    var m;
    m=$this.Dao;
    return(m!=null?m.$==1:false)?f(m.$0):"";
   };
   b=Formlet$1.Do();
   return b.Delay(function()
   {
    var tagsString,$1,$2,$3,bodyForm,m,$4,publishForm,b$1,x,f,f$1,f$2,c;
    function form(initText,initFormat)
    {
     var b$2;
     b$2=Formlet$1.Do();
     return b$2.Delay(function()
     {
      var f$3,f$4;
      return b$2.Bind(Enhance$3.WithLabelAbove((f$3=(f$4=Controls$2.TextArea(initText),Enhance$3.WithTextLabel("Content",f$4)),Enhance$3.WithCssClass("blog-edit-body",f$3))),function(a)
      {
       return b$2.Bind(Formlet$1.OfElement(function()
       {
        var x$1,x$2;
        x$1=[Operators$1.add((x$2=[Attr.Attr().NewAttr("class","preview-title")],Tags$1.Tags().NewTag("div",x$2)),[Tags$1.Tags().text("Article preview:")]),Operators$1.add(Client$8.Render(a,initFormat),[Attr.Attr().NewAttr("class","forum-text comment-body preview")])];
        return Tags$1.Tags().NewTag("div",x$1);
       }),function()
       {
        return b$2.Return({
         $:1,
         $0:[a,initFormat]
        });
       });
      });
     });
    }
    return b.Bind((tagsString=($1=$this.Dao,($2=$this.DefaultTags,(($1!=null?$1.$==1:false)?($3=$1.$0.Tags,false):$2.$==0?true:($3=$2,false))?"":Strings.concat(", ",$3))),(bodyForm=(m=$this.Dao,m==null?form("",0):($4=m.$0.Body,$4!=null?$4.$==1:false)?form.apply(null,m.$0.Body.$0):Formlet$1.Return(null)),(publishForm=(b$1=Formlet$1.Do(),b$1.Delay(function()
    {
     var x$1,f$3,l,i;
     return b$1.Bind((x$1=(f$3=Controls$2.Checkbox($this.Dao!=null?$this.Dao.$0.Publish!=null:false),Enhance$3.WithTextLabel("Publish this article",f$3)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
      $:1
     })),Enhance$3.WithLabelConfiguration(l,x$1))),function(a)
     {
      var p,m$1,b$2,timeDao,dateDao,date,date$1,defaultMinute,defaultHour,defaultDate,f$4;
      return a?b$1.ReturnFrom((p=(m$1=(b$2=function(dao)
      {
       return dao.Publish;
      },function(o)
      {
       return o==null?null:b$2(o.$0);
      }($this.Dao)),(m$1!=null?m$1.$==1:false)?(timeDao=m$1.$0[1],(dateDao=m$1.$0[0],(date=DateDAO.ToEcma(dateDao,timeDao),[{
       $:1,
       $0:date
      },date.getHours(),date.getMinutes()]))):(date$1=new Global.Date(),[{
       $:1,
       $0:date$1
      },date$1.getHours(),date$1.getMinutes()])),(defaultMinute=p[2],(defaultHour=p[1],(defaultDate=p[0],($this.Dao!=null?$this.Dao.$0.Body==null:false)?Formlet$1.Return({
       $:1,
       $0:[DateDAO.get_Default(),TimeDAO.get_Default()]
      }):Data.$(Data.$(Formlet$1.Return(function(date$2)
      {
       return function(t)
       {
        var hours,minutes,localDate,a$1,b$3,c$1;
        hours=t[0];
        minutes=t[1];
        localDate=(a$1=date$2.getFullYear(),(b$3=date$2.getMonth(),(c$1=date$2.getDate(),new Global.Date(a$1,b$3,c$1,hours,minutes))));
        return{
         $:1,
         $0:DateDAO.AndTimeOfEcma$1(localDate)
        };
       };
      }),Enhance$3.WithLabelAbove((f$4=Controls$4.Datepicker(defaultDate),Enhance$3.WithTextLabel("Publish date:",f$4)))),Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(hour)
      {
       return function(minute)
       {
        return[hour<<0,minute<<0];
       };
      }),FwLS.InputOptionalWithValue(Global.String(defaultHour),"Publish time:","blog-edit-hour")),FwLS.InputOptionalWithValue(Global.String(defaultMinute),"h","blog-edit-minute"))))))))):b$1.Return(null);
     });
    })),Enhance$3.WithFormContainer((x=Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(tags,title,_abstract,body,publish)
    {
     return{
      Id:daoElt(function(dao)
      {
       return dao.Id;
      }),
      Title:title,
      Description:_abstract,
      Body:body,
      Tags:tags,
      Publish:publish
     };
    },5)),(f=Enhance$3.WithLabelAbove(FwLS.InputOptionalWithValue(tagsString,"Tags (comma-separated)","blog-edit-tags")),Formlet$1.Map(Client$2.ParseTags,f))),Enhance$3.WithLabelAbove(FwLS.InputWithValue(daoElt(function(dao)
    {
     return dao.Title;
    }),"Title","Enter a title","blog-edit-title"))),Enhance$3.WithLabelAbove((f$1=(f$2=Controls$2.TextArea(daoElt(function(dao)
    {
     return dao.Description;
    })),Enhance$3.WithTextLabel("Abstract",f$2)),Enhance$3.WithCssClass("blog-edit-abstract",f$1)))),bodyForm),publishForm),(c=Server.Large(),Client$3.EnhanceWithCustomSubmitButton(c,"Save",x))))))),function(a)
    {
     var rpc;
     return b.Bind((rpc=$this.get_Creating()?function(d)
     {
      return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Blog+Rpc.CreateBlogEntry:200614953",[d]);
     }:function(d)
     {
      return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Blog+Rpc.EditBlogEntry:200614953",[d]);
     },Formlet.LoadingFormletWithLogin(rpc(a))),function(a$1)
     {
      var articleId,x$1,x$2;
      return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(articleId=a$1.$0,($this.Dao={
       $:1,
       $0:{
        Id:articleId,
        Title:a.Title,
        Description:a.Description,
        Body:a.Body,
        Tags:a.Tags,
        Publish:a.Publish
       }
      },FormletHelpers.SuccessFHtml(List.ofArray([Tags$1.Tags().text("Blog entry successfully updated. "),Operators$1.add((x$1=[(x$2=$this.SuccessLink+articleId,Attr.Attr().NewAttr("href",x$2))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Click here")]),Tags$1.Tags().text(" to view it.")])))));
     });
    });
   });
  }
 },Web.Control,EditOrCreateBlogEntryControl);
 BreakdownMonthTitle=Client$9.BreakdownMonthTitle=Runtime.Class({
  get_Body:function()
  {
   var list,selector,x,x$1,x$2,x$3,x$4,x$5,x$6;
   list=(selector="#"+this.ListId,Global.jQuery(selector));
   this.StartFolded?list.hide():void 0;
   x=Operators$1.add((x$1=[Attr.Attr().NewAttr("style","cursor: pointer;")],Tags$1.Tags().NewTag("span",x$1)),[(x$2=[Attr.Attr().NewAttr("src","/images/fold-arrow-closed.png"),Attr.Attr().NewAttr("class","blog-breakdown-arrow"),Attr.Attr().NewAttr("style",this.StartFolded?"":"display:none;")],Tags$1.Tags().NewTag("img",x$2)),(x$3=[Attr.Attr().NewAttr("src","/images/fold-arrow-open.png"),Attr.Attr().NewAttr("class","blog-breakdown-arrow"),Attr.Attr().NewAttr("style",this.StartFolded?"display:none;":"")],Tags$1.Tags().NewTag("img",x$3)),(x$4=[(x$5=this.Title,Tags$1.Tags().text(x$5))],Tags$1.Tags().NewTag("span",x$4))]);
   x$6=function(e)
   {
    var element;
    list.slideToggle("fast");
    return(element=e.get_Body(),Global.jQuery(element)).find("img").toggle();
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$6($1,$2);
     };
    },a);
   }(x));
   return x;
  }
 },Web.Control,BreakdownMonthTitle);
 NewPrivateMessageControl=Client$10.NewPrivateMessageControl=Runtime.Class({
  get_Body:function()
  {
   var $this,R;
   $this=this;
   return Client$8.ContactButton((R=this.conf.ReplyPanelId,ContactButtonConfiguration.New(function(hideForm)
   {
    var x;
    x=[Client$10.NewPrivateMessageForm($this.conf.MessageUrl,hideForm)];
    return Tags$1.Tags().NewTag("div",x);
   },ContactButtonConfiguration.get_Default().ButtonClass,R,"Compose message","Hide message box")));
  }
 },Web.Control,NewPrivateMessageControl);
 InboxControl=Client$10.InboxControl=Runtime.Class({
  get_Body:function()
  {
   var x,m,byBox,m$1,p,byBoxAndType,m$2,p$1,_this,a,$1,g,n,gridDiv,newMessageDiv,x$1,f,$this,mainDiv,show,_messages,typeButtons,boxButtons,typeCounts,filterTypeButton,filterBoxButton;
   function g$1()
   {
    var pagerContainer,x$2,x$3,x$4,f$1;
    pagerContainer=Tags$1.Tags().NewTag("div",[]);
    x$2=[(x$3=(x$4=[Attr.Attr().NewAttr("class","inbox-grid")],Tags$1.Tags().NewTag("div",x$4)),(f$1=function(div)
    {
     var checkboxSelector,columns,r,r$1,r$2,dataview,grid,container,d,r$3,a$1,r$4,pager,c,element,r$5,_this$1,_this$2,_this$3,_this$4,typeFilter,boxFilter,_this$5,a$2;
     checkboxSelector=new Global.Slick.CheckboxSelectColumn();
     columns=[checkboxSelector.getColumnDefinition(),(r={
      id:"name",
      name:"Name"
     },r.cssClass="inbox-cell-from",r.headerCssClass="inbox-header-from",r.maxWidth=120,r.width=120,r.formatter=function(a$3,a$4,a$5,a$6,msg)
     {
      return msg.name;
     },r),(r$1={
      id:"message",
      name:"Message"
     },r$1.cssClass="inbox-cell-message",r$1.headerCssClass="inbox-header-message",r$1.formatter=function(a$3,a$4,a$5,a$6,msg)
     {
      return msg.message;
     },r$1),(r$2={
      id:"date",
      name:"Date"
     },r$2.cssClass="inbox-cell-date",r$2.headerCssClass="inbox-header-date",r$2.maxWidth=120,r$2.width=120,r$2.formatter=function(a$3,a$4,a$5,a$6,msg)
     {
      return DateDAO.ToEcma(msg.date[0],msg.date[1]).toDateString();
     },r$2)];
     dataview=new Global.Slick.Data.DataView();
     grid=(container=div.Dom,(d=(r$3={},r$3.forceFitColumns=true,r$3.enableColumnReorder=false,r$3.enableAddRow=false,r$3.leaveSpaceForNewRows=false,r$3.autoHeight=true,r$3.rowHeight=42,r$3.editable=false,r$3.autoEdit=false,r$3),new Global.Slick.Grid(container,dataview,columns,d)));
     grid.setSelectionModel((a$1=(r$4={},r$4.selectActiveRow=false,r$4),new Global.Slick.RowSelectionModel(a$1)));
     grid.registerPlugin(checkboxSelector);
     pager=(c=(element=pagerContainer.get_Body(),Global.jQuery(element)),new Global.Slick.Controls.Pager(dataview,grid,c));
     dataview.setPagingOptions((r$5={},r$5.pageSize=20,r$5));
     _this$1=grid.onClick;
     _this$1.subscribe(function(event,coords)
     {
      var paging,i,id,url;
      if(event.target.nodeName.toLowerCase()!=="input")
       {
        paging=dataview.getPagingInfo();
        i=paging.pageNum*paging.pageSize+coords.row;
        id=grid.getDataItem(i).id;
        url=$this.viewMessageUrl+Global.String(id);
        Global.location.href=url;
       }
     });
     _this$2=dataview.onRowCountChanged;
     _this$2.subscribe(function()
     {
      grid.updateRowCount();
      grid.render();
     });
     _this$3=dataview.onRowsChanged;
     _this$3.subscribe(function(e,args)
     {
      grid.invalidateRows(args.rows);
      grid.render();
     });
     _this$4=dataview.onPagingInfoChanged;
     _this$4.subscribe(function(e,pagingInfo)
     {
      var isLastPage,enableAddRow,r$6;
      isLastPage=pagingInfo.pageNum===pagingInfo.totalPages-1;
      enableAddRow=isLastPage?true:pagingInfo.pageSize===0;
      !Unchecked.Equals(grid.getOptions().enableAddRow,enableAddRow)?grid.setOptions((r$6={},r$6.enableAddRow=enableAddRow,r$6)):void 0;
     });
     typeFilter=[null];
     boxFilter=[1];
     typeButtons.click(function()
     {
      typeFilter[0]=filterTypeButton(this);
      dataview.refresh();
      typeButtons.removeClass("blue").addClass("white");
      return Global.jQuery(this).removeClass("white").addClass("blue");
     });
     boxButtons.click(function()
     {
      boxFilter[0]=filterBoxButton(this);
      dataview.refresh();
      Unchecked.Equals(boxFilter[0],4)?Global.jQuery("#action-archive").hide():Global.jQuery("#action-archive").show();
      boxButtons.removeClass("blue").addClass("white");
      return Global.jQuery(this).removeClass("white").addClass("blue");
     });
     dataview.setFilter(function(msg)
     {
      return(typeFilter[0]==null?true:Unchecked.Equals(typeFilter[0].$0,msg.type))?!Unchecked.Equals(boxFilter[0]&msg.box,0):false;
     });
     Global.jQuery("#all-messages-button").click();
     Global.jQuery("#inbox-button").click();
     _this$5=Global.jQuery("#action-archive");
     a$2=function()
     {
      var msgs,m$3,msgIds,m$4;
      msgs=(m$3=function(a$3)
      {
       return grid.getDataItem(a$3);
      },function(a$3)
      {
       return Arrays.map(m$3,a$3);
      }(grid.getSelectedRows()));
      return Arrays.length(msgs)!==0?(msgIds=(m$4=function(msg)
      {
       return msg.id;
      },function(a$3)
      {
       return Arrays.map(m$4,a$3);
      }(msgs)),Concurrency.Start(Concurrency.Delay(function()
      {
       var x$5;
       x$5=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.PrivateMessage+Rpc.ArchiveMessages:1178415855",[msgIds]);
       return Concurrency.Bind(x$5,function(a$3)
       {
        var a$4,errorMsg;
        return a$3.$==0?(a$4=function(msg)
        {
         msg.box=4;
        },function(s)
        {
         Seq.iter(a$4,s);
        }(msgs),dataview.refresh(),grid.setSelectedRows([]),Global.jQuery("#actions-list").hide(),Concurrency.Return(null)):(errorMsg=a$3.$0,(Global.jQuery("#action-error").text(errorMsg).show().fadeOut(5000),Concurrency.Return(null)));
       });
      }),null)):null;
     };
     _this$5.click(function($2)
     {
      return a$2(this,$2);
     });
     dataview.beginUpdate();
     dataview.setItems(_messages);
     dataview.sort(function(msg1,msg2)
     {
      return Operators.Compare(msg1.date,msg2.date);
     },false);
     dataview.endUpdate();
     dataview.syncGridSelection(grid,true);
    },function(w)
    {
     Operators$1.OnAfterRender(f$1,w);
    }(x$3),x$3)),pagerContainer];
    return Tags$1.Tags().NewTag("div",x$2);
   }
   function n$1()
   {
    var x$2;
    x$2=[Client$10.NewPrivateMessageForm($this.viewMessageUrl,showMessages)];
    return Tags$1.Tags().NewTag("div",x$2);
   }
   function showNewMessage()
   {
    var _this$1,a$1;
    show(Lazy.Force(n));
    _this$1=Global.jQuery("#new-message-button").text("Back to messages").unbind("click");
    a$1=function()
    {
     return showMessages();
    };
    _this$1.click(function($2)
    {
     return a$1(this,$2);
    });
   }
   function showMessages()
   {
    var _this$1,a$1;
    show(Lazy.Force(g));
    _this$1=Global.jQuery("#new-message-button").text("New message").unbind("click");
    a$1=function()
    {
     return showNewMessage();
    };
    _this$1.click(function($2)
    {
     return a$1(this,$2);
    });
   }
   $this=this;
   mainDiv=(x=[Attr.Attr().NewAttr("class","inbox-main")],Tags$1.Tags().NewTag("div",x));
   show=function(sub)
   {
    var element,element$1;
    (element=mainDiv.get_Body(),Global.jQuery(element)).children().hide();
    (element$1=sub.get_Body(),Global.jQuery(element$1)).show();
   };
   _messages=(m=function(msg)
   {
    var message,nomarkup,nomarkup$1,title,x$2,name,i,p$2;
    message=(nomarkup=Common.RemoveMarkup(msg["Topic'"].Body),nomarkup$1=nomarkup.length>200?Strings.Substring(nomarkup,0,200)+"...":nomarkup,(title=(msg["Topic'"].NumComments===0?"":"("+Global.String(msg["Topic'"].NumComments)+") ")+msg["Topic'"].Title,x$2=List.ofSeq(Seq.delay(function()
    {
     var x$3;
     return Seq.append(msg.IsNew?[Operators$1.add((x$3=[Attr.Attr().NewAttr("class","new-messages-icon")],Tags$1.Tags().NewTag("span",x$3)),[Tags$1.Tags().text("New")])]:[],Seq.delay(function()
     {
      var x$4;
      return Seq.append([Operators$1.add((x$4=[Attr.Attr().NewAttr("class","inbox-cell-title")],Tags$1.Tags().NewTag("span",x$4)),[Tags$1.Tags().text(title)])],Seq.delay(function()
      {
       return Seq.append([Tags$1.Tags().NewTag("br",[])],Seq.delay(function()
       {
        var x$5;
        return[Operators$1.add((x$5=[Attr.Attr().NewAttr("class","inbox-cell-body")],Tags$1.Tags().NewTag("span",x$5)),[Tags$1.Tags().text(nomarkup$1)])];
       }));
      }));
     }));
    })),Tags$1.Tags().NewTag("span",x$2)).get_Body().outerHTML);
    name=msg.RecipientUsername===$this.username?msg["Topic'"].UserFullName:msg.RecipientFullName;
    i=msg["Topic'"].Id;
    return{
     id:i,
     name:name,
     message:message,
     date:msg["Topic'"].CreateDate,
     type:msg.Type,
     box:msg.IsArchived?4:(p$2=Seq.fold(function($2,$3)
     {
      var a$1;
      return((a$1=function(me,others)
      {
       return function(c)
       {
        return[me?true:c.Username===$this.username,others?true:c.Username!==$this.username];
       };
      },(Runtime.Curried3(Comment.Fold))(function($4)
      {
       return a$1($4[0],$4[1]);
      }))($2))($3);
     },[false,false],msg["Topic'"].Responses),((p$2[1]?true:msg["Topic'"].Username!==$this.username)?1:0)|((p$2[0]?true:msg["Topic'"].Username===$this.username)?2:0))
    };
   },function(a$1)
   {
    return Arrays.map(m,a$1);
   }(this.messages));
   typeButtons=Global.jQuery(".inbox-side-menu").find("button");
   boxButtons=Global.jQuery(".inbox-top-menu .boxes").find("button");
   typeCounts=(byBox=(m$1=function(b,ms)
   {
    return[null,b,Seq.length(ms)];
   },function(s)
   {
    return Seq.map(function($2)
    {
     return m$1($2[0],$2[1]);
    },s);
   }((p=function(m$3)
   {
    return m$3.box;
   },function(s)
   {
    return Seq.groupBy(p,s);
   }(_messages)))),byBoxAndType=(m$2=function(a$1,ms)
   {
    var t,b;
    t=a$1[1];
    b=a$1[0];
    return[{
     $:1,
     $0:t
    },b,Seq.length(ms)];
   },function(s)
   {
    return Seq.map(function($2)
    {
     return m$2($2[0],$2[1]);
    },s);
   }((p$1=function(m$3)
   {
    return[m$3.box,m$3.type];
   },function(s)
   {
    return Seq.groupBy(p$1,s);
   }(_messages)))),Seq.append(byBox,byBoxAndType));
   filterTypeButton=function(elt)
   {
    var m$3;
    m$3=elt.id;
    return m$3==="private-messages-button"?{
     $:1,
     $0:{
      $:0
     }
    }:m$3==="group-messages-button"?{
     $:1,
     $0:{
      $:1
     }
    }:m$3==="ticket-messages-button"?{
     $:1,
     $0:{
      $:2
     }
    }:m$3==="job-messages-button"?{
     $:1,
     $0:{
      $:3
     }
    }:m$3==="talk-messages-button"?{
     $:1,
     $0:{
      $:4
     }
    }:null;
   };
   filterBoxButton=function(elt)
   {
    var m$3;
    m$3=elt.id;
    return m$3==="sent-button"?2:m$3==="archive-button"?4:1;
   };
   boxButtons.click(function()
   {
    var b;
    b=filterBoxButton(this);
    return typeButtons.each(function(a$1,typeButton)
    {
     var t,count,o,m$3,p$2;
     t=filterTypeButton(typeButton);
     count=(o=(m$3=function(a$2,a$3,count$1)
     {
      return Global.String(count$1);
     },function(o$1)
     {
      return o$1==null?null:{
       $:1,
       $0:m$3.apply(null,o$1.$0)
      };
     }((p$2=function(_t,_b)
     {
      return Unchecked.Equals(_t,t)?Unchecked.Equals(_b,b):false;
     },function(s)
     {
      return Seq.tryFind(function($2)
      {
       return p$2($2[0],$2[1],$2[2]);
      },s);
     }(typeCounts)))),Option["default'"]("&nbsp;",o));
     return Global.jQuery(typeButton).find(".count").html(count);
    });
   });
   _this=Global.jQuery("#actions-button");
   a=function()
   {
    return Global.jQuery("#actions-list").toggle();
   };
   _this.click(function($2)
   {
    return a(this,$2);
   });
   g=Lazy.Create(g$1);
   n=Lazy.Create(n$1);
   gridDiv=Lazy.Force(g);
   newMessageDiv=Lazy.Force(n);
   x$1=Operators$1.add(mainDiv,[gridDiv,newMessageDiv]);
   f=function()
   {
    showMessages();
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x$1));
   return x$1;
  }
 },Web.Control,InboxControl);
 Client$10.NewPrivateMessageForm=function(messageUrl,hideForm)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Formlet$1.WithNotificationChannel(Client$8.MarkupMessageForm({
    FixedRecipient:null,
    ButtonClass:Server.Small(),
    IncludeTitle:true,
    Text:""
   })),function(a)
   {
    var title,reset,recipient,message,format;
    title=a[0][1];
    reset=a[1];
    recipient=a[0][0];
    message=a[0][2];
    format=a[0][3];
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.PrivateMessage+Rpc.PostMessage:-1447099212",[{
     Recipients:List.ofArray([recipient]),
     Title:title,
     Message:message,
     Format:format,
     Type:{
      $:0
     }
    }])),function(a$1)
    {
     var ids,$1;
     return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(ids=a$1.$0,(reset(void 0),hideForm(),(ids.$==1?ids.$1.$==0?($1=ids.$0,true):false:false)?Global.location.href=messageUrl+Global.String($1):Global.window.location.reload(true),FormletHelpers.SuccessF("Message successfully sent."))));
    });
   });
  });
 };
 ActivateCourseControl=Client$11.ActivateCourseControl=Runtime.Class({
  get_Body:function()
  {
   var $this,p,text,x,x$1,_this,x$2;
   $this=this;
   p=this.Active?["Disable","Publish"]:["Publish","Disable"];
   text=p[0];
   x=Operators$1.add((x$1=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text(text)]);
   x$2=function(e)
   {
    return $this.CourseId>0?Concurrency.Start(Concurrency.Delay(function()
    {
     var x$3;
     x$3=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Courses+Rpc.SetCourseActivation:546460471",[$this.CourseId,$this.Active]);
     return Concurrency.Bind(x$3,function(a)
     {
      var p$1,textTo,span,x$4,x$5,v,selector,v$1,_this$1,selector$1;
      return a.$==1?(e.HtmlProvider.Clear(e.get_Body()),e.AppendI(Tags$1.Tags().text("Can't Disable")),Concurrency.Return(null)):($this.Active=!$this.Active,p$1=$this.Active?["Publish","Disable"]:["Disable","Publish"],textTo=p$1[1],span=$this.Active?Operators$1.add((x$4=[Attr.Attr().NewAttr("class","head-label active price free")],Tags$1.Tags().NewTag("span",x$4)),[Tags$1.Tags().text("Active")]):Operators$1.add((x$5=[Attr.Attr().NewAttr("class","head-label active price not-published")],Tags$1.Tags().NewTag("span",x$5)),[Tags$1.Tags().text("Inactive")]),v=(selector="#"+$this.ContainerId+" .head2 span span.active",Global.jQuery(selector)).remove(),v$1=(_this$1=(selector$1="#"+$this.ContainerId+" .head2 span",Global.jQuery(selector$1)),_this$1.append.apply(_this$1,[span.Dom].concat([]))),e.HtmlProvider.Clear(e.get_Body()),e.AppendI(Tags$1.Tags().text(textTo)),Concurrency.Return(null));
     });
    }),null):null;
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x));
   return x;
  }
 },Web.Control,ActivateCourseControl);
 AcceptRejectProposalButtonsControl=Client$11.AcceptRejectProposalButtonsControl=Runtime.Class({
  Form:function(getData,realForm)
  {
   var $this,x,b;
   $this=this;
   x=[Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Formlet.LoadingFormletWithLogin(getData($this.CourseId)),function(a)
    {
     return b.ReturnFrom(a.$==0?realForm(a.$0):FormletHelpers.ErrorF(a.$0));
    });
   })))];
   return Tags$1.Tags().NewTag("div",x);
  },
  get_CssClass:function()
  {
   return Server.Small();
  },
  get_Body:function()
  {
   var $this,acceptButton,x,rejectButton,x$1,formContainer,selector,showForm,hideAcceptForm,hideRejectForm,showAcceptForm,showRejectForm,x$2,x$3,x$4;
   $this=this;
   acceptButton=Operators$1.add((x=[Attr.Attr().NewAttr("class",this.get_CssClass())],Tags$1.Tags().NewTag("a",x)),[Tags$1.Tags().text("Accept proposal...")]);
   rejectButton=Operators$1.add((x$1=[Attr.Attr().NewAttr("class",this.get_CssClass())],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Reject proposal...")]);
   formContainer=(selector="#"+this.ContainerId+" .proposal-accept-reject-container > div",Global.jQuery(selector));
   showForm=function(formFun)
   {
    var _this;
    _this=formContainer.empty();
    _this.append.apply(_this,[formFun.Dom].concat([]));
   };
   hideAcceptForm=function()
   {
    var o,a;
    $this.IsAcceptFormVisible=false;
    o=acceptButton.HtmlProvider;
    a=acceptButton.get_Body();
    o.SetAttribute(a,"class",Server.Small());
    formContainer.empty();
   };
   hideRejectForm=function()
   {
    var o,a;
    $this.IsRejectFormVisible=false;
    o=rejectButton.HtmlProvider;
    a=rejectButton.get_Body();
    o.SetAttribute(a,"class",Server.Small());
    formContainer.empty();
   };
   showAcceptForm=function()
   {
    var o,a;
    $this.IsAcceptFormVisible=true;
    o=acceptButton.HtmlProvider;
    a=acceptButton.get_Body();
    o.SetAttribute(a,"class",Server.Highlight());
    showForm($this.Form(function(c)
    {
     return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Courses+Rpc.GetDefaultAcceptText:-1499827470",[c]);
    },function(initText)
    {
     var b;
     b=Formlet$1.Do();
     return b.Delay(function()
     {
      var x$5,x$6,l,i,c;
      return b.Bind((x$5=Data.$(Data.$(Formlet$1.Return(function(t)
      {
       return function(i$1)
       {
        return[t,i$1];
       };
      }),Enhance$3.WithLabelAbove(FwL.TextAreaWithValueOptional(initText,"Acceptance message to the author:"))),(x$6=Controls$2.RadioButtonGroup({
       $:1,
       $0:0
      },List.ofArray([["Accept for one session",true],["Accept as a course (possibly recurring event)",false]])),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
       $:1
      })),Enhance$3.WithLabelConfiguration(l,x$6)))),(c=$this.get_CssClass(),Client$3.EnhanceWithCustomSubmitAndResetButtons(c,"Confirm","Reset message",x$5))),function(a$1)
      {
       var text,isOneOff;
       text=a$1[0];
       isOneOff=a$1[1];
       return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Courses+Rpc.AcceptProposal:1302984775",[$this.CourseId,text,isOneOff])),function(a$2)
       {
        var x$7,x$8,x$9;
        return b.ReturnFrom(a$2.$==0?FormletHelpers.SuccessFHtml(List.ofArray([(x$7=[Tags$1.Tags().text("Acceptance message sent.")],Tags$1.Tags().NewTag("p",x$7)),(x$8=[Tags$1.Tags().text("To schedule the talk, "),Operators$1.add((x$9=[Attr.Attr().NewAttr("href",$this.CreateEventUrl)],Tags$1.Tags().NewTag("a",x$9)),[Tags$1.Tags().text("click here")]),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$8))])):FormletHelpers.ErrorF(a$2.$0));
       });
      });
     });
    }));
   };
   showRejectForm=function()
   {
    var o,a;
    $this.IsRejectFormVisible=true;
    o=rejectButton.HtmlProvider;
    a=rejectButton.get_Body();
    o.SetAttribute(a,"class",Server.Highlight());
    showForm($this.Form(function(c)
    {
     return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Courses+Rpc.GetDefaultRejectText:-1499827470",[c]);
    },function(initText)
    {
     var b;
     b=Formlet$1.Do();
     return b.Delay(function()
     {
      var x$5,c;
      return b.Bind((x$5=Enhance$3.WithLabelAbove(FwL.TextAreaWithValueOptional(initText,"Rejection message to the author:")),(c=$this.get_CssClass(),Client$3.EnhanceWithCustomSubmitAndResetButtons(c,"Confirm","Reset message",x$5))),function(a$1)
      {
       return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Courses+Rpc.RejectProposal:-1405770556",[$this.CourseId,a$1])),function(a$2)
       {
        var x$6;
        return b.ReturnFrom(a$2.$==0?FormletHelpers.SuccessFHtml(List.ofArray([(x$6=[Tags$1.Tags().text("Rejection message sent.")],Tags$1.Tags().NewTag("p",x$6))])):FormletHelpers.ErrorF(a$2.$0));
       });
      });
     });
    }));
   };
   x$2=[((x$3=function()
   {
    hideRejectForm();
    return $this.IsAcceptFormVisible?hideAcceptForm():showAcceptForm();
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$3($1,$2);
     };
    },a);
   })(acceptButton),acceptButton),((x$4=function()
   {
    hideAcceptForm();
    return $this.IsRejectFormVisible?hideRejectForm():showRejectForm();
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$4($1,$2);
     };
    },a);
   })(rejectButton),rejectButton)];
   return Tags$1.Tags().NewTag("span",x$2);
  }
 },Web.Control,AcceptRejectProposalButtonsControl);
 Default.ExtraInfoFormForUsername=function(username)
 {
  return Forms.ExtraInfoFormForUsername(username,ExtraInformationDAO.Default(username));
 };
 Default.PaymentProcessingForm=function()
 {
  return Forms.PaymentProcessingForm({
   $:0,
   $0:PricingDAO.get_Default()
  });
 };
 Default.PricingForm=function()
 {
  return Forms.PricingForm(true,PricingDAO.get_Default());
 };
 Default.WebcastContentOrInClassLocationFormForUsername=function(username)
 {
  return Forms.WebcastContentOrInClassLocationFormForUsername(username,{
   $:1,
   $0:EventOrCourseDetailsDAO_WebcastDetails.Default()
  });
 };
 Default.LocationFormForUsername=function(username)
 {
  return Client$5.LocationFormForUsername(username,{
   $:0,
   $0:LocationDetails.get_Default()
  });
 };
 Default.WebcastDetailsForm=function()
 {
  return Forms.WebcastDetailsForm(EventOrCourseDetailsDAO_WebcastDetails.Default());
 };
 Default.StartsAtAndLastsForForm=function()
 {
  return Forms.StartsAtAndLastsForForm(0,0,0,60);
 };
 Default.CourseAbstractAndDateForm=function()
 {
  return Default.CourseAbstractAndDateFormWithAbstract("");
 };
 Default.CourseAbstractAndDateFormWithAbstract=function(abstr)
 {
  return Forms.CourseAbstractAndDateForm(false,abstr,null);
 };
 Default.CourseNumberAndTitleAndIsActiveForm=function()
 {
  return Forms.CourseNumberAndTitleAndIsActiveForm(false,"N/A","",true);
 };
 Forms.ExtraInfoFormForUsername=function(username,dao)
 {
  var companies,comps,m,indexComp,m$1,urlName,o,b,f;
  companies=(comps=(m=function(comp)
  {
   return[comp.Name,comp.UrlName];
  },function(l)
  {
   return List.map(m,l);
  }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.Company+Rpc.GetCompaniesForUsername:-142913291",[username]))),new List.T({
   $:1,
   $0:["<None>",""],
   $1:comps
  }));
  indexComp=(m$1=dao.AssociatedGroupUrlName,(m$1!=null?m$1.$==1:false)?(urlName=m$1.$0,(o=Seq.tryFindIndex(function(t)
  {
   return t[1]===urlName;
  },companies),Operators.DefaultArg(o,0))):0);
  return Data.$(Data.$(Data.$(Formlet$1.Return(function()
  {
   return function(t)
   {
    var orgName,authorUsername;
    orgName=t[0];
    authorUsername=t[1];
    return function(tags)
    {
     return ExtraInformationDAO.New(tags,orgName===""?null:{
      $:1,
      $0:orgName
     },authorUsername);
    };
   };
  }),Forms.StepForm(4,"Almost there...")),(b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(FwLS.Select(indexComp,"Associate event with",companies,"Selecting an organization or group is optional"),function(a)
   {
    return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Courses+Rpc.GetSpeakerUsernamesForGroupFilteredByAdminAccessForUsername:1601478601",[username,a,dao.CreateAsAuthorUsername])),function(a$1)
    {
     var p,$1,indexAuthors,authors;
     p=a$1.$==0?($1=a$1.$0[1],$1!=null?$1.$==1:false)?[a$1.$0[0],a$1.$0[1].$0]:[a$1.$0[0],0]:[List.ofArray([["[Myself]",username]]),0];
     indexAuthors=p[1];
     authors=p[0];
     return b.Bind(FwLS.Select(indexAuthors,"Event author",authors,"Selecting an author is optional"),function(a$2)
     {
      return b.Return([a,a$2]);
     });
    });
   });
  }))),(f=FwLS.InputWithValue(Strings.concat(", ",dao.Tags),"Tags (comma-separated)","You must choose at least one tag","tags"),Formlet$1.Map(Client$2.ParseTags,f)));
 };
 Forms.PaymentProcessingForm=function(dao)
 {
  var p,defPricing,def,isExternalProcessingForm,b;
  p=dao.$==1?[1,dao.$1]:[0,dao.$0];
  defPricing=p[1];
  def=p[0];
  isExternalProcessingForm=function()
  {
   return FwL.Select(def,"Payment processing",List.ofArray([["Processed by FPish",false],["External processing",true]]));
  };
  return Data.$(Data.$(Formlet$1.Return(function()
  {
   return Global.id;
  }),Forms.StepForm(3,"Pricing details")),(b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(isExternalProcessingForm(),function(a)
   {
    var url;
    return b.ReturnFrom(a?(url=dao.$==1?dao.$0:"",Data.$(Data.$(Formlet$1.Return(function(url$1)
    {
     return function(pricing)
     {
      return{
       $:1,
       $0:url$1,
       $1:pricing
      };
     };
    }),FwL.InputWithValue(url,"Payment processing URL","You must enter a URL for payment processing")),Forms.PricingForm(false,defPricing))):Data.$(Data.$(Formlet$1.Return(function()
    {
     return function(pricing)
     {
      return{
       $:0,
       $0:pricing
      };
     };
    }),Formlet$1.OfElement(function()
    {
     var x,x$1,x$2;
     x=[(x$1=[Tags$1.Tags().text("Paid event processing through FPish is not available yet.")],Tags$1.Tags().NewTag("span",x$1)),Tags$1.Tags().NewTag("br",[]),(x$2=[Tags$1.Tags().text("If you want to offer paid events, you need to provide your checkout URL using \"External processing\" above.")],Tags$1.Tags().NewTag("span",x$2))];
     return Tags$1.Tags().NewTag("div",x);
    })),Forms.PricingForm(true,PricingDAO.get_Default())));
   });
  })));
 };
 Forms.PricingForm=function(isReadOnly,dao)
 {
  var p,input,clas,f;
  p=isReadOnly?[Runtime.Curried(ReadOnly$1.Input,4),"inactive"]:[Runtime.Curried(FwLS.InputWithValue,4),""];
  input=p[0];
  clas=p[1];
  return Data.$(Data.$(Formlet$1.Return(function(price)
  {
   return function(curr)
   {
    return PricingDAO.New(price,curr);
   };
  }),(f=function(t)
  {
   return Global.Number(t);
  },function(f$1)
  {
   return Formlet$1.Map(f,f$1);
  }((((input(Global.String(dao.Price)))("Price"))("You must enter a price"))("price "+clas)))),(((input(dao.Currency))("Currency"))("You must enter a currency"))("currency "+clas));
 };
 Forms.WebcastContentOrInClassLocationForEditFormForUsername=function(username,dao)
 {
  var _default,b;
  _default=dao.$==0?1:0;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   var f;
   return b.Bind((f=Controls$2.Select(_default,List.ofArray([["Webcast",true],["In class-training",false]])),Enhance$3.WithTextLabel("Type of event",f)),function(a)
   {
    var _dao,f$1,_dao$1,f$2;
    return b.Bind(a?(_dao=dao.$==1?dao.$0:EventOrCourseDetailsDAO_WebcastDetails.Default(),(f$1=function(webcastContent)
    {
     return{
      $:1,
      $0:webcastContent
     };
    },function(f$3)
    {
     return Formlet$1.Map(f$1,f$3);
    }(Forms.WebcastDetailsForm(_dao)))):(_dao$1=dao.$==0?dao.$0:{
     $:0,
     $0:LocationDetails.get_Default()
    },(f$2=function(location)
    {
     return{
      $:0,
      $0:location
     };
    },function(f$3)
    {
     return Formlet$1.Map(f$2,f$3);
    }(Forms.LocationWithEditExistingFormForUsername(username,_dao$1)))),function(a$1)
    {
     return b.Return(a$1);
    });
   });
  });
 };
 Forms.WebcastContentOrInClassLocationFormForUsername=function(username,dao)
 {
  var _default,b;
  _default=dao.$==0?1:0;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   var f;
   return b.Bind((f=Controls$2.Select(_default,List.ofArray([["Webcast",true],["In class-training",false]])),Enhance$3.WithTextLabel("Type of event",f)),function(a)
   {
    var _dao,f$1,_dao$1,f$2;
    return b.Bind(a?(_dao=dao.$==1?dao.$0:EventOrCourseDetailsDAO_WebcastDetails.Default(),(f$1=function(webcastContent)
    {
     return{
      $:1,
      $0:webcastContent
     };
    },function(f$3)
    {
     return Formlet$1.Map(f$1,f$3);
    }(Forms.WebcastDetailsForm(_dao)))):(_dao$1=dao.$==0?dao.$0:{
     $:0,
     $0:LocationDetails.get_Default()
    },(f$2=function(location)
    {
     return{
      $:0,
      $0:location
     };
    },function(f$3)
    {
     return Formlet$1.Map(f$2,f$3);
    }(Data.$(Data.$(Formlet$1.Return(function()
    {
     return Global.id;
    }),Forms.StepForm(2,"Location details")),Client$5.LocationFormForUsername(username,_dao$1))))),function(a$1)
    {
     return b.Return(a$1);
    });
   });
  });
 };
 Forms.LocationWithEditExistingFormForUsername=function(username,def_dao)
 {
  var locStepForm,addressForm,newLocationForm,existingLocationForm,x,b,l,i;
  locStepForm=Forms.StepForm(2,"Location details");
  addressForm=function(def)
  {
   var f,f$1,f$2,f$3,f$4,f$5,x$1,l$1,i$1;
   return Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(descr,s1,s2,city,state,zip,country,memo)
   {
    return LocationDetails.New(descr,s1,s2,city,state,country,zip,memo);
   },8)),FwLS.InputWithValue(def.Description,"Description","You must enter a description","location-description")),FwLS.InputWithValue(def.Street1,"Street 1","You must enter a street","street-1")),(f=(f$1=(f$2=function(s)
   {
    return s.toLowerCase()!==""?{
     $:1,
     $0:s
    }:null;
   },function(f$6)
   {
    return Formlet$1.Map(f$2,f$6);
   }(Controls$2.Input(def.Street2==null?"":def.Street2.$0))),Enhance$3.WithTextLabel("Street 2",f$1)),Enhance.WithCssClass("street-2",f))),FwLS.InputWithValue(def.City,"City","You must enter a city","city")),(f$3=(f$4=(f$5=function(s)
   {
    return s.toLowerCase()!==""?{
     $:1,
     $0:s
    }:null;
   },function(f$6)
   {
    return Formlet$1.Map(f$5,f$6);
   }(Controls$2.Input(def.State==null?"":def.State.$0))),Enhance$3.WithTextLabel("State",f$4)),Enhance.WithCssClass("state",f$3))),FwLS.InputWithValue(def.Zip,"Zip code","You must enter a zip code","zip")),FwLS.InputWithValue(def.Country,"Country","You must enter a country","country")),(x$1=FwLS.RichEditorWithValueOptional(def.Memo,"Directions","memo"),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$1,x$1))));
  };
  newLocationForm=function()
  {
   var f;
   f=function(a)
   {
    return{
     $:0,
     $0:a
    };
   };
   return function(f$1)
   {
    return Formlet$1.Map(f,f$1);
   }(addressForm(LocationDetails.get_Default()));
  };
  existingLocationForm=function()
  {
   var p,l$1,locIdOption,def,locations,locs,m,b$1;
   p=def_dao.$==1?(l$1=def_dao.$0,[{
    $:1,
    $0:l$1
   },{
    $:1,
    $0:l$1.Id
   }]):[null,null];
   locIdOption=p[1];
   def=p[0];
   locations=(locs=(m=function(loc)
   {
    return[loc.Details.Description,{
     $:1,
     $0:loc
    }];
   },function(l$2)
   {
    return List.map(m,l$2);
   }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.Location+Rpc.GetLocationsForUsername:-1060865954",[username,locIdOption]))),new List.T({
    $:1,
    $0:["<Select>",null],
    $1:locs
   }));
   b$1=Formlet$1.Do();
   return b$1.Delay(function()
   {
    var f,a,def$1,p$1;
    return b$1.Bind((f=Enhance$3.WithValidationIcon((a=function(opt)
    {
     return opt!=null?opt.$0.Id>0:false;
    },function(a$1)
    {
     return Data.Validator().Is(a,"You must select an existing location",a$1);
    }(Controls$2.Select((def!=null?def.$==1:false)?(def$1=def.$0,(p$1=function(a$1,i$1)
    {
     return i$1!=null?i$1.$0.Id===def$1.Id:false;
    },function(l$2)
    {
     return Seq.findIndex(function($1)
     {
      return p$1($1[0],$1[1]);
     },l$2);
    }(locations))):0,locations)))),Enhance$3.WithTextLabel("Address",f)),function(a$1)
    {
     return b$1.Bind(addressForm(a$1.$0.Details),function(a$2)
     {
      return b$1.Return({
       $:1,
       $0:{
        Details:a$2,
        Id:a$1.$0.Id
       }
      });
     });
    });
   });
  };
  x=(b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(locStepForm,function()
   {
    var def,f;
    return b.Bind((def=def_dao.$==1?1:def_dao.$==2?0:0,(f=Controls$2.Select(def,List.ofArray([["New address",true],["Existing address",false]])),Enhance$3.WithTextLabel("Choose location",f))),function(a)
    {
     return b.Bind(a?newLocationForm():existingLocationForm(),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  }));
  l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:0
  }));
  return Enhance$3.WithLabelConfiguration(l,x);
 };
 Forms.WebcastDetailsForm=function(dao)
 {
  var _default,m,x,x$1,l,i,b,l$1,i$1;
  _default=(m=dao.Content,m.$==0?1:m.$==1?2:0);
  x=Data.$(Data.$(Formlet$1.Return(function(joinInstructions)
  {
   return function(content)
   {
    return EventOrCourseDetailsDAO_WebcastDetails.New(content,joinInstructions);
   };
  }),(x$1=FwLS.TextAreaWithValueOptional(dao.InstructionsToJoin,"Instructions to join","instructions-to-join"),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:2
  })),Enhance$3.WithLabelConfiguration(l,x$1)))),(b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(Forms.StepForm(2,"Online content details"),function()
   {
    var f;
    return b.Bind((f=Controls$2.Select(_default,List.ofArray([["None yet",1],["URL",2],["HTML block",3]])),Enhance$3.WithTextLabel("Content type",f)),function(a)
    {
     var value,m$1,value$1,m$2;
     return b.Bind(a===2?(value=(m$1=dao.Content,m$1.$==0?m$1.$0:""),Data.$(Formlet$1.Return(function(s)
     {
      return{
       $:0,
       $0:s
      };
     }),FwLS.InputWithValue(value,"URL","You must enter a URL","url"))):a===3?(value$1=(m$2=dao.Content,m$2.$==1?m$2.$0:""),Data.$(Formlet$1.Return(function(s)
     {
      return{
       $:1,
       $0:s
      };
     }),FwLS.TextAreaWithValue(value$1,"HTML","You must enter an HTML string","html"))):Formlet$1.Return({
      $:2
     }),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   });
  })));
  l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
   $:0
  }));
  return Enhance$3.WithLabelConfiguration(l$1,x);
 };
 Forms.StartsAtAndLastsForForm=function(defHour,defMinute,defOffset,defDur)
 {
  var hours,m,minutes,m$1,tzones,m$2,lastsFor,minutes$1,m$3,hours$1,m$4,days,m$5,p;
  hours=List.ofSeq((m=function(i)
  {
   return[Global.String(i),i];
  },function(s)
  {
   return Seq.map(m,s);
  }(Operators.range(0,23))));
  minutes=List.ofSeq((m$1=function(i)
  {
   return[i===0?"00":Global.String(i),i];
  },function(s)
  {
   return Seq.map(m$1,s);
  }(Operators.step(0,15,45))));
  tzones=List.ofSeq((m$2=function(i)
  {
   return["GMT"+(i<0?Global.String(i):i===0?"":"+"+Global.String(i)),Global.Number(i)];
  },function(s)
  {
   return Seq.map(m$2,s);
  }(Operators.range(-12,12))));
  lastsFor=(minutes$1=List.ofSeq((m$3=function(i)
  {
   return[Global.String(i)+" minutes",i];
  },function(s)
  {
   return Seq.map(m$3,s);
  }(Operators.step(15,15,60)))),(hours$1=List.ofSeq((m$4=function(i)
  {
   return[Global.String(i)+" hours",i*60];
  },function(s)
  {
   return Seq.map(m$4,s);
  }(Operators.range(2,8)))),(days=List.ofSeq((m$5=function(i)
  {
   return[Global.String(i)+" days",i*60*24];
  },function(s)
  {
   return Seq.map(m$5,s);
  }(Operators.range(2,30)))),List.append(minutes$1,List.append(List.ofArray([["90 minutes",90]]),List.append(hours$1,days))))));
  return Formlet$1.Horizontal(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(seHour,seMinute,seZone,$1,lastFor)
  {
   return[seHour,seMinute,seZone,lastFor];
  },5)),FwLS.Select(defHour,"Starts at",hours,"starts-at-hours")),FwS.Select(defMinute/15>>0,minutes,"starts-at-minutes")),FwS.Select((defOffset<<0)+12,tzones,"starts-at-zones")),Formlet$1.OfElement(function()
  {
   var x;
   x=[Attr.Attr().NewAttr("class","starts-at-space")];
   return Tags$1.Tags().NewTag("div",x);
  })),FwLS.Select((p=function(a,v)
  {
   return v===defDur;
  },function(l)
  {
   return Seq.findIndex(function($1)
   {
    return p($1[0],$1[1]);
   },l);
  }(lastsFor)),"Lasts for",lastsFor,"lasts-for")));
 };
 Forms.CourseDescriptionAndOutlineForm=function(isCourseDataSpecial,def_descr,def_outl)
 {
  var x,x$1,l,i,x$2,x$3,l$1,i$1;
  return Data.$(Data.$(Formlet$1.Return(function(descr)
  {
   return function(outl)
   {
    return[descr,outl];
   };
  }),(x=(x$1=FwLS.RichEditorWithValue(def_descr,"Description of the course","You should provide a description of the course","course-description"),(Forms.EnhanceWithSpecialLabel(isCourseDataSpecial,"Description of the course"))(x$1)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:2
  })),Enhance$3.WithLabelConfiguration(l,x)))),(x$2=(x$3=FwLS.RichEditorWithValue(def_outl,"Outline of the course","You should provide an outline of the course","course-outline"),(Forms.EnhanceWithSpecialLabel(isCourseDataSpecial,"Outline of the course"))(x$3)),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
   $:2
  })),Enhance$3.WithLabelConfiguration(l$1,x$2))));
 };
 Forms.CourseAbstractForm=function(def_abs)
 {
  var x,l,i;
  x=FwLS.TextAreaWithValue(def_abs,"Course abstract","You must enter a course abstract","abstract");
  l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:2
  }));
  return Enhance$3.WithLabelConfiguration(l,x);
 };
 Forms.CourseAbstractAndDateForm=function(isCourseDataSpecial,def_abs,def_date)
 {
  var x,x$1,l,i,x$2,f,f$1,l$1,i$1;
  return Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(abs)
  {
   return function(date)
   {
    return[abs,date];
   };
  }),(x=(x$1=FwLS.TextAreaWithValue(def_abs,"Event abstract","You must enter an event abstract","abstract"),(Forms.EnhanceWithSpecialLabel(isCourseDataSpecial,"Event abstract"))(x$1)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
   $:2
  })),Enhance$3.WithLabelConfiguration(l,x)))),(x$2=(f=Enhance$3.WithValidationIcon((f$1=function(el)
  {
   var x$3;
   return Operators$1.add((x$3=[Attr.Attr().NewAttr("style","padding: 5px;")],Tags$1.Tags().NewTag("div",x$3)),[el]);
  },function(f$2)
  {
   return Formlet$1.MapElement(f$1,f$2);
  }(Controls$4.Datepicker(def_date)))),Enhance$3.WithTextLabel("Date",f)),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
   $:2
  })),Enhance$3.WithLabelConfiguration(l$1,x$2)))));
 };
 Forms.CourseNumberAndTitleAndIsActiveForm=function(isCourseDataSpecial,def_number,def_title,def_isActive)
 {
  var x,f;
  return Formlet$1.Horizontal(Data.$(Data.$(Formlet$1.Return(function(title)
  {
   return function(isActive)
   {
    return[def_number,title,isActive];
   };
  }),(x=FwLS.InputWithValue(def_title,"Title","You must enter a title","title"),(Forms.EnhanceWithSpecialLabel(isCourseDataSpecial,"Title"))(x))),(f=Controls$2.Checkbox(def_isActive),Enhance$3.WithTextLabel("Active",f))));
 };
 Forms.StepForm=function(num,title)
 {
  var imgSrc,imgAlt;
  imgSrc="/images/step"+Global.String(num)+".png";
  imgAlt="Step "+Global.String(num);
  return Formlet$1.OfElement(function()
  {
   var x,x$1,x$2;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","add-event-form-sep")],Tags$1.Tags().NewTag("div",x)),[(x$1=[Attr.Attr().NewAttr("src",imgSrc),Attr.Attr().NewAttr("alt",imgAlt)],Tags$1.Tags().NewTag("img",x$1)),(x$2=[Tags$1.Tags().text(title)],Tags$1.Tags().NewTag("h1",x$2))]);
  });
 };
 Forms.EnhanceWithSpecialLabel=function(isSpecial,label)
 {
  var l;
  return isSpecial?(l=function()
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","special")],Tags$1.Tags().NewTag("label",x)),[Tags$1.Tags().text(label)]);
  },function(f)
  {
   return Enhance$3.WithLabel(l,f);
  }):Global.id;
 };
 CreateEventOrCourseControlForUsername=Client$11.CreateEventOrCourseControlForUsername=Runtime.Class({
  get_Body:function()
  {
   var $this,buttonClass,conf,detailsForm,inPersonForm,x,l,i,webcastForm,x$1,l$1,i$1,newCourseForm,x$2,l$2,i$2,newEventForCourseForm,courses,courses$1,defaultCourse,m,$1,id,p,a,f,b,form,m$1,extra,b$1;
   $this=this;
   buttonClass=Server.Large();
   conf=FormContainerConfiguration.New({
    $:1,
    $0:{
     $:0,
     $0:"Create an event or a course"
    }
   },Padding.New(null,null,null,null),{
    $:1,
    $0:{
     $:0,
     $0:"Use this form to create one-time events such as in-class trainings or webcasts; new courses; or instances of events for existing courses."
    }
   },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
   detailsForm=(inPersonForm=(x=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function()
   {
    return function(t)
    {
     var courseNumber,title,isActive;
     courseNumber=t[0];
     title=t[1];
     isActive=t[2];
     return function(t$1)
     {
      var abstr,date;
      abstr=t$1[0];
      date=t$1[1];
      return function(t$2)
      {
       var h,m$2,tz,dur;
       h=t$2[0];
       m$2=t$2[1];
       tz=t$2[2];
       dur=t$2[3];
       return Runtime.Curried(function(descr,outl,$2,loc)
       {
        var p$1;
        p$1=DateDAO.AndTimeOfEcma(date,h,m$2,tz);
        return{
         $:1,
         $0:{
          CourseNumber:courseNumber,
          Title:title,
          Abstract:abstr,
          Description:descr,
          Outline:outl,
          IsActive:isActive,
          Date:p$1[0],
          Time:p$1[1],
          DurationInMinutes:dur,
          Location:loc
         }
        };
       },4);
      };
     };
    };
   }),Forms.StepForm(1,"Event details")),Default.CourseNumberAndTitleAndIsActiveForm()),Default.CourseAbstractAndDateFormWithAbstract(this.DefaultAbstract)),Default.StartsAtAndLastsForForm()),FwLS.RichEditor("Event description","You must enter a course description","description")),FwLS.RichEditor("Event outline","You must enter a course outline","outline")),Forms.StepForm(2,"Location details")),Default.LocationFormForUsername(this.Username)),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New(i.Align,i.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l,x))),(webcastForm=(x$1=Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function()
   {
    return function(t)
    {
     var number,title,isActive;
     number=t[0];
     title=t[1];
     isActive=t[2];
     return function(t$1)
     {
      var abs,date;
      abs=t$1[0];
      date=t$1[1];
      return function(t$2)
      {
       var h,m$2,tz,dur;
       h=t$2[0];
       m$2=t$2[1];
       tz=t$2[2];
       dur=t$2[3];
       return function(content)
       {
        var p$1;
        p$1=DateDAO.AndTimeOfEcma(date,h,m$2,tz);
        return{
         $:0,
         $0:{
          CourseNumber:number,
          Title:title,
          Abstract:abs,
          IsActive:isActive,
          Date:p$1[0],
          Time:p$1[1],
          DurationInMinutes:dur,
          Details:content
         }
        };
       };
      };
     };
    };
   }),Forms.StepForm(1,"Event details")),Default.CourseNumberAndTitleAndIsActiveForm()),Default.CourseAbstractAndDateFormWithAbstract(this.DefaultAbstract)),Default.StartsAtAndLastsForForm()),Default.WebcastDetailsForm()),(l$1=(i$1=LabelConfiguration.get_Default(),LabelConfiguration.New(i$1.Align,i$1.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$1,x$1))),(newCourseForm=(x$2=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function()
   {
    return function(t)
    {
     var courseNumber,title,isActive;
     courseNumber=t[0];
     title=t[1];
     isActive=t[2];
     return Runtime.Curried(function(abs,$2,desc,outl)
     {
      return{
       $:2,
       $0:{
        CourseNumber:courseNumber,
        Title:title,
        Abstract:abs,
        Description:desc,
        Outline:outl,
        IsActive:isActive,
        IsOneOff:false
       }
      };
     },4);
    };
   }),Forms.StepForm(1,"Course details")),Default.CourseNumberAndTitleAndIsActiveForm()),FwLS.TextArea("Course abstract","You must enter a course abstract","description")),Forms.StepForm(2,"Course outline")),FwLS.RichEditor("Course description","You must enter a course description","description")),FwLS.RichEditor("Course outline","You must enter a course outline","outline")),(l$2=(i$2=LabelConfiguration.get_Default(),LabelConfiguration.New(i$2.Align,i$2.VerticalAlign,{
    $:2
   })),Enhance$3.WithLabelConfiguration(l$2,x$2))),(newEventForCourseForm=(courses=(courses$1=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.Course+Rpc.GetByAuthorUsername:-714926704",[this.Username]),new List.T({
    $:1,
    $0:["<Select>",0],
    $1:courses$1
   })),(defaultCourse=(m=this.DefaultType,m.$==3?($1=m.$0,$1!=null?$1.$==1:false)?(id=m.$0.$0,Operators.DefaultArg((p=function(a$1,cid)
   {
    return cid===id;
   },function(l$3)
   {
    return Seq.tryFindIndex(function($2)
    {
     return p($2[0],$2[1]);
    },l$3);
   }(courses)),0)):0:0),Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function()
   {
    return function(t)
    {
     var courseId,isActive;
     courseId=t[0];
     isActive=t[1];
     return function(t$1)
     {
      var abs,date;
      abs=t$1[0];
      date=t$1[1];
      return function(t$2)
      {
       var h,m$2,tz,dur;
       h=t$2[0];
       m$2=t$2[1];
       tz=t$2[2];
       dur=t$2[3];
       return function(details)
       {
        var p$1;
        p$1=DateDAO.AndTimeOfEcma(date,h,m$2,tz);
        return{
         $:3,
         $0:{
          TrainingCourseId:courseId,
          Abstract:abs,
          Date:p$1[0],
          IsActive:isActive,
          Time:p$1[1],
          DurationInMinutes:dur,
          Details:details
         }
        };
       };
      };
     };
    };
   }),Forms.StepForm(1,"Course details")),Formlet$1.Horizontal(Data.$(Enhance$3.WithValidationIcon(Data.$(Formlet$1.Return(function(courseId)
   {
    return function(isActive)
    {
     return[courseId,isActive];
    };
   }),(a=FwLS.Select(defaultCourse,"Course",courses,"courses"),Data.Validator().IsGreaterThan(0,"Must select a course",a)))),(f=Controls$2.Checkbox(true),Enhance$3.WithTextLabel("Active",f))))),Default.CourseAbstractAndDateFormWithAbstract(this.DefaultAbstract)),Default.StartsAtAndLastsForForm()),Default.WebcastContentOrInClassLocationFormForUsername(this.Username)))),Formlet$1.Vertical((b=Formlet$1.Do(),b.Delay(function()
   {
    var f$1;
    return b.Bind((f$1=Controls$2.Select($this.DefaultType.get_Index(),List.ofArray([["New one-time webcast",CreateEventOrCourseType.OneTimeWebcast],["New one-time training",CreateEventOrCourseType.OneTimeInClassTraining],["New course",CreateEventOrCourseType.NewCourse],["New event for an existing course",new CreateEventOrCourseType({
     $:3,
     $0:null
    })]])),Enhance$3.WithTextLabel("Type of event",f$1)),function(a$1)
    {
     return b.Bind(a$1.$==1?inPersonForm:a$1.$==2?newCourseForm:a$1.$==3?newEventForCourseForm:webcastForm,function(a$2)
     {
      return b.Return(a$2);
     });
    });
   })))))));
   form=Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried3(function(info,paymentProcessing,extra$1)
   {
    return{
     Details:info,
     PaymentProcessing:paymentProcessing,
     Extra:extra$1
    };
   })),detailsForm),Default.PaymentProcessingForm()),(m$1=this.DefaultExtra,(m$1!=null?m$1.$==1:false)?(extra=m$1.$0,Forms.ExtraInfoFormForUsername(this.Username,extra)):Default.ExtraInfoFormForUsername(this.Username)));
   return Enhance$3.WithFormContainer((b$1=Formlet$1.Do(),b$1.Delay(function()
   {
    var f$1,f$2;
    return b$1.Bind((f$1=(f$2=Enhance.WithCssClass("add-event-form",form),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$2)),Enhance$3.WithCustomFormContainer(conf,f$1)),function(a$1)
    {
     return b$1.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.EventOrCourse+Rpc.SaveEventOrCourseAsync:80190792",[a$1])),function(a$2)
     {
      return b$1.ReturnFrom(Formlet$1.OfElement(function()
      {
       var e,x$3,url,x$4,x$5;
       return a$2.$==1?(e=a$2.$0,Operators$1.add((x$3=[Attr.Attr().NewAttr("class","error")],Tags$1.Tags().NewTag("div",x$3)),[Tags$1.Tags().text(e)])):(url=$this.MyPageUrl,Global.location.href=url,Operators$1.add((x$4=[Attr.Attr().NewAttr("class","success")],Tags$1.Tags().NewTag("div",x$4)),[(x$5=[Tags$1.Tags().text("\r\n                                Your event has been created.")],Tags$1.Tags().NewTag("span",x$5))]));
      }));
     });
    });
   })));
  }
 },Web.Control,CreateEventOrCourseControlForUsername);
 Client$11.EditEvent=function(username,event,myPageUrl)
 {
  var conf,form,datetime,x,f,f$1,c,x$1,b;
  conf=FormContainerConfiguration.New({
   $:1,
   $0:{
    $:0,
    $0:"Edit an event"
   }
  },Padding.New(null,null,null,null),{
   $:1,
   $0:event.IsOneOff?{
    $:0,
    $0:"Use this form to edit an event."
   }:{
    $:1,
    $0:function()
    {
     var x$2,x$3,x$4;
     x$2=[(x$3=[Tags$1.Tags().text("Use this form to edit an event.")],Tags$1.Tags().NewTag("p",x$3)),(x$4=[Tags$1.Tags().text("This event is associated with a course. Modifying the fields in red will modify the course,\r\n                                                which will alter all other events associated with this course.")],Tags$1.Tags().NewTag("p",x$4))];
     return Tags$1.Tags().NewTag("div",x$2);
    }
   }
  },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
  form=(datetime=DateDAO.ToEcma(event.Date,event.Time),(x=(f=(f$1=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function()
  {
   return function(t)
   {
    var number,title,isActive;
    number=t[0];
    title=t[1];
    isActive=t[2];
    return function(t$1)
    {
     var abs,date;
     abs=t$1[0];
     date=t$1[1];
     return function(t$2)
     {
      var descr,outl;
      descr=t$2[0];
      outl=t$2[1];
      return function(t$3)
      {
       var h,m,tz,dur;
       h=t$3[0];
       m=t$3[1];
       tz=t$3[2];
       dur=t$3[3];
       return Runtime.Curried3(function(details,pricing,extra)
       {
        var p;
        p=DateDAO.AndTimeOfEcma(date,h,m,tz);
        return{
         Id:event.Id,
         Title:title,
         IsActive:isActive,
         Abstract:abs,
         Outline:outl,
         Description:descr,
         CourseNumber:number,
         Date:p[0],
         Time:p[1],
         DurationInMinutes:dur,
         Details:details,
         PaymentProcessing:pricing,
         Extra:extra,
         IsOneOff:event.IsOneOff
        };
       });
      };
     };
    };
   };
  }),Forms.StepForm(1,"Course details")),Forms.CourseNumberAndTitleAndIsActiveForm(!event.IsOneOff,event.CourseNumber,event.Title,event.IsActive)),Forms.CourseAbstractAndDateForm(!event.IsOneOff,event.Abstract,{
   $:1,
   $0:datetime
  })),Forms.CourseDescriptionAndOutlineForm(!event.IsOneOff,event.Description,event.Outline)),Forms.StartsAtAndLastsForForm(datetime.getHours(),datetime.getMinutes(),datetime.getTimezoneOffset()/-60,event.DurationInMinutes)),Forms.WebcastContentOrInClassLocationForEditFormForUsername(username,event.Details)),Forms.PaymentProcessingForm(event.PaymentProcessing)),Forms.ExtraInfoFormForUsername(username,event.Extra)),Enhance$3.WithCustomFormContainer(conf,f$1)),Enhance.WithCssClass("add-event-form",f)),(c=Server.Large(),Client$3.EnhanceWithSubmitAndResetButtons(c,x))));
  x$1=[Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(form,function(a)
   {
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.EventOrCourse+Rpc.EditEventAsync:-1180402381",[a])),function(a$1)
    {
     return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(Global.location.href=myPageUrl,FormletHelpers.SuccessF("The event has been modified.")));
    });
   });
  })))];
  return Tags$1.Tags().NewTag("div",x$1);
 };
 Client$11.EditCourse=function(username,course,successPageUrl)
 {
  var conf,form,x,f,f$1,c,x$1,b;
  conf=FormContainerConfiguration.New({
   $:1,
   $0:{
    $:0,
    $0:"Edit a course"
   }
  },Padding.New(null,null,null,null),{
   $:1,
   $0:{
    $:1,
    $0:function()
    {
     var x$2,x$3;
     x$2=[(x$3=[Tags$1.Tags().text("Use this form to edit a course."),Tags$1.Tags().NewTag("br",[]),Tags$1.Tags().text("Please note that all changes made here will be reflected\r\n                                            in existing events associated with this course.")],Tags$1.Tags().NewTag("p",x$3))];
     return Tags$1.Tags().NewTag("div",x$2);
    }
   }
  },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
  form=(x=(f=(f$1=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(function()
  {
   return function(t)
   {
    var number,title,isActive;
    number=t[0];
    title=t[1];
    isActive=t[2];
    return Runtime.Curried3(function(abs,$1,t$1)
    {
     var descr,outl;
     descr=t$1[0];
     outl=t$1[1];
     return function(pricing)
     {
      return function(extra)
      {
       return{
        Id:course.Id,
        CourseNumber:number,
        Title:title,
        IsActive:isActive,
        Abstract:abs,
        Outline:outl,
        Description:descr,
        PaymentProcessing:pricing,
        Extra:extra
       };
      };
     };
    });
   };
  }),Forms.StepForm(1,"Course details")),Forms.CourseNumberAndTitleAndIsActiveForm(false,course.CourseNumber,course.Title,course.IsActive)),Forms.CourseAbstractForm(course.Abstract)),Forms.StepForm(2,"Course outline")),Forms.CourseDescriptionAndOutlineForm(false,course.Description,course.Outline)),Forms.PaymentProcessingForm(course.PaymentProcessing)),Forms.ExtraInfoFormForUsername(username,course.Extra)),Enhance$3.WithCustomFormContainer(conf,f$1)),Enhance.WithCssClass("add-event-form edit-course-form",f)),(c=Server.Large(),Client$3.EnhanceWithSubmitAndResetButtons(c,x)));
  x$1=[Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(form,function(a)
   {
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.EventOrCourse+Rpc.EditCourseAsync:1788536351",[a])),function(a$1)
    {
     return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(Global.location.href=successPageUrl,FormletHelpers.SuccessF("The course has been modified.")));
    });
   });
  })))];
  return Tags$1.Tags().NewTag("div",x$1);
 };
 Client$12.RenderPastOnlineTBForm=function(eventId,user,successUrl)
 {
  var buttonClass,conf,f,f$1;
  buttonClass=Server.Large();
  conf=FormContainerConfiguration.New({
   $:1,
   $0:{
    $:0,
    $0:"Past Online Event"
   }
  },Client.StandardConfiguration().Padding,{
   $:1,
   $0:{
    $:0,
    $0:"Select the online session to purchase."
   }
  },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
  f=(f$1=Client$12.PastOnlineTBForm(Operators.DefaultArg(eventId,-1),user),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$1));
  return Enhance$1.FormWithResponse(conf,function(inp)
  {
   var a,id;
   a=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.SubmitOnlineTB:-456108013",[inp,user]);
   return a.$==1?{
    $:1,
    $0:a.$0
   }:(id=a.$0,(Global.location.href=successUrl+Global.String(id),{
    $:0,
    $0:Client.LoadingImage()
   }));
  },f);
 };
 Client$12.RenderOnlineTBForm=function(eventId,user,successUrl)
 {
  var buttonClass,conf,f,f$1;
  buttonClass=Server.Large();
  conf=FormContainerConfiguration.New({
   $:1,
   $0:{
    $:0,
    $0:"Online Training Booking"
   }
  },Client.StandardConfiguration().Padding,{
   $:1,
   $0:{
    $:0,
    $0:"Register for an online training session"
   }
  },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
  f=(f$1=Client$12.OnlineTBForm(Operators.DefaultArg(eventId,-1),user),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$1));
  return Enhance$1.FormWithResponse(conf,function(inp)
  {
   var a,id;
   a=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.SubmitOnlineTB:-456108013",[inp,user]);
   return a.$==1?{
    $:1,
    $0:a.$0
   }:(id=a.$0,(Global.location.href=successUrl+Global.String(id),{
    $:0,
    $0:Client.LoadingImage()
   }));
  },f);
 };
 Client$12.RenderOnSiteTBForm=function(courseId,user,successUrl)
 {
  var buttonClass,conf,f,f$1;
  buttonClass=Server.Large();
  conf=FormContainerConfiguration.New({
   $:1,
   $0:{
    $:0,
    $0:"Onsite Training Booking"
   }
  },Client.StandardConfiguration().Padding,{
   $:1,
   $0:{
    $:0,
    $0:"Request a quote for an onsite training session"
   }
  },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
  f=(f$1=Client$12.OnsiteBookingForm(Operators.DefaultArg(courseId,-1),user),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$1));
  return Enhance$1.FormWithResponse(conf,function(inp)
  {
   var a,id;
   a=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.SubmitOnSiteTB:259562481",[inp,user]);
   return a.$==1?{
    $:1,
    $0:a.$0
   }:(id=a.$0,(Global.location.href=successUrl+Global.String(id),{
    $:0,
    $0:Client.LoadingImage()
   }));
  },f);
 };
 Client$12.RenderScheduledTBForm=function(eventId,user,successUrl)
 {
  var buttonClass,conf,f,f$1;
  buttonClass=Server.Large();
  conf=FormContainerConfiguration.New({
   $:1,
   $0:{
    $:0,
    $0:"Scheduled Training Booking"
   }
  },Client.StandardConfiguration().Padding,{
   $:1,
   $0:{
    $:0,
    $0:"Sign up for one of the prescheduled training sessions."
   }
  },Client.StandardConfiguration().BackgroundColor,Client.StandardConfiguration().BorderColor,Client.StandardConfiguration().CssClass,Client.StandardConfiguration().Style);
  f=(f$1=Client$12.ScheduledBookingForm(Operators.DefaultArg(eventId,-1),user),Client$3.EnhanceWithSubmitAndResetButtons(buttonClass,f$1));
  return Enhance$1.FormWithResponse(conf,function(stbi)
  {
   var a,id;
   a=(new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.SubmitScheduledTB:904457968",[stbi,user]);
   return a.$==1?{
    $:1,
    $0:a.$0
   }:(id=a.$0,(Global.location.href=successUrl+Global.String(id),{
    $:0,
    $0:Client.LoadingImage()
   }));
  },f);
 };
 Client$12.PastOnlineTBForm=function(eventId,booker)
 {
  var toOnlineBookingInfo,events,x,m,defEvent,a,p,x$1,f,a$1,l,i;
  toOnlineBookingInfo=function(id,title,date)
  {
   return{
    EventId:id,
    Event:title,
    Date:date
   };
  };
  events=(x=(m=function(te)
  {
   return[te.Date+" "+te.Title,[te.EventId,te.Title,te.Date]];
  },function(l$1)
  {
   return List.map(m,l$1);
  }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.ReadPastOnlineEvents:-1559638514",[]))),new List.T({
   $:1,
   $0:["Select",[-1,"",""]],
   $1:x
  }));
  defEvent=(a=(p=function(a$2,a$3)
  {
   return a$3[0]===eventId;
  },function(l$1)
  {
   return Seq.tryFindIndex(function($1)
   {
    return p($1[0],$1[1]);
   },l$1);
  }(events)),(a!=null?a.$==1:false)?a.$0:-1);
  x$1=Data.$(Formlet$1.Return(function($1)
  {
   return toOnlineBookingInfo($1[0],$1[1],$1[2]);
  }),(f=Enhance$3.WithValidationIcon((a$1=function(id)
  {
   return id>-1;
  },function(a$2)
  {
   return Data.Validator().Is(function($1)
   {
    return a$1($1[0],$1[1],$1[2]);
   },"You must select an event",a$2);
  }(Controls$2.Select(defEvent,events)))),Enhance$3.WithTextLabel("Event",f)));
  l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
   $:1
  },i.VerticalAlign,i.Placement));
  return Enhance$3.WithLabelConfiguration(l,x$1);
 };
 Client$12.OnlineTBForm=function(eventId,booker)
 {
  var toOnlineBookingInfo,events,x,m,defEvent,a,p,x$1,f,a$1,l,i;
  toOnlineBookingInfo=function(id,title,date)
  {
   return{
    EventId:id,
    Event:title,
    Date:date
   };
  };
  events=(x=(m=function(te)
  {
   return[te.Date+" "+te.Title,[te.EventId,te.Title,te.Date]];
  },function(l$1)
  {
   return List.map(m,l$1);
  }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.ReadOnlineEvents:-1559638514",[]))),new List.T({
   $:1,
   $0:["Select",[-1,"",""]],
   $1:x
  }));
  defEvent=(a=(p=function(a$2,a$3)
  {
   return a$3[0]===eventId;
  },function(l$1)
  {
   return Seq.tryFindIndex(function($1)
   {
    return p($1[0],$1[1]);
   },l$1);
  }(events)),(a!=null?a.$==1:false)?a.$0:-1);
  x$1=Data.$(Formlet$1.Return(function($1)
  {
   return toOnlineBookingInfo($1[0],$1[1],$1[2]);
  }),(f=Enhance$3.WithValidationIcon((a$1=function(id)
  {
   return id>-1;
  },function(a$2)
  {
   return Data.Validator().Is(function($1)
   {
    return a$1($1[0],$1[1],$1[2]);
   },"You must select an event",a$2);
  }(Controls$2.Select(defEvent,events)))),Enhance$3.WithTextLabel("Event",f)));
  l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
   $:1
  },i.VerticalAlign,i.Placement));
  return Enhance$3.WithLabelConfiguration(l,x$1);
 };
 Client$12.OnsiteBookingForm=function(courseId,booker)
 {
  var events,x,m,toBookingForm,defaultCourse,o,p,f,a,f$1,f$2,x$1,f$3,a$1,f$4,f$5,a$2,f$6,a$3,f$7,a$4,f$8,f$9,b;
  function nullToEmpty(s)
  {
   return s===null?"":s;
  }
  events=(x=(m=function(course)
  {
   return[course.CourseTitle,[course.CourseId,course.CourseTitle]];
  },function(l)
  {
   return List.map(m,l);
  }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingsServer.GetCourses_AllOnsiteEnabled:164454395",[]))),new List.T({
   $:1,
   $0:["Select",[-1,"N/A"]],
   $1:x
  }));
  toBookingForm=function(comp,num,st1,st2,city,zip,country,date,_type)
  {
   return{
    Company:comp,
    NumAttendees:num,
    Street1:st1,
    Street2:st2,
    City:city,
    Zip:zip,
    Country:country,
    Date:date.toUTCString(),
    Type:_type
   };
  };
  defaultCourse=(o=(p=function(a$5,a$6)
  {
   return a$6[0]===courseId;
  },function(l)
  {
   return Seq.tryFindIndex(function($1)
   {
    return p($1[0],$1[1]);
   },l);
  }(events)),Operators.DefaultArg(o,-1));
  return Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(toBookingForm,9)),(f=Enhance$3.WithValidationIcon((a=Controls$2.Input(nullToEmpty(booker.Company)),Data.Validator().IsNotEmpty("You must specify a company name",a))),Enhance$3.WithTextLabel("Company",f))),(f$1=function(v)
  {
   return v<<0;
  },function(f$10)
  {
   return Formlet$1.Map(f$1,f$10);
  }((f$2=Enhance$3.WithValidationIcon((x$1=Controls$2.Input("1"),(Data.Validator().IsInt("You must specify a number of attendees"))(x$1))),Enhance$3.WithTextLabel("Number of attendees",f$2))))),(f$3=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(booker.Street1),Data.Validator().IsNotEmpty("You must specify a street address",a$1))),Enhance$3.WithTextLabel("Street 1",f$3))),(f$4=Controls$2.Input(nullToEmpty(booker.Street2)),Enhance$3.WithTextLabel("Street 2",f$4))),(f$5=Enhance$3.WithValidationIcon((a$2=Controls$2.Input(nullToEmpty(booker.City)),Data.Validator().IsNotEmpty("You must specify a city",a$2))),Enhance$3.WithTextLabel("City",f$5))),(f$6=Enhance$3.WithValidationIcon((a$3=Controls$2.Input(booker.Zip),Data.Validator().IsNotEmpty("You must specify a zip code",a$3))),Enhance$3.WithTextLabel("Zip code",f$6))),(f$7=Enhance$3.WithValidationIcon((a$4=Controls$2.Input(booker.Country),Data.Validator().IsNotEmpty("You must specify a country",a$4))),Enhance$3.WithTextLabel("Country",f$7))),(f$8=Enhance$3.WithValidationIcon((f$9=function(el)
  {
   var x$2;
   return Operators$1.add((x$2=[Attr.Attr().NewAttr("style","padding:5px")],Tags$1.Tags().NewTag("div",x$2)),[el]);
  },function(f$10)
  {
   return Formlet$1.MapElement(f$9,f$10);
  }(Controls$4.Datepicker(null)))),Enhance$3.WithTextLabel("Date",f$8))),(b=Formlet$1.Do(),b.Delay(function()
  {
   var f$10;
   return b.Bind((f$10=Controls$2.Select(0,List.ofArray([["Training Course",{
    $:0
   }],["Custom Course",{
    $:1
   }],["Consultation",{
    $:2
   }]])),Enhance$3.WithTextLabel("Type of Onsite Work",f$10)),function(a$5)
   {
    var f$11,a$6,f$12,x$2,f$13,a$7,f$14,x$3,f$15,a$8;
    return b.Bind(a$5.$==1?Data.$(Data.$(Formlet$1.Return(function(description)
    {
     return function(days)
     {
      return{
       $:1,
       $0:description,
       $1:days<<0
      };
     };
    }),(f$11=Enhance$3.WithValidationIcon((a$6=Controls$2.TextArea(""),Data.Validator().IsNotEmpty("Enter your desired topics",a$6))),Enhance$3.WithTextLabel("Desired Topics",f$11))),(f$12=Enhance$3.WithValidationIcon((x$2=Controls$2.Input(""),(Data.Validator().IsInt("Add the number of days of your desired onsite course"))(x$2))),Enhance$3.WithTextLabel("Duration (in days)",f$12))):a$5.$==2?Data.$(Data.$(Formlet$1.Return(function(description)
    {
     return function(days)
     {
      return{
       $:2,
       $0:description,
       $1:days<<0
      };
     };
    }),(f$13=Enhance$3.WithValidationIcon((a$7=Controls$2.TextArea(""),Data.Validator().IsNotEmpty("Enter a brief description of the problems you are facing",a$7))),Enhance$3.WithTextLabel("Desired Topics",f$13))),(f$14=Enhance$3.WithValidationIcon((x$3=Controls$2.Input(""),(Data.Validator().IsInt("Add the number of days of your desired onsite consultation"))(x$3))),Enhance$3.WithTextLabel("Duration (in days)",f$14))):Data.$(Formlet$1.Return(function(t)
    {
     return{
      $:0,
      $0:t[1],
      $1:t[0]
     };
    }),(f$15=Enhance$3.WithValidationIcon((a$8=function(id)
    {
     return id>0;
    },function(a$9)
    {
     return Data.Validator().Is(function($1)
     {
      return a$8($1[0],$1[1]);
     },"Select the course you are interested in",a$9);
    }(Controls$2.Select(defaultCourse,events)))),Enhance$3.WithTextLabel("IntelliFactory Course",f$15))),function(a$9)
    {
     return b.Return(a$9);
    });
   });
  })));
 };
 Client$12.ScheduledBookingForm=function(eventId,booker)
 {
  var toAttendee,toBookingInfo,attendeeForm,a,f,g,f$1,f$2,x,f$3,a$1,f$4,a$2,f$5,x$1,f$6,l,i,events,x$2,m,defEvent,a$3,p,f$7,f$8,a$4;
  toAttendee=function(fn,ln,em,ph)
  {
   return{
    FirstName:fn,
    LastName:ln,
    Email:em,
    Phone:ph
   };
  };
  toBookingInfo=function(evId,evTitle,evDate,evLoc)
  {
   return function(attendees)
   {
    return{
     EventId:evId,
     Event:evTitle,
     Date:evDate,
     Location:evLoc,
     Attendees:attendees
    };
   };
  };
  attendeeForm=Enhance$3.WithValidationIcon((a=(f=function(v)
  {
   return!v;
  },(g=function(l$1)
  {
   return l$1.$==0;
  },function(x$3)
  {
   return f(g(x$3));
  })),function(a$5)
  {
   return Data.Validator().Is(a,"You must add at least one attendee",a$5);
  }((f$1=Enhance$3.Many((f$2=(x=Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(toAttendee,4)),(f$3=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(booker.FirstName),Data.Validator().IsNotEmpty("You must specify a first name",a$1))),Enhance$3.WithTextLabel("First Name",f$3))),(f$4=Enhance$3.WithValidationIcon((a$2=Controls$2.Input(booker.LastName),Data.Validator().IsNotEmpty("You must specify a last name",a$2))),Enhance$3.WithTextLabel("Last Name",f$4))),(f$5=Enhance$3.WithValidationIcon((x$1=Controls$2.Input(booker.Email),(Data.Validator().IsEmail("You must specify a valid email"))(x$1))),Enhance$3.WithTextLabel("Email",f$5))),(f$6=Controls$2.Input(booker.Phone),Enhance$3.WithTextLabel("Phone Number",f$6))),(l=(i=LabelConfiguration.get_Default(),LabelConfiguration.New({
   $:1
  },i.VerticalAlign,i.Placement)),Enhance$3.WithLabelConfiguration(l,x))),Enhance$3.WithLegend("Attendee",f$2))),Enhance$3.WithLegend("Attendees",f$1)))));
  events=(x$2=(m=function(te)
  {
   return[te.Date+" ("+te.LocationCity+") "+te.CourseTitle,[te.EventId,te.CourseTitle,te.Date,te.LocationCity]];
  },function(l$1)
  {
   return List.map(m,l$1);
  }((new AjaxRemotingProvider.New()).Sync("FPish:FPish.TrainingBookingInternals+Server.ReadTrainingEvents:-1383970780",[]))),new List.T({
   $:1,
   $0:["Select",[-1,"","",""]],
   $1:x$2
  }));
  defEvent=(a$3=(p=function(a$5,a$6)
  {
   return a$6[0]===eventId;
  },function(l$1)
  {
   return Seq.tryFindIndex(function($1)
   {
    return p($1[0],$1[1]);
   },l$1);
  }(events)),(a$3!=null?a$3.$==1:false)?a$3.$0:-1);
  return Data.$(Data.$(Formlet$1.Return(function($1)
  {
   return toBookingInfo($1[0],$1[1],$1[2],$1[3]);
  }),(f$7=(f$8=Enhance$3.WithValidationIcon((a$4=function(id)
  {
   return id>-1;
  },function(a$5)
  {
   return Data.Validator().Is(function($1)
   {
    return a$4($1[0],$1[1],$1[2],$1[3]);
   },"You must select an event",a$5);
  }(Controls$2.Select(defEvent,events)))),Enhance$3.WithTextLabel("Event",f$8)),Enhance$3.WithLegend("Training Event",f$7))),attendeeForm);
 };
 ScheduledTrainingBooking=FPish.ScheduledTrainingBooking=Runtime.Class({
  get_Body:function()
  {
   return Client$12.RenderScheduledTBForm(this.EventId,this.User,this.SuccessUrl);
  }
 },Web.Control,ScheduledTrainingBooking);
 OnSiteTrainingBooking=FPish.OnSiteTrainingBooking=Runtime.Class({
  get_Body:function()
  {
   return Client$12.RenderOnSiteTBForm(this.CourseId,this.User,this.SuccessUrl);
  }
 },Web.Control,OnSiteTrainingBooking);
 OnlineTrainingBooking=FPish.OnlineTrainingBooking=Runtime.Class({
  get_Body:function()
  {
   return Client$12.RenderOnlineTBForm(this.EventId,this.User,this.SuccessUrl);
  }
 },Web.Control,OnlineTrainingBooking);
 PastOnlineTrainingBooking=FPish.PastOnlineTrainingBooking=Runtime.Class({
  get_Body:function()
  {
   return Client$12.RenderPastOnlineTBForm(this.EventId,this.User,this.SuccessUrl);
  }
 },Web.Control,PastOnlineTrainingBooking);
 OrderSummary=Client$13.OrderSummary=Runtime.Class({
  get_Body:function()
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12,x$13,x$14,x$15,x$16,x$17,x$18,x$19,x$20,x$21,x$22,x$23,x$24,x$25,x$26;
   return Tabs.New2(List.ofArray([["Summary",(x=[(x$1=[(x$2=[(x$3=[Tags$1.Tags().text("Order number")],Tags$1.Tags().NewTag("td",x$3)),(x$4=[(x$5=this.OrderInfo.Code,Tags$1.Tags().text(x$5))],Tags$1.Tags().NewTag("td",x$4))],Tags$1.Tags().NewTag("tr",x$2)),(x$6=[(x$7=[Tags$1.Tags().text("Course title")],Tags$1.Tags().NewTag("td",x$7)),(x$8=[(x$9=this.OrderInfo.Title,Tags$1.Tags().text(x$9))],Tags$1.Tags().NewTag("td",x$8))],Tags$1.Tags().NewTag("tr",x$6)),(x$10=[(x$11=[Tags$1.Tags().text("Course type")],Tags$1.Tags().NewTag("td",x$11)),(x$12=[(x$13=this.OrderInfo.Type.get_DisplayString(),Tags$1.Tags().text(x$13))],Tags$1.Tags().NewTag("td",x$12))],Tags$1.Tags().NewTag("tr",x$10)),(x$14=[(x$15=[Tags$1.Tags().text("Date")],Tags$1.Tags().NewTag("td",x$15)),(x$16=[(x$17=this.DateString,Tags$1.Tags().text(x$17))],Tags$1.Tags().NewTag("td",x$16))],Tags$1.Tags().NewTag("tr",x$14)),(x$18=[(x$19=[Tags$1.Tags().text("Location")],Tags$1.Tags().NewTag("td",x$19)),(x$20=[(x$21=this.LocationString,Tags$1.Tags().text(x$21))],Tags$1.Tags().NewTag("td",x$20))],Tags$1.Tags().NewTag("tr",x$18)),(x$22=[(x$23=[(x$24=this.PriceInfo,Tags$1.Tags().text(x$24))],Tags$1.Tags().NewTag("td",x$23)),(x$25=[(x$26=this.CalculatedPrice,Tags$1.Tags().text(x$26))],Tags$1.Tags().NewTag("td",x$25))],Tags$1.Tags().NewTag("tr",x$22))],Tags$1.Tags().NewTag("table",x$1))],Tags$1.Tags().NewTag("div",x))]]));
  }
 },Web.Control,OrderSummary);
 Client$13.showPrice=function(event)
 {
  return Global.String(event.Price)+" "+event.Currency;
 };
 Client$13.CoursesSummaries=function(baseUrl)
 {
  var x,formatCourse;
  x=Tags$1.Tags().NewTag("p",[]);
  formatCourse=function(course)
  {
   var linkCourse,desc,x$1,x$2,x$3,x$4,x$5,x$6;
   linkCourse=baseUrl+Global.String(course.CourseId);
   desc=Tags$1.Tags().NewTag("p",[]);
   desc.set_Html(course.CourseAbstract);
   return Operators$1.add((x$1=[Attr.Attr().NewAttr("class","postborder")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=[Operators$1.add((x$3=[Attr.Attr().NewAttr("href",linkCourse),Attr.Attr().NewAttr("alt","Course details")],Tags$1.Tags().NewTag("a",x$3)),[(x$4=[Attr.Attr().NewAttr("src","/images/button-details.png"),Attr.Attr().NewAttr("alt","Details")],Tags$1.Tags().NewTag("img",x$4))]),Operators$1.add((x$5=[Attr.Attr().NewAttr("href",linkCourse),Attr.Attr().NewAttr("alt",course.CourseTitle)],Tags$1.Tags().NewTag("a",x$5)),[(x$6=course.CourseTitle,Tags$1.Tags().text(x$6))])],Tags$1.Tags().NewTag("p",x$2)),desc]);
  };
  return Concurrency.Delay(function()
  {
   var x$1;
   x$1=(new AjaxRemotingProvider.New()).Async("FPish:FPish.TrainingsServer.GetCoursesAsync_All:152887157",[]);
   return Concurrency.Bind(x$1,function(a)
   {
    var x$2;
    return Concurrency.Return((x$2=List.map(formatCourse,a),Tags$1.Tags().NewTag("div",x$2)));
   });
  });
 };
 Client$13.CourseListing=function(baseUrl)
 {
  var formatCourse;
  formatCourse=function(course)
  {
   var linkCourse,desc,x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9;
   linkCourse=baseUrl+Global.String(course.CourseId);
   desc=Tags$1.Tags().NewTag("p",[]);
   desc.set_Html(course.CourseAbstract);
   x=[(x$1=[Operators$1.add((x$2=[Attr.Attr().NewAttr("href",linkCourse),Attr.Attr().NewAttr("alt",course.CourseTitle)],Tags$1.Tags().NewTag("a",x$2)),[(x$3=course.CourseTitle,Tags$1.Tags().text(x$3))]),course.IsInstructorLed?(x$4=[Attr.Attr().NewAttr("src","/images/button-1.png"),Attr.Attr().NewAttr("alt","Scheduled"),Attr.Attr().NewAttr("class","course-icon")],Tags$1.Tags().NewTag("img",x$4)):(x$5=[Attr.Attr().NewAttr("class","course-icon-empty")],Tags$1.Tags().NewTag("div",x$5)),course.IsOnsite?(x$6=[Attr.Attr().NewAttr("src","/images/button-2.png"),Attr.Attr().NewAttr("alt","Onsite"),Attr.Attr().NewAttr("class","course-icon")],Tags$1.Tags().NewTag("img",x$6)):(x$7=[Attr.Attr().NewAttr("class","course-icon-empty")],Tags$1.Tags().NewTag("div",x$7)),course.IsVirtual?(x$8=[Attr.Attr().NewAttr("src","/images/button-3.png"),Attr.Attr().NewAttr("alt","Onsite"),Attr.Attr().NewAttr("class","course-icon")],Tags$1.Tags().NewTag("img",x$8)):(x$9=[Attr.Attr().NewAttr("class","course-icon-empty")],Tags$1.Tags().NewTag("div",x$9))],Tags$1.Tags().NewTag("h3",x$1)),desc];
   return Tags$1.Tags().NewTag("li",x);
  };
  return Concurrency.Delay(function()
  {
   var x;
   x=(new AjaxRemotingProvider.New()).Async("FPish:FPish.TrainingsServer.GetCoursesAsync_All:152887157",[]);
   return Concurrency.Bind(x,function(a)
   {
    var courses,x$1;
    return Concurrency.Return((courses=List.map(formatCourse,a),Operators$1.add((x$1=[Attr.Attr().NewAttr("class","course-listing")],Tags$1.Tags().NewTag("ul",x$1)),courses)));
   });
  });
 };
 CourseSummaries=FPish.CourseSummaries=Runtime.Class({
  get_Body:function()
  {
   return Client.LoadingPane(Client$13.CoursesSummaries(this.BaseUrl));
  }
 },Web.Control,CourseSummaries);
 Controls$1.PayPalButton=function(notifyUrl,label,cancelLink,paypalUrl,businessName,ticket,order,client)
 {
  var price,hiddens,m,loadPanel,loadImg,x,x$1,x$2,x$3,x$4;
  price=client.get_MustPayVAT()?order.Price*1.25:order.Price;
  hiddens=(m=function(name,value)
  {
   var x$5;
   x$5=[Attr.Attr().NewAttr("type","hidden"),Attr.Attr().NewAttr("name",name),Attr.Attr().NewAttr("value",value)];
   return Tags$1.Tags().NewTag("input",x$5);
  },function(l)
  {
   return List.map(function($1)
   {
    return m($1[0],$1[1]);
   },l);
  }(List.ofArray([["cmd","_cart"],["upload","1"],["business",businessName],["item_name_1",order.Title],["item_number_1",order.Code],["quantity_1","1"],["amount_1",Global.String(price)],["no_shipping","0"],["no_note","1"],["currency_code",order.Currency],["lc","HU"],["bn","PP-BuyNowBF"],["custom",client.Email],["return",ticket.ReturnUrl],["rm",ticket.ReturnMode],["invoice",ticket.VerificationCode],["notify_url",notifyUrl]])));
  loadPanel=Tags$1.Tags().NewTag("div",[]);
  loadImg=Client.LoadingImage();
  return Operators$1.add((x=[Attr.Attr().NewAttr("action",paypalUrl),Attr.Attr().NewAttr("method","post")],Tags$1.Tags().NewTag("form",x)),List.append(hiddens,List.ofArray([(x$1=Client$3.Button("Cancel",cancelLink,Server.Large()),(x$2=function()
  {
   return loadPanel.AppendI(loadImg);
  },function(a)
  {
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return x$2($1,$2);
    };
   },a);
  }(x$1),x$1)),(x$3=Operators$1.add(Controls$1.ElementButton(label),[Attr.Attr().NewAttr("style","margin-left: 20px;")]),(x$4=function()
  {
   return loadPanel.AppendI(loadImg);
  },function(a)
  {
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return x$4($1,$2);
    };
   },a);
  }(x$3),x$3)),loadPanel])));
 };
 Controls$1.PayPalButtonCredit=function(bInfo)
 {
  var hiddens,m,loadPanel,loadImg,buttonClass,elems,x;
  hiddens=(m=function(name,value)
  {
   var x$1;
   x$1=[Attr.Attr().NewAttr("type","hidden"),Attr.Attr().NewAttr("name",name),Attr.Attr().NewAttr("value",value)];
   return Tags$1.Tags().NewTag("input",x$1);
  },function(l)
  {
   return List.map(function($1)
   {
    return m($1[0],$1[1]);
   },l);
  }(List.ofArray([["cmd","_cart"],["upload","1"],["business",bInfo.BusinessName],["item_name_1",bInfo.TicketInfo.Title],["item_number_1",bInfo.TicketInfo.Code],["quantity_1","1"],["amount_1",Global.String(bInfo.TicketInfo.Price)],["no_shipping","0"],["no_note","1"],["currency_code",bInfo.TicketInfo.Currency],["lc","HU"],["bn","PP-BuyNowBF"],["custom",bInfo.ClientEmail],["return",bInfo.ReturnUrl],["rm",bInfo.ReturnMode],["invoice",bInfo.TicketInfo.VerificationCode],["notify_url",bInfo.NotifyUrl]])));
  loadPanel=Tags$1.Tags().NewTag("div",[]);
  loadImg=Client.LoadingImage();
  buttonClass=Server.Large();
  elems=List.ofSeq(Seq.delay(function()
  {
   return Seq.append(hiddens,Seq.delay(function()
   {
    var x$1,x$2;
    return Seq.append([(x$1=Controls$1.LargeSubmitButton(bInfo.Label),(x$2=function()
    {
     return loadPanel.AppendI(loadImg);
    },function(a)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$2($1,$2);
      };
     },a);
    }(x$1),x$1))],Seq.delay(function()
    {
     var x$3,x$4;
     return Seq.append([(x$3=Client$3.Button("Cancel",bInfo.CancelLink,buttonClass),(x$4=function()
     {
      return loadPanel.AppendI(loadImg);
     },function(a)
     {
      EventsPervasives.Events().OnClick(function($1)
      {
       return function($2)
       {
        return x$4($1,$2);
       };
      },a);
     }(x$3),x$3))],Seq.delay(function()
     {
      return[loadPanel];
     }));
    }));
   }));
  }));
  return Operators$1.add((x=[Attr.Attr().NewAttr("action",bInfo.PaypalUrl),Attr.Attr().NewAttr("method","post")],Tags$1.Tags().NewTag("form",x)),elems);
 };
 Controls$1.LargeSubmitButton=function(label)
 {
  var x;
  x=[Attr.Attr().NewAttr("type","submit"),Attr.Attr().NewAttr("value",label),Attr.Attr().NewAttr("class","buttonPro blue space-top space-bottom")];
  return Tags$1.Tags().NewTag("input",x);
 };
 Controls$1.ElementButton=function(label)
 {
  var x;
  x=[Attr.Attr().NewAttr("type","submit"),Attr.Attr().NewAttr("value",label),Attr.Attr().NewAttr("class","submitButton"+" buttonPro light_blue small")];
  return Tags$1.Tags().NewTag("input",x);
 };
 PayPalButton=PayPal.PayPalButton=Runtime.Class({
  get_Body:function()
  {
   return Controls$1.PayPalButton(this.NotifyUrl,this.Label,this.CancelLink,this.PaypalUrl,this.BusinessName,this.Ticket.$0,this.Order.$0,this.User.$0);
  }
 },Web.Control,PayPalButton);
 LatestTweetsControl=Client$14.LatestTweetsControl=Runtime.Class({
  get_Body:function()
  {
   var $this,x,x$1,f;
   $this=this;
   x=(x$1=[Attr.Attr().NewAttr("class","tweets")],Tags$1.Tags().NewTag("div",x$1));
   f=function(panel)
   {
    var v,f$1,b;
    v=(f$1=function()
    {
    },function(f$2)
    {
     return Formlet$1.Run(f$1,f$2);
    }((b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet.LoadingFormlet(Client$4.LatestTweets(panel,$this.twitterUser)),function()
     {
      return b.Return();
     });
    }))));
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,LatestTweetsControl);
 MakeAuthorControl=Client$14.MakeAuthorControl=Runtime.Class({
  get_Body:function()
  {
   var $this,x,x$1,_this,x$2;
   $this=this;
   x=Operators$1.add((x$1=[(_this=Attr.Attr(),_this.NewAttr("class",Server.Small()))],Tags$1.Tags().NewTag("a",x$1)),[Tags$1.Tags().text("Make author")]);
   x$2=function(e)
   {
    return Concurrency.Start(Concurrency.Delay(function()
    {
     var x$3;
     x$3=(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.CreateAuthorProfileByAdminByUsername:22339411",[$this.username,""]);
     return Concurrency.Bind(x$3,function(a)
     {
      var element;
      return a.$==0?((element=e.get_Body(),Global.jQuery(element)).remove(),Concurrency.Return(null)):Concurrency.Return(null);
     });
    }),null);
   };
   (function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$2($1,$2);
     };
    },a);
   }(x));
   return x;
  }
 },Web.Control,MakeAuthorControl);
 DeveloperSearchResultPanelControl=Client$15.DeveloperSearchResultPanelControl=Runtime.Class({
  get_Body:function()
  {
   return Client$15.DeveloperSearchResultPanel(this.args);
  }
 },Web.Control,DeveloperSearchResultPanelControl);
 DeveloperSearchControl=Client$15.DeveloperSearchControl=Runtime.Class({
  get_Body:function()
  {
   return Client$15.DeveloperSearchForm(this.args);
  }
 },Web.Control,DeveloperSearchControl);
 Client$15.DeveloperSearchResultPanel=function(args)
 {
  var x;
  x=List.ofSeq(Seq.delay(function()
  {
   return Seq.append([Client$15.DeveloperSearchForm({
    DeveloperSearch:args.DeveloperSearch,
    SearchUrl:args.SearchUrl
   })],Seq.delay(function()
   {
    var x$1,x$2,x$3,x$4,x$5,x$6,x$7;
    return[(x$1=[(x$2=[Tags$1.Tags().NewTag("tr",[]),(x$3=[(x$4=[Operators$1.add((x$5=[Attr.Attr().NewAttr("class","tags-chart")],Tags$1.Tags().NewTag("div",x$5)),[Client$15.TagsChart(args)])],Tags$1.Tags().NewTag("td",x$4)),(x$6=[Operators$1.add((x$7=[Attr.Attr().NewAttr("class","geo-map")],Tags$1.Tags().NewTag("div",x$7)),[Client$15.DevLocationMap(args)])],Tags$1.Tags().NewTag("td",x$6))],Tags$1.Tags().NewTag("tr",x$3))],Tags$1.Tags().NewTag("tbody",x$2))],Tags$1.Tags().NewTag("table",x$1))];
   }));
  }));
  return Tags$1.Tags().NewTag("div",x);
 };
 Client$15.TagsChart=function(args)
 {
  var x,f;
  x=Tags$1.Tags().NewTag("div",[]);
  f=function(container)
  {
   var arrData,x$1,c,chartData,data,v,v$1,v$2,a,visualization$1,ev,v$3,r,r$1;
   arrData=Arrays.ofSeq((x$1=args.TagFrequencies,(c=Operators.Min(10,List.length(args.TagFrequencies)),Seq.take(c,x$1))));
   chartData=(data=new visualization.DataTable(),(v=data.addColumn("string","Tag"),v$1=data.addColumn("number","Number of developers"),v$2=data.addRows(Arrays.length(arrData)),a=function(rowIx,tagFreq)
   {
    data.setValue(rowIx,0,tagFreq.Label);
    return data.setValue(rowIx,1,tagFreq.Count);
   },function(a$1)
   {
    Arrays.iteri(a,a$1);
   }(arrData),data));
   visualization$1=new visualization.ColumnChart(container.Dom);
   ev=ColumnChart.Select(visualization$1);
   v$3=Util.subscribeTo(ev,function()
   {
    var sels,row,tag,x$2,i,T,c$1;
    sels=visualization$1.getSelection();
    row=Arrays.get(sels,0).row;
    tag=chartData.getValue(row,0);
    container.AppendI((x$2=Formlet$1.Return((i=args.DeveloperSearch,(T=new List.T({
     $:1,
     $0:tag,
     $1:args.DeveloperSearch.Tags
    }),DeveloperSearch.New(i.SearchTerm,i.Location,i.BatchIx,T,i.IsSortByName)))),(c$1={
     PostUrl:{
      $:1,
      $0:args.SearchUrl
     },
     ParameterName:"search",
     EncodingType:null
    },Enhance$3.WithJsonPost(c$1,x$2))));
   });
   visualization$1.draw(chartData,(r={},r.width=(Client$15.MapChartDimension())[0],r.height=(Client$15.MapChartDimension())[1],r.legend=(r$1={},r$1.position="none",r$1),r));
  };
  (function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x));
  return x;
 };
 Client$15.DevLocationMap=function(args)
 {
  var items,data,data$1,v,v$1,v$2,v$3,v$4,a,x,f;
  items=Arrays.ofSeq(args.DeveloperLocations);
  data=(data$1=new visualization.DataTable(),(v=data$1.addRows(Arrays.length(items)),v$1=data$1.addColumn("number","LATITUDE","Latitude"),v$2=data$1.addColumn("number","LONGITUDE","Longitude"),v$3=data$1.addColumn("number","Number of Developers","Value"),v$4=data$1.addColumn("string","HOVER","HoverText"),a=function(rowIx,item)
  {
   data$1.setValue(rowIx,0,item.Latitude);
   data$1.setValue(rowIx,1,item.Longitude);
   data$1.setValue(rowIx,2,item.Frequency);
   return data$1.setValue(rowIx,3,item.Location);
  },function(a$1)
  {
   Arrays.iteri(a,a$1);
  }(items),data$1));
  x=Tags$1.Tags().NewTag("div",[]);
  f=function(container)
  {
   var visualization$1,r,r$1;
   visualization$1=new visualization.GeoChart(container.Dom);
   visualization$1.draw(data,(r={},r.width=(Client$15.MapChartDimension())[0],r.height=(Client$15.MapChartDimension())[1],r.displayMode="markers",r.colorAxis=(r$1={},r$1.colors=["#FF8747","#FFB581","#c06000"],r$1),r));
  };
  (function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x));
  return x;
 };
 Client$15.DeveloperSearchForm=function(args)
 {
  var search,searchUrl,termF,b,locF,b$1,c,f;
  search=args.DeveloperSearch;
  searchUrl=args.SearchUrl;
  termF=(b=Formlet$1.Do(),b.Delay(function()
  {
   var f$1,m;
   return b.Bind((f$1=Controls$2.Input((m=search.SearchTerm,m==null?"":m.$0)),Enhance$3.WithTextLabel("Search terms",f$1)),function(a)
   {
    return b.Bind(Controls.SmallButton("Search"),function()
    {
     var i;
     return b.Return((i=DeveloperSearch.get_Default(),DeveloperSearch.New(a===""?null:{
      $:1,
      $0:a
     },i.Location,i.BatchIx,i.Tags,i.IsSortByName)));
    });
   });
  }));
  locF=(b$1=Formlet$1.Do(),b$1.Delay(function()
  {
   var f$1,m;
   return b$1.Bind((f$1=Controls$2.Input((m=search.Location,m==null?"":m.$0)),Enhance$3.WithTextLabel("Location",f$1)),function(a)
   {
    return b$1.Bind(Controls.SmallButton("Search"),function()
    {
     var i;
     return b$1.Return((i=DeveloperSearch.get_Default(),DeveloperSearch.New(i.SearchTerm,a===""?null:{
      $:1,
      $0:a
     },i.BatchIx,i.Tags,i.IsSortByName)));
    });
   });
  }));
  c={
   PostUrl:{
    $:1,
    $0:searchUrl
   },
   ParameterName:"search",
   EncodingType:null
  };
  return function(f$1)
  {
   return Enhance$3.WithJsonPost(c,f$1);
  }((f=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","dev-search")],Tags$1.Tags().NewTag("div",x)),[el]);
  },function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }(Enhance$3.WithFormContainer(Formlet$1.Horizontal(Formlet$1.Choose(List.ofArray([termF,locF])))))));
 };
 Client$15.MapChartDimension=function()
 {
  SC$3.$cctor();
  return SC$3.MapChartDimension;
 };
 SC$3.$cctor=Runtime.Cctor(function()
 {
  SC$3.MapChartDimension=[331,230];
  SC$3.$cctor=Global.ignore;
 });
 FullTextSearch=Widget$1.FullTextSearch=Runtime.Class({
  get_Body:function()
  {
   var $this,defaultSearchTerm,m,x,b;
   $this=this;
   defaultSearchTerm=(m=this.defaultSearchTerm,(m!=null?m.$==1:false)?m.$0:"");
   x=[(b=Formlet$1.Do(),b.Delay(function()
   {
    var x$1,f,b$1;
    return b.Bind(Enhance$1.SubmitOnEnter(Enhance$3.WithFormContainer((x$1=(f=Controls$2.Input(defaultSearchTerm),Enhance$3.WithCssClass("side-search-input",f)),(b$1=FormButtonConfiguration.New({
     $:1,
     $0:"Search"
    },FormButtonConfiguration.get_Default().Style,{
     $:1,
     $0:Server.Small()
    }),Enhance$3.WithCustomSubmitButton(b$1,x$1))))),function(a)
    {
     var url,_this,repl,url$1;
     return Strings.Trim(a)!==""?(url=(_this=$this.baseUrl,(repl=(Widget$1.escapeUrl())(a),Strings.Replace(_this,"replace-search-here-ifpish",repl))),Global.location.href=url,b.Return()):(url$1=$this.defaultUrl,Global.location.href=url$1,b.Return());
    });
   }))];
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,FullTextSearch);
 TopMenuSearchForm=Widget$1.TopMenuSearchForm=Runtime.Class({
  SubmitSearch:function(url,searchTerm)
  {
   var u,repl;
   if(Strings.Trim(searchTerm)!=="")
    {
     u=(repl=(Widget$1.escapeUrl())(searchTerm),Strings.Replace(url,"replace-search-here-ifpish",repl));
     Global.location.href=u;
    }
  },
  get_Body:function()
  {
   var $this,clas,input,x,dropButton,x$1,x$2,dropMenu,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12,x$13,x$14,x$15,x$16,defaultOk,x$17,x$18,x$19,x$20,x$21,x$22;
   $this=this;
   clas=Server.Small();
   input=(x=[Attr.Attr().NewAttr("value",this.DefaultSearchTerm)],Tags$1.Tags().NewTag("input",x));
   dropButton=Operators$1.add((x$1=[Attr.Attr().NewAttr("class",clas)],Tags$1.Tags().NewTag("button",x$1)),[(x$2=[Attr.Attr().NewAttr("src","/images/search-drop.png")],Tags$1.Tags().NewTag("img",x$2))]);
   dropMenu=Operators$1.add((x$3=[Attr.Attr().NewAttr("style","display:none;")],Tags$1.Tags().NewTag("div",x$3)),[(x$4=[(x$5=[(x$6=(x$7=[Tags$1.Tags().text("All")],Tags$1.Tags().NewTag("a",x$7)),(x$8=function()
   {
    return $this.SubmitSearch($this.AllUrl,input.get_Value());
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$8($1,$2);
     };
    },a);
   }(x$6),x$6))],Tags$1.Tags().NewTag("li",x$5)),(x$9=[(x$10=(x$11=[Tags$1.Tags().text("Topics")],Tags$1.Tags().NewTag("a",x$11)),(x$12=function()
   {
    return $this.SubmitSearch($this.TopicsUrl,input.get_Value());
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$12($1,$2);
     };
    },a);
   }(x$10),x$10))],Tags$1.Tags().NewTag("li",x$9)),(x$13=[(x$14=(x$15=[Tags$1.Tags().text("Developers")],Tags$1.Tags().NewTag("a",x$15)),(x$16=function()
   {
    return $this.SubmitSearch($this.DevelopersUrl,input.get_Value());
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$16($1,$2);
     };
    },a);
   }(x$14),x$14))],Tags$1.Tags().NewTag("li",x$13))],Tags$1.Tags().NewTag("ul",x$4))]);
   defaultOk=Operators$1.add((x$17=[Attr.Attr().NewAttr("class",clas+" ok")],Tags$1.Tags().NewTag("button",x$17)),[Tags$1.Tags().text("Search")]);
   return Operators$1.add((x$18=[Attr.Attr().NewAttr("class","topmenu-search")],Tags$1.Tags().NewTag("div",x$18)),[input,((x$19=function()
   {
    return $this.SubmitSearch($this.AllUrl,input.get_Value());
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$19($1,$2);
     };
    },a);
   })(defaultOk),defaultOk),Operators$1.add((x$20=[Attr.Attr().NewAttr("class","drop")],Tags$1.Tags().NewTag("span",x$20)),[((x$21=function()
   {
    var element;
    return(element=dropMenu.get_Body(),Global.jQuery(element)).toggle();
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$21($1,$2);
     };
    },a);
   })(dropButton),dropButton),((x$22=function()
   {
    var element;
    return(element=dropMenu.get_Body(),Global.jQuery(element)).hide();
   },function(a)
   {
    EventsPervasives.Events().OnMouseLeave(function($1)
    {
     return function($2)
     {
      return x$22($1,$2);
     };
    },a);
   })(dropMenu),dropMenu)])]);
  }
 },Web.Control,TopMenuSearchForm);
 Widget$1.escapeUrl=function()
 {
  SC$4.$cctor();
  return SC$4.escapeUrl;
 };
 SC$4.$cctor=Runtime.Cctor(function()
 {
  var m,f,g,g$1;
  SC$4.escapeUrl=(m=(f=(g=function(s)
  {
   return Global.encodeURI(s);
  },function(x)
  {
   return g(String.fromCharCode(x));
  }),(g$1=function(a)
  {
   return a==="+"?"~2b":a==="-"?"~2d":a==="*"?"~2a":a==="/"?"~2f":a==="."?"~2e":a==="_"?"~5f":a==="@"?"~40":a==="#"?"~23":a==="?"?"~3f":a==="~"?"~7e":a==="&"?"~26":(new Global.RegExp("%[0-9a-z][0-9a-z]","i")).test(a)?Strings.Replace(a,"%","~"):a;
  },function(x)
  {
   return g$1(f(x));
  })),function(s)
  {
   return Strings.collect(m,s);
  });
  SC$4.$cctor=Global.ignore;
 });
 AdminForm=Client$16.AdminForm=Runtime.Class({
  get_Body:function()
  {
   var m,zone,adminsForm,x,x$1,x$2;
   m=this.Zone;
   return(m!=null?m.$==1:false)?(zone=m.$0,(adminsForm=Client$3.AddRemoveAdminsForm(function(name)
   {
    return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.AddAdmin:-746196229",[zone.Tag,name]);
   },function(name)
   {
    return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.RemoveAdmin:-746196229",[zone.Tag,name]);
   },zone.AdminUsernames),Tabs.New2(List.ofArray([["Zone information",(x=[Client$16.InfoForm(zone.Tag,zone.Name,zone.PageContentHtml)],Tags$1.Tags().NewTag("div",x))],["Features",(x$1=[Client$16.FeaturesForm(zone)],Tags$1.Tags().NewTag("div",x$1))],["Administrators",Tags$1.Tags().NewTag("div",[adminsForm])]])))):(x$2=[Tags$1.Tags().text("Error: No such zone.")],Tags$1.Tags().NewTag("div",x$2));
  }
 },Web.Control,AdminForm);
 Client$16.FeaturesForm=function(zone)
 {
  var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12,x$13,x$14,x$15,x$16,x$17,x$18,x$19,x$20,x$21,x$22;
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","zone-admin-features")],Tags$1.Tags().NewTag("table",x)),[(x$1=[(x$2=[(x$3=[Tags$1.Tags().text("Forum")],Tags$1.Tags().NewTag("td",x$3)),(x$4=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasForum:-103592778",[z,v]);
  },zone.Tag,zone.HasForum)],Tags$1.Tags().NewTag("td",x$4))],Tags$1.Tags().NewTag("tr",x$2)),(x$5=[(x$6=[Tags$1.Tags().text("Events")],Tags$1.Tags().NewTag("td",x$6)),(x$7=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasEvents:-103592778",[z,v]);
  },zone.Tag,zone.HasEvents)],Tags$1.Tags().NewTag("td",x$7))],Tags$1.Tags().NewTag("tr",x$5)),(x$8=[(x$9=[Tags$1.Tags().text("Courses")],Tags$1.Tags().NewTag("td",x$9)),(x$10=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasCourses:-103592778",[z,v]);
  },zone.Tag,zone.HasCourses)],Tags$1.Tags().NewTag("td",x$10))],Tags$1.Tags().NewTag("tr",x$8)),(x$11=[(x$12=[Tags$1.Tags().text("Blog entries")],Tags$1.Tags().NewTag("td",x$12)),(x$13=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasBlogs:-103592778",[z,v]);
  },zone.Tag,zone.HasBlogs)],Tags$1.Tags().NewTag("td",x$13))],Tags$1.Tags().NewTag("tr",x$11)),(x$14=[(x$15=[Tags$1.Tags().text("Groups")],Tags$1.Tags().NewTag("td",x$15)),(x$16=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasGroups:-103592778",[z,v]);
  },zone.Tag,zone.HasGroups)],Tags$1.Tags().NewTag("td",x$16))],Tags$1.Tags().NewTag("tr",x$14)),(x$17=[(x$18=[Tags$1.Tags().text("Conferences")],Tags$1.Tags().NewTag("td",x$18)),(x$19=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasConferences:-103592778",[z,v]);
  },zone.Tag,zone.HasConferences)],Tags$1.Tags().NewTag("td",x$19))],Tags$1.Tags().NewTag("tr",x$17)),(x$20=[(x$21=[Tags$1.Tags().text("Developers")],Tags$1.Tags().NewTag("td",x$21)),(x$22=[Client$16.ToggleButton(function(z,v)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetHasDevelopers:-103592778",[z,v]);
  },zone.Tag,zone.HasDevelopers)],Tags$1.Tags().NewTag("td",x$22))],Tags$1.Tags().NewTag("tr",x$20))],Tags$1.Tags().NewTag("tbody",x$1))]);
 };
 Client$16.ToggleButton=function(callback,zoneTag,initStatus)
 {
  var status,onText,offText,container,x,message,x$1,label,x$2,x$3,button,x$4,_this,_this$1,x$5,x$6;
  status=[initStatus];
  onText="Deactivate";
  offText="Activate";
  container=(x=[Attr.Attr().NewAttr("class","togglebutton")],Tags$1.Tags().NewTag("span",x));
  message=(x$1=[Attr.Attr().NewAttr("class","message")],Tags$1.Tags().NewTag("span",x$1));
  label=Operators$1.add((x$2=[Attr.Attr().NewAttr("class","label")],Tags$1.Tags().NewTag("span",x$2)),[(x$3=status[0]?"Yes":"No",Tags$1.Tags().text(x$3))]);
  button=(x$4=Operators$1.add((_this=Tags$1.Tags(),_this.NewTag("button",[(_this$1=Attr.Attr(),_this$1.NewAttr("class","button "+Server.Small()))])),[(x$5=status[0]?onText:offText,Tags$1.Tags().text(x$5))]),(x$6=function(e)
  {
   var b;
   return message.AppendI((b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Formlet.LoadingFormletWithLogin(callback(zoneTag,!status[0])),function(a)
    {
     var msg,x$7,text;
     message.HtmlProvider.Clear(message.get_Body());
     a.$==1?(msg=a.$0,message.AppendI(Tags$1.Tags().text("Error: "+msg))):(status[0]=!status[0],e.HtmlProvider.Clear(e.get_Body()),e.AppendI((x$7=status[0]?onText:offText,Tags$1.Tags().text(x$7))),label.HtmlProvider.Clear(label.get_Body()),text=status[0]?"Yes":"No",label.HtmlProvider.AppendNode(label.get_Body(),label.HtmlProvider.CreateTextNode(text)));
     return b.Return();
    });
   })));
  },function(a)
  {
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return x$6($1,$2);
    };
   },a);
  }(x$4),x$4));
  return Operators$1.add(container,[label,button,message]);
 };
 Client$16.InfoForm=function(zoneTag,name,pageContent)
 {
  var form,c,b;
  form=Enhance$3.WithFormContainer((c=Server.Small(),function(f)
  {
   return Client$3.EnhanceWithSubmitAndResetButtons(c,f);
  }(Data.$(Data.$(Formlet$1.Return(function(name$1)
  {
   return function(pageContent$1)
   {
    return[name$1,pageContent$1];
   };
  }),FwL.InputWithValue(name,"Name","Enter the name of the zone")),FwL.RichEditorWithValue(pageContent,"Home page","Write the home page for the zone")))));
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(form,function(a)
   {
    var pageContent$1,name$1;
    pageContent$1=a[1];
    name$1=a[0];
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Zone+Rpc.SetInfo:2100826292",[zoneTag,name$1,pageContent$1])),function(a$1)
    {
     var msg;
     return b.ReturnFrom(a$1.$==1?(msg=a$1.$0,FormletHelpers.ErrorF("Error: "+msg)):FormletHelpers.SuccessF("The zone was successfully modified."));
    });
   });
  });
 };
 SelectContactsControl=Client$17.SelectContactsControl=Runtime.Class({
  get_Body:function()
  {
   var $this,currentSessKey,inviteContentDiv,x,selectedProvider,invitationSentDiv,providersListDiv,contactsListDiv,f;
   $this=this;
   currentSessKey=[""];
   inviteContentDiv=(x=[Attr.Attr().NewAttr("id","invite-content")],Tags$1.Tags().NewTag("div",x));
   selectedProvider=[""];
   invitationSentDiv=function()
   {
    var x$1,x$2;
    return Operators$1.add((x$1=[Attr.Attr().NewAttr("id","invitation-sent")],Tags$1.Tags().NewTag("div",x$1)),[(x$2=[Tags$1.Tags().text("Congratulations! Invitation to Your contacts were sent")],Tags$1.Tags().NewTag("h4",x$2))]);
   };
   providersListDiv=function()
   {
    var div,x$1;
    div=(x$1=[Attr.Attr().NewAttr("id","providers")],Tags$1.Tags().NewTag("div",x$1));
    Concurrency.Start(Concurrency.Delay(function()
    {
     var x$2;
     x$2=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Invite+Rpc.getNewSessionKey:1157438610",[]);
     return Concurrency.Bind(x$2,function(a)
     {
      var x$3;
      currentSessKey[0]=a;
      div.AppendI((x$3=List.ofSeq(Seq.delay(function()
      {
       return Seq.collect(function(provider)
       {
        var url,x$4,x$5,x$6,x$7,x$8;
        selectedProvider[0]=provider[0];
        url=provider[1]+currentSessKey[0]+"/";
        return[Operators$1.add((x$4=[Attr.Attr().NewAttr("class","provider"),Attr.Attr().NewAttr("onclick","window.open('"+url+"',"+"'invitefriendspopup', 'width=600,height=500,status=0,resizable=0,location=0'); return false;")],Tags$1.Tags().NewTag("a",x$4)),[(x$5=[(x$6="/images/invite/"+provider[0].toLowerCase()+".png",Attr.Attr().NewAttr("src",x$6))],Tags$1.Tags().NewTag("img",x$5)),(x$7=[(x$8=provider[0],Tags$1.Tags().text(x$8))],Tags$1.Tags().NewTag("h3",x$7))])];
       },$this.contactsProviders);
      })),Tags$1.Tags().NewTag("div",x$3)));
      return Concurrency.Return(null);
     });
    }),null);
    return div;
   };
   contactsListDiv=function(contacts)
   {
    var x$1,x$2,x$3,x$4,f$1,x$5,x$6,x$7,x$8,x$9,x$10,x$11,_this,x$12,x$13,x$14,a,x$15;
    return Operators$1.add((x$1=[Attr.Attr().NewAttr("id","friends-list")],Tags$1.Tags().NewTag("div",x$1)),[Operators$1.add((x$2=[Attr.Attr().NewAttr("id","all-select")],Tags$1.Tags().NewTag("div",x$2)),[(x$3=(x$4=[Attr.Attr().NewAttr("type","checkbox"),Attr.Attr().NewAttr("id","select-all-none")],Tags$1.Tags().NewTag("input",x$4)),(f$1=function()
    {
     var v,_this$1,a$1;
     v=(_this$1=Global.jQuery("#select-all-none"),(a$1=function()
     {
      var newValue,v$1;
      newValue=Global.jQuery("#select-all-none").is(":checked");
      v$1=Global.jQuery("#friends-table-container table input[type=checkbox]").prop("checked",newValue);
     },_this$1.change(function($1)
     {
      return a$1(this,$1);
     })));
    },function(w)
    {
     Operators$1.OnAfterRender(f$1,w);
    }(x$3),x$3)),(x$5=[Tags$1.Tags().text("Select All/None")],Tags$1.Tags().NewTag("span",x$5))]),Operators$1.add((x$6=[Attr.Attr().NewAttr("id","friends-table-container")],Tags$1.Tags().NewTag("div",x$6)),[(x$7=[(x$8=List.ofSeq(Seq.delay(function()
    {
     return Seq.map(function(friend)
     {
      var x$16,x$17,x$18,x$19,x$20,x$21,x$22;
      x$16=[(x$17=[(x$18=[Attr.Attr().NewAttr("type","checkbox"),Attr.Attr().NewAttr("name","contact"),Attr.Attr().NewAttr("value",friend.Username+"|"+friend.Email)],Tags$1.Tags().NewTag("input",x$18))],Tags$1.Tags().NewTag("td",x$17)),(x$19=[(x$20=friend.Username,Tags$1.Tags().text(x$20))],Tags$1.Tags().NewTag("td",x$19)),(x$21=[(x$22=friend.Email,Tags$1.Tags().text(x$22))],Tags$1.Tags().NewTag("td",x$21))];
      return Tags$1.Tags().NewTag("tr",x$16);
     },contacts);
    })),Tags$1.Tags().NewTag("table",x$8))],Tags$1.Tags().NewTag("form",x$7))]),Operators$1.add((x$9=[Attr.Attr().NewAttr("id","summary")],Tags$1.Tags().NewTag("div",x$9)),[(x$10=Operators$1.add((x$11=[Attr.Attr().NewAttr("id","go-step-one"),(_this=Attr.Attr(),_this.NewAttr("class",Server.Comment()))],Tags$1.Tags().NewTag("a",x$11)),[Tags$1.Tags().text("Go to Step 1")]),(x$12=function()
    {
     var v,v$1,v$2,element,v$3,element$1,v$4,element$2;
     v=Global.jQuery("li#invite-step-one").addClass("selected");
     v$1=Global.jQuery("li#invite-step-two").removeClass("selected");
     v$2=(element=inviteContentDiv.get_Body(),Global.jQuery(element)).fadeOut();
     v$3=(element$1=inviteContentDiv.get_Body(),Global.jQuery(element$1)).hide();
     inviteContentDiv.HtmlProvider.Clear(inviteContentDiv.get_Body());
     (function()
     {
     }(inviteContentDiv.AppendI(providersListDiv())));
     return v$4=(element$2=inviteContentDiv.get_Body(),Global.jQuery(element$2)).fadeIn();
    },function(a$1)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$12($1,$2);
      };
     },a$1);
    }(x$10),x$10)),(x$13=Operators$1.add((x$14=[Attr.Attr().NewAttr("id","invite-friends"),(a=Server.Large(),Attr.Attr().NewAttr("class",a))],Tags$1.Tags().NewTag("a",x$14)),[Tags$1.Tags().text("Invite friends")]),(x$15=function()
    {
     var sel,v,v$1,element,v$2,element$1,v$3,element$2,v$4;
     sel=[List.T.Empty];
     v=Global.jQuery("#friends-table-container table input:checkbox[name=contact]:checked").each(function(a$1,_this$1)
     {
      var contact,username,email;
      contact=String(Global.jQuery(_this$1).val());
      username=Arrays.get(contact.split("|"),0);
      email=Arrays.get(contact.split("|"),1);
      sel[0]=new List.T({
       $:1,
       $0:{
        Email:email,
        Username:username
       },
       $1:sel[0]
      });
     });
     return List.length(sel[0])===0?Global.alert("You haven't selected any contacts."):(Concurrency.Start(Concurrency.Delay(function()
     {
      var x$16;
      x$16=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Invite+Rpc.sendInvites:2089076288",[sel[0],selectedProvider[0]]);
      return Concurrency.Bind(x$16,function()
      {
       return Concurrency.Return(null);
      });
     }),null),v$1=(element=inviteContentDiv.get_Body(),Global.jQuery(element)).fadeOut(),v$2=(element$1=inviteContentDiv.get_Body(),Global.jQuery(element$1)).hide(),inviteContentDiv.HtmlProvider.Clear(inviteContentDiv.get_Body()),function()
     {
     }(inviteContentDiv.AppendI(invitationSentDiv())),v$3=(element$2=inviteContentDiv.get_Body(),Global.jQuery(element$2)).fadeIn(),v$4=Global.setTimeout(function()
     {
      var v$5,v$6,v$7,element$3,v$8,element$4,v$9,element$5;
      v$5=Global.jQuery("li#invite-step-one").addClass("selected");
      v$6=Global.jQuery("li#invite-step-two").removeClass("selected");
      v$7=(element$3=inviteContentDiv.get_Body(),Global.jQuery(element$3)).fadeOut();
      v$8=(element$4=inviteContentDiv.get_Body(),Global.jQuery(element$4)).hide();
      inviteContentDiv.HtmlProvider.Clear(inviteContentDiv.get_Body());
      (function()
      {
      }(inviteContentDiv.AppendI(providersListDiv())));
      v$9=(element$5=inviteContentDiv.get_Body(),Global.jQuery(element$5)).fadeIn();
     },3000));
    },function(a$1)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$15($1,$2);
      };
     },a$1);
    }(x$13),x$13))])]);
   };
   (f=function()
   {
    var v,element,v$1,element$1,v$2,v$3,returnContactsInternal;
    function waitForContactsFromSever()
    {
     var v$4;
     currentSessKey[0]!==""?Concurrency.Start(Concurrency.Delay(function()
     {
      var x$1;
      x$1=(new AjaxRemotingProvider.New()).Async("FPish:FPish.Invite+Rpc.getContacts:-1816919523",[currentSessKey[0]]);
      return Concurrency.Bind(x$1,function(a)
      {
       var a$1,contacts;
       a$1=a==null?Concurrency.Return(null):(contacts=a.$0,(returnContactsInternal(contacts),Concurrency.Return(null)));
       return Concurrency.Combine(a$1,Concurrency.Delay(function()
       {
        return Concurrency.Return(null);
       }));
      });
     }),null):void 0;
     v$4=Global.setTimeout(waitForContactsFromSever,1000);
    }
    v=(element=inviteContentDiv.get_Body(),Global.jQuery(element)).hide();
    (function()
    {
    }(inviteContentDiv.AppendI(providersListDiv())));
    v$1=(element$1=inviteContentDiv.get_Body(),Global.jQuery(element$1)).fadeIn();
    v$2=Global.jQuery("li#invite-step-one").addClass("selected");
    v$3=Global.jQuery("li#invite-step-two").removeClass("selected");
    returnContactsInternal=function(contacts)
    {
     var v$4,v$5,contactsPopulatedDiv,v$6,element$2,v$7,element$3,v$8,element$4;
     v$4=Global.jQuery("li#invite-step-one").removeClass("selected");
     v$5=Global.jQuery("li#invite-step-two").addClass("selected");
     contactsPopulatedDiv=contactsListDiv(contacts);
     v$6=(element$2=inviteContentDiv.get_Body(),Global.jQuery(element$2)).fadeOut();
     v$7=(element$3=inviteContentDiv.get_Body(),Global.jQuery(element$3)).hide();
     inviteContentDiv.HtmlProvider.Clear(inviteContentDiv.get_Body());
     inviteContentDiv.AppendI(contactsPopulatedDiv);
     v$8=(element$4=inviteContentDiv.get_Body(),Global.jQuery(element$4)).fadeIn();
    };
    waitForContactsFromSever();
   },function(w)
   {
    Operators$1.OnAfterRender(f,w);
   })(inviteContentDiv);
   return inviteContentDiv;
  }
 },Web.Control,SelectContactsControl);
 JSRedirectControl=Client$17.JSRedirectControl=Runtime.Class({
  get_Body:function()
  {
   var x,f;
   x=Tags$1.Tags().NewTag("div",[]);
   f=function()
   {
    Global.self.close();
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,JSRedirectControl);
 ContactListDataControl=Client$17.ContactListDataControl=Runtime.Class({
  get_Body:function()
  {
   var x;
   x=List.ofSeq(Seq.delay(function()
   {
    var x$1,x$2,x$3,x$4,f;
    return Client$17.IsIE()?[(x$1=(x$2=[Tags$1.Tags().text("Close window")],Tags$1.Tags().NewTag("button",x$2)),(x$3=function()
    {
     Global.self.close();
    },function(a)
    {
     EventsPervasives.Events().OnClick(function($1)
     {
      return function($2)
      {
       return x$3($1,$2);
      };
     },a);
    }(x$1),x$1))]:[(x$4=Tags$1.Tags().NewTag("div",[]),(f=function()
    {
     Global.self.close();
    },function(w)
    {
     Operators$1.OnAfterRender(f,w);
    }(x$4),x$4))];
   }));
   return Tags$1.Tags().NewTag("div",x);
  }
 },Web.Control,ContactListDataControl);
 Client$17.IsIE=function()
 {
  return(new Global.RegExp("MSIE (\\d+\\.\\d+);")).test(Global.navigator.userAgent);
 };
 AddUserOAuthProviderControl=Client$18.AddUserOAuthProviderControl=Runtime.Class({
  get_Body:function()
  {
   var $this,b;
   $this=this;
   b=Formlet$1.Do();
   return b.Delay(function()
   {
    var f,f$1;
    return b.Bind(Enhance$3.WithFormContainer(Formlet$1.Horizontal(Formlet$1.Choose([(f=function()
    {
     return true;
    },function(f$2)
    {
     return Formlet$1.Map(f,f$2);
    }(Controls.LargeButton("Yes"))),(f$1=function()
    {
     return false;
    },function(f$2)
    {
     return Formlet$1.Map(f$1,f$2);
    }(Controls.LargeButton("No thanks")))]))),function(a)
    {
     var b$1,url;
     return b.ReturnFrom(a?(b$1=Formlet$1.Do(),b$1.Delay(function()
     {
      return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.AddUserOAuthProvider:2012001718",[$this.args.UserOAuthData])),function(a$1)
      {
       var url$1;
       return b$1.ReturnFrom(a$1?(url$1=$this.args.AddRedirectURL,Global.location.href=url$1,FormletHelpers.SuccessF("You account has been added, redirecting.")):FormletHelpers.ErrorF("Sorry, an error occurred."));
      });
     })):(url=$this.args.CancelRedirectURL,Global.location.href=url,Formlet$1.Return()));
    });
   });
  }
 },Web.Control,AddUserOAuthProviderControl);
 RegisterControl=Client$18.RegisterControl=Runtime.Class({
  get_Body:function()
  {
   var $this,initUsername,initEmail,b;
   $this=this;
   initUsername=Operators.DefaultArg(this.args.OAuthUserData.OAuthUserDisplayName,this.args.OAuthUserData.OAuthUsername);
   initEmail=this.args.OAuthUserData.OAuthUsername.indexOf("@")!=-1?this.args.OAuthUserData.OAuthUsername:"";
   b=Formlet$1.Do();
   return b.Delay(function()
   {
    var x,b$1,i;
    return b.Bind(Enhance$3.WithFormContainer(Enhance$1.SubmitOnEnter((x=Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(username,email,first,last)
    {
     return{
      OAuthUserData:$this.args.OAuthUserData,
      Username:username,
      Email:email,
      FirstName:first,
      LastName:last
     };
    },4)),FwL.InputWithValue(initUsername,"Username*","Please enter a username")),FwL.EmailWithValue(initEmail,"Email address*","Please enter an email address")),FwL.InputOptional("First name")),FwL.InputOptional("Last name")),(b$1=(i=FormButtonConfiguration.get_Default(),FormButtonConfiguration.New({
     $:1,
     $0:"Register"
    },i.Style,i.Class)),Enhance$3.WithCustomSubmitButton(b$1,x))))),function(a)
    {
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.RegisterOAuthUser:-239868951",[a,$this.args.EmailVerificationURL])),function(a$1)
     {
      var url;
      return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF("Sorry, this email address is already registered."):a$1.$==2?FormletHelpers.ErrorF("Sorry, this username is already registered."):a$1.$==3?FormletHelpers.ErrorF("Sorry, this login provider account is already associated with a FPish account."):a$1.$==4?FormletHelpers.ErrorF("Failed to create user account."):(url=$this.args.AddRedirectURL,Global.location.href=url,FormletHelpers.SuccessF("You have successfully registered!")));
     });
    });
   });
  }
 },Web.Control,RegisterControl);
 Client$18.LoginButtonsShowLoading=function()
 {
  var x,x$1,x$2,x$3,x$4,x$5,x$6,f;
  x=Operators$1.add((x$1=[Attr.Attr().NewAttr("class","login-loading-overlay")],Tags$1.Tags().NewTag("table",x$1)),[(x$2=[(x$3=[(x$4=[(x$5=[Tags$1.Tags().text("Logging in...")],Tags$1.Tags().NewTag("p",x$5)),(x$6=[Attr.Attr().NewAttr("src","http://us.i1.yimg.com/us.yimg.com/i/us/per/gr/gp/rel_interstitial_loading.gif")],Tags$1.Tags().NewTag("img",x$6))],Tags$1.Tags().NewTag("div",x$4))],Tags$1.Tags().NewTag("td",x$3))],Tags$1.Tags().NewTag("tr",x$2))]);
  f=function(overlay)
  {
   var _this,element,a,_this$1;
   _this=(element=overlay.Dom,Global.jQuery(element)).parent().parent().children();
   a=function()
   {
    var element$1;
    return(element$1=overlay.Dom,Global.jQuery(element$1)).css("display","table");
   };
   _this.click(function($1)
   {
    return a(this,$1);
   });
   _this$1=Global.jQuery("body");
   _this$1.append.apply(_this$1,[overlay.Dom].concat([]));
  };
  (function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x));
  return x;
 };
 Client$19.ActivateUser=function(activationURL)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   var x,b$1,C;
   return b.Bind(Enhance$1.SubmitOnEnter(Enhance$3.WithFormContainer((x=Controls$2.Input(""),(b$1=(C={
    $:1,
    $0:Server.Large()
   },FormButtonConfiguration.New({
    $:1,
    $0:"Send me an Activation Link"
   },FormButtonConfiguration.get_Default().Style,C)),Enhance$3.WithCustomSubmitButton(b$1,x))))),function(a)
   {
    return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.SendActivationEmail:1707085196",[{
     Email:a,
     ActivationURL:activationURL
    }])),function(a$1)
    {
     return b.ReturnFrom(a$1?Controls.SuccessPanel("An email has been sent to you, with instructions on how you can activate your account."):Controls.ErrorPanel("Something went wrong."));
    });
   });
  });
 };
 Client$20.AdminControls=function(tags,tagSubstitutions)
 {
  var x;
  x=List.ofArray([Client$20.RebuildButton("Recompute User Scores",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.RebuildUserScores:-190721485",[]);
  }),Client$20.RebuildButton("Build User Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.RebuildUserCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Topics Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.RebuildTopicsCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Trainer Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.TrainerCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Company Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.CompanyCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Training Events Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.TrainingEventsCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Trainings Course Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.TrainingCourseCache:-190721485",[]);
  }),Client$20.RebuildButton("Build User Data Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.UserDataCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Blogs Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.BlogsCache:-190721485",[]);
  }),Client$20.RebuildButton("Build Zone Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.ZoneCache:-190721485",[]);
  }),Client$20.RebuildButton("Clear Skin CSS Cache",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.ClearSkinCache:-190721485",[]);
  }),Client$20.RebuildButton("Recompute user locations",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.RecomputeUserGeoLocations:-190721485",[]);
  }),Client$20.RebuildButton("Cleanup tags (remove db duplicates)",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.CleanupTags:-190721485",[]);
  }),Client$20.RebuildButton("Create comment topics for blog entries",function()
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.CreateCommentTopicsForBlogEntries:-190721485",[]);
  }),Client$20.MergeUsersForm(),Client$20.TagSubstitutionForm(),Client$20.ExistingTagSubstitutions(tagSubstitutions),Client$20.DeleteTags(tags)]);
  return Tags$1.Tags().NewTag("div",x);
 };
 Client$20.ExistingTagSubstitutions=function(tagSubstitutions)
 {
  var x;
  x=List.ofSeq(Seq.delay(function()
  {
   var x$1;
   return Seq.append([(x$1=[Tags$1.Tags().text("Existing substitutions")],Tags$1.Tags().NewTag("h2",x$1))],Seq.delay(function()
   {
    return Seq.collect(function(m)
    {
     var tag,substs,x$2;
     tag=m[0];
     substs=m[1];
     return Seq.append([Operators$1.add((x$2=[Attr.Attr().NewAttr("class","tag")],Tags$1.Tags().NewTag("a",x$2)),[Tags$1.Tags().text(tag)])],Seq.delay(function()
     {
      var x$3;
      return Seq.append([(x$3=[Tags$1.Tags().text("->")],Tags$1.Tags().NewTag("span",x$3))],Seq.delay(function()
      {
       return Seq.append(Seq.map(function(subst)
       {
        var x$4;
        return Operators$1.add((x$4=[Attr.Attr().NewAttr("class","tag")],Tags$1.Tags().NewTag("a",x$4)),[Tags$1.Tags().text(subst)]);
       },substs),Seq.delay(function()
       {
        return[Tags$1.Tags().NewTag("br",[])];
       }));
      }));
     }));
    },tagSubstitutions);
   }));
  }));
  return Tags$1.Tags().NewTag("div",x);
 };
 Client$20.DeleteTags=function(tags)
 {
  var x,x$1,x$2,x$3,m;
  return Operators$1.add((x=[Attr.Attr().NewAttr("class","tags-to-delete")],Tags$1.Tags().NewTag("div",x)),[(x$1=[Tags$1.Tags().text("Delete tags")],Tags$1.Tags().NewTag("h2",x$1)),(x$2=[Tags$1.Tags().text("Click a tag below to delete it and untag all associated entities.")],Tags$1.Tags().NewTag("p",x$2)),(x$3=(m=function(tag,isMaster)
  {
   var li,x$4,x$5,x$6,x$7;
   li=Tags$1.Tags().NewTag("li",[]);
   return Operators$1.add(li,[(x$4=Operators$1.add((x$5=[Attr.Attr().NewAttr("class","tag"+(isMaster?" master":"")),Attr.Attr().NewAttr("href","#")],Tags$1.Tags().NewTag("a",x$5)),[(x$6=[Attr.Attr().NewAttr("src","/images/icons/close.png"),Attr.Attr().NewAttr("alt","remove"),Attr.Attr().NewAttr("title","remove"),Attr.Attr().NewAttr("style","height: 10px; width: 10px; margin-right: 5px;")],Tags$1.Tags().NewTag("img",x$6)),Tags$1.Tags().text(tag)]),(x$7=function(e)
   {
    var f,b;
    return e.AppendI((f=(b=Formlet$1.Do(),b.Delay(function()
    {
     return b.Bind(Formlet$1.OfElement(function()
     {
      var x$8;
      x$8=[Tags$1.Tags().text("Really delete tag '"+tag+"' ?")];
      return Tags$1.Tags().NewTag("div",x$8);
     }),function()
     {
      var c;
      return b.Bind((c=Server.Small(),function(f$1)
      {
       return Client$3.EnhanceWithCustomSubmitButton(c,"Yes",f$1);
      }(Formlet$1.Return())),function()
      {
       return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.DeleteTag:346238215",[tag])),function(a)
       {
        var msg;
        return a.$==0?(li.HtmlProvider.Remove(li.get_Body()),b.Return()):(msg=a.$0,b.ReturnFrom(FormletHelpers.ErrorF(msg)));
       });
      });
     });
    })),Enhance$1.WithDialog("Confirm",f)));
   },function(a)
   {
    EventsPervasives.Events().OnClick(function($1)
    {
     return function($2)
     {
      return x$7($1,$2);
     };
    },a);
   }(x$4),x$4))]);
  },function(l)
  {
   return List.map(function($1)
   {
    return m($1[0],$1[1]);
   },l);
  }(tags)),Tags$1.Tags().NewTag("ul",x$3))]);
 };
 Client$20.MergeUsersForm=function()
 {
  var chooseUsersForm,f,a,f$1,a$1,f$2,b;
  function lookupUsers(name)
  {
   return Concurrency.Delay(function()
   {
    var x;
    x=(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.GetMatchedUsernames:-1950492652",[name]);
    return Concurrency.Bind(x,function(a$2)
    {
     var m;
     return Concurrency.Return((m=function(l,v)
     {
      return{
       label:l+" &lt;"+v+"&gt;",
       value:v
      };
     },function(l)
     {
      return List.map(function($1)
      {
       return m($1[0],$1[1]);
      },l);
     }(a$2)));
    });
   });
  }
  chooseUsersForm=Data.$(Data.$(Formlet$1.Return(function(uFrom)
  {
   return function(uTo)
   {
    return[uFrom,uTo];
   };
  }),(f=(a=Controls.Autocomplete("",lookupUsers),Data.Validator().IsNotEmpty("You must specify a first user",a)),Enhance$3.WithTextLabel("Merge this user:",f))),(f$1=(a$1=Controls.Autocomplete("",lookupUsers),Data.Validator().IsNotEmpty("You must specify a second user",a$1)),Enhance$3.WithTextLabel("Into this one:",f$1)));
  return Enhance$3.WithFormContainer((f$2=(b=Formlet$1.Do(),b.Delay(function()
  {
   var a$2;
   return b.Bind(Enhance$3.WithSubmitButton(Enhance$3.WithValidationIcon((a$2=function(u1,u2)
   {
    return u1!==u2;
   },function(a$3)
   {
    return Data.Validator().Is(function($1)
    {
     return a$2($1[0],$1[1]);
    },"You cannot merge a user into himself",a$3);
   }(chooseUsersForm)))),function(a$3)
   {
    var uTo,uFrom;
    uTo=a$3[1];
    uFrom=a$3[0];
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.MergeUsers:-746196229",[uFrom,uTo])),function(a$4)
    {
     return b.ReturnFrom(a$4.$==0?FormletHelpers.SuccessF("Successfully merged user "+uFrom+" into "+uTo+"."):FormletHelpers.ErrorF(a$4.$0));
    });
   });
  })),Enhance$3.WithLegend("Merge users",f$2)));
 };
 Client$20.TagSubstitutionForm=function()
 {
  var chooseTagsForm,f,b;
  chooseTagsForm=Data.$(Data.$(Formlet$1.Return(function(tFrom)
  {
   return function(tTo)
   {
    return[tFrom,Client$2.ParseTags(tTo)];
   };
  }),FwL.Input("When a user enters this tag:","You must specify a tag to substitute")),FwL.Input("Replace it with these (comma-separated):","You must specify substitution tag(s)"));
  return Enhance$3.WithFormContainer((f=(b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(Enhance$3.WithSubmitButton(Enhance$3.WithValidationIcon(chooseTagsForm)),function(a)
   {
    var tTo,tFrom;
    tTo=a[1];
    tFrom=a[0];
    return b.Bind(Formlet.LoadingFormletWithLogin((new AjaxRemotingProvider.New()).Async("FPish:FPish.Admin+Rpc.SubstituteTag:622302888",[tFrom,tTo])),function(a$1)
    {
     var tToPretty;
     return b.ReturnFrom(a$1.$==0?(tToPretty=Client$2.PrettyTags(tTo),FormletHelpers.SuccessF("Successfully substituting "+("'"+tFrom+"'")+" with "+tToPretty+".")):FormletHelpers.ErrorF(a$1.$0));
    });
   });
  })),Enhance$3.WithLegend("Substitute tags",f)));
 };
 Client$20.RebuildButton=function(label,action)
 {
  var b;
  return Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(Controls.SmallButton(label),function()
   {
    return b.Bind(Formlet.LoadingFormlet(action()),function(a)
    {
     var time;
     return b.ReturnFrom(a==null?FormletHelpers.ErrorF("Sorry, an error occurred."):(time=a.$0,FormletHelpers.SuccessF("Rebuilt in "+String(time)+" seconds.")));
    });
   });
  })));
 };
 Client$21.PurchaseCreditsButtons=function(args)
 {
  var ticketPanel,b;
  ticketPanel=function(numCreds,ticket)
  {
   var basePrice,vat,totalPrice,ppButton,x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10,x$11,x$12,x$13,x$14,x$15,x$16,x$17,x$18,x$19;
   basePrice=String(ticket.BasePrice)+" "+ticket.Currency;
   vat=String(ticket.Price-ticket.BasePrice)+" "+ticket.Currency;
   totalPrice=String(ticket.Price)+" "+ticket.Currency;
   ppButton=Controls$1.PayPalButtonCredit({
    Label:"Proceed to PayPal",
    CancelLink:args.CancelLink,
    PaypalUrl:args.PaypalUrl,
    BusinessName:args.BusinessName,
    ClientEmail:args.ClientEmail,
    TicketInfo:ticket,
    ReturnUrl:args.ReturnUrl,
    ReturnMode:args.ReturnMode,
    NotifyUrl:args.NotifyUrl+ticket.VerificationCode
   });
   x=[(x$1=[Tags$1.Tags().text("Please review your purchase below before continuing.")],Tags$1.Tags().NewTag("p",x$1)),Operators$1.add((x$2=[Attr.Attr().NewAttr("class","payment-confirm-panel")],Tags$1.Tags().NewTag("div",x$2)),[(x$3=[(x$4=[Tags$1.Tags().text("Purchasing "+String(numCreds)+" credits.")],Tags$1.Tags().NewTag("b",x$4))],Tags$1.Tags().NewTag("p",x$3)),(x$5=[(x$6=[(x$7=[(x$8=[(x$9=[Tags$1.Tags().text("Unit Price")],Tags$1.Tags().NewTag("label",x$9))],Tags$1.Tags().NewTag("td",x$8)),Operators$1.add((x$10=[Attr.Attr().NewAttr("class","price")],Tags$1.Tags().NewTag("td",x$10)),[Tags$1.Tags().text(basePrice)])],Tags$1.Tags().NewTag("tr",x$7)),(x$11=[(x$12=[(x$13=[Tags$1.Tags().text("VAT *")],Tags$1.Tags().NewTag("label",x$13))],Tags$1.Tags().NewTag("td",x$12)),Operators$1.add((x$14=[Attr.Attr().NewAttr("class","price")],Tags$1.Tags().NewTag("td",x$14)),[Tags$1.Tags().text(vat)])],Tags$1.Tags().NewTag("tr",x$11)),(x$15=[(x$16=[(x$17=[Tags$1.Tags().text("Subtotal")],Tags$1.Tags().NewTag("label",x$17))],Tags$1.Tags().NewTag("td",x$16)),Operators$1.add((x$18=[Attr.Attr().NewAttr("class","price")],Tags$1.Tags().NewTag("td",x$18)),[Tags$1.Tags().text(totalPrice)])],Tags$1.Tags().NewTag("tr",x$15))],Tags$1.Tags().NewTag("tbody",x$6))],Tags$1.Tags().NewTag("table",x$5)),Operators$1.add((x$19=[Attr.Attr().NewAttr("class","note")],Tags$1.Tags().NewTag("span",x$19)),[Tags$1.Tags().text("*Note: VAT is added on all purchases made by \r\n                                    EU individuals and companies from Hungary.")]),ppButton])];
   return Tags$1.Tags().NewTag("div",x);
  };
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   var f,m;
   return b.Bind((f=function(el)
   {
    var x;
    return Operators$1.add((x=[Attr.Attr().NewAttr("class","credit-buttons")],Tags$1.Tags().NewTag("div",x)),[el]);
   },function(f$1)
   {
    return Formlet$1.MapElement(f,f$1);
   }(Formlet$1.Horizontal(Formlet$1.Choose((m=function(ammount)
   {
    var label,f$1;
    label=args.CurrencySymbol+String(ammount);
    f$1=function()
    {
     return ammount;
    };
    return function(f$2)
    {
     return Formlet$1.Map(f$1,f$2);
    }(Controls.SmallButton(label));
   },function(l)
   {
    return List.map(m,l);
   }(args.CreditAmounts)))))),function(a)
   {
    return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Credit+Rpc.GetTicketInfoForCreditPurchase:-1098948881",[a])),function(a$1)
    {
     var ticket;
     return b.ReturnFrom(a$1==null?Formlet$1.Never():(ticket=a$1.$0,Formlet$1.OfElement(function()
     {
      return ticketPanel(a,ticket);
     })));
    });
   });
  });
 };
 Client$22.JobApplication=function(conf)
 {
  var R;
  return Client$8.ContactButton((R=conf.ReplyPanelId,ContactButtonConfiguration.New(function(hideForm)
  {
   var form,b;
   form=(b=Formlet$1.Do(),b.Delay(function()
   {
    return b.Bind(Formlet$1.WithNotificationChannel(Client$8.MarkupMessageForm({
     FixedRecipient:{
      $:1,
      $0:conf.Recipient
     },
     ButtonClass:Server.Large(),
     IncludeTitle:false,
     Text:conf.DefaultMessage
    })),function(a)
    {
     var reset,message,format;
     reset=a[1];
     message=a[0][2];
     format=a[0][3];
     return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.JobOffer+Rpc.ApplyToJob:1242552606",[{
      JobId:conf.JobId,
      Title:conf.MessageTitle,
      Message:message,
      MessageFormat:format
     }])),function(a$1)
     {
      return b.ReturnFrom(a$1.$==1?FormletHelpers.ErrorF(a$1.$0):(reset(void 0),hideForm(),FormletHelpers.SuccessF("Thanks, your application has been registered.")));
     });
    });
   }));
   return Tags$1.Tags().NewTag("div",[form]);
  },ContactButtonConfiguration.get_Default().ButtonClass,R,"Apply","Hide application form")));
 };
 Client$23.EditJob=function(args)
 {
  var f;
  f=function(elem)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","post-job-panel formlet")],Tags$1.Tags().NewTag("div",x)),[elem]);
  };
  return function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }(Client$23.EditJobForm(args));
 };
 Client$23.PostJob=function(args)
 {
  var f;
  f=function(elem)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","post-job-panel formlet")],Tags$1.Tags().NewTag("div",x)),[elem]);
  };
  return function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }(Client$23.PostJobForm(args));
 };
 Client$23.EditJobForm=function(args)
 {
  var editForm,b,b$1;
  editForm=(b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(Data.$(Data.$(Formlet$1.Return(function(j)
   {
    return function(p)
    {
     return[j,p];
    };
   }),Client$23.JobForm(args.JobOffer)),Client$23.ExtendPeriodForm(args)),function(a)
   {
    var perOpt,job,period;
    perOpt=a[1];
    job=a[0];
    return b.Bind(perOpt==null?Formlet$1.Return():(period=perOpt.$0,Client$23.ConfirmUpdateForm(args.ActiveDaysLeft,period)),function()
    {
     return b.Return([job,perOpt]);
    });
   });
  }));
  b$1=Formlet$1.Do();
  return b$1.Delay(function()
  {
   var f;
   return b$1.Bind((f=Enhance$3.WithCssClass("edit-job-panel",editForm),UserControls.SetupForm("Update",true,f)),function(a)
   {
    var perOpt,job;
    perOpt=a[1];
    job=a[0];
    return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.JobOffer+Rpc.UpdateJob:-1059961033",[args.JobId,job,perOpt])),function(a$1)
    {
     var url;
     return b$1.ReturnFrom(a$1?(url=args.RedirectUrl,Global.location.href=url,FormletHelpers.SuccessF("Your job was updated.")):FormletHelpers.ErrorF("Something went wrong, the job could not be created"));
    });
   });
  });
 };
 Client$23.PostJobForm=function(args)
 {
  var periodForm,f,period,elem,b,b$1,jobPeriodForm,b$2,b$3;
  periodForm=(f=args.IsFree?(period=List.head(List.rev(args.PeriodsLabelsAndPrices)),(elem=function()
  {
   var x,x$1,x$2;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","box")],Tags$1.Tags().NewTag("div",x)),[Tags$1.Tags().text("The job will be listed for free for a period of "),(x$1=[(x$2=String(period.NumDays),Tags$1.Tags().text(x$2))],Tags$1.Tags().NewTag("strong",x$1)),Tags$1.Tags().text(" days. You may later edit or remove the job from the public listing. "),Tags$1.Tags().text("Please confirm that you agree with these terms.")]);
  },(b=Formlet$1.Do(),b.Delay(function()
  {
   var f$1;
   return b.Bind((f$1=Formlet$1.OfElement(elem),Formlet$1.InitWith(null,f$1)),function()
   {
    var a;
    return b.Bind((a=Controls$2.Checkbox(false),Data.Validator().IsTrue("You need to agree with the terms.",a)),function()
    {
     return b.Return(period);
    });
   });
  })))):(b$1=Formlet$1.Do(),b$1.Delay(function()
  {
   return b$1.Bind(Client$23.PeriodForm(args.User,args.PeriodsLabelsAndPrices),function(a)
   {
    return b$1.Bind(Client$23.ConfirmPostForm(a),function()
    {
     return b$1.Return(a);
    });
   });
  })),Enhance$1.WithStep(4,"Listing period",f));
  jobPeriodForm=(b$2=Formlet$1.Do(),b$2.Delay(function()
  {
   var f$1;
   return b$2.Bind((f$1=Data.$(Data.$(Formlet$1.Return(function(job)
   {
    return function(period$1)
    {
     return[job,period$1];
    };
   }),Client$23.JobForm(args.JobOffer)),periodForm),Enhance$3.WithCssClass("edit-job-panel",f$1)),function(a)
   {
    return b$2.Return([a[0],a[1]]);
   });
  }));
  b$3=Formlet$1.Do();
  return b$3.Delay(function()
  {
   return b$3.Bind(UserControls.SetupForm("Post",true,jobPeriodForm),function(a)
   {
    var period$1,job;
    period$1=a[1];
    job=a[0];
    return b$3.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.JobOffer+Rpc.PostJob:1840367345",[job,period$1])),function(a$1)
    {
     var url;
     return b$3.ReturnFrom(a$1?(url=args.RedirectUrl,Global.location.href=url,FormletHelpers.SuccessF("Your job was created.")):FormletHelpers.ErrorF("Something went wrong, the job could not be created"));
    });
   });
  });
 };
 Client$23.JobForm=function(job)
 {
  return Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(title,comp,loc,j)
  {
   var A,C,C$1,C$2,C$3,L,I,D,R,T,C$4;
   A=j.Abstract;
   C=comp.Name;
   C$1=comp.Description;
   C$2=comp.Url;
   C$3=comp.LogoUrl;
   L=loc.Locations;
   I=loc.IsTelecommutePossible;
   D=j.Description;
   R=j.Requirements;
   T=j.Tags;
   C$4=j.CanApply;
   return JobOffer.New(job.Id,title,job.CreateDate,job.ListingDate,job.ExpirationDate,job.PostedByUser,C,C$1,C$2,C$3,A,L,I,D,R,T,job.IsPublic,job.Applications,C$4);
  },4)),Client$23.JobTitleForm(job)),Client$23.CompanyForm(job)),Client$23.LocationForm(job)),Client$23.JobInfoForm(job));
 };
 Client$23.ExtendPeriodForm=function(args)
 {
  var expInfo,periodForm,b,f,b$1;
  expInfo=Formlet$1.OfElement(function()
  {
   var x,x$1;
   x=[(x$1=args.ActiveDaysLeft>0?"This job will be listed for "+String(args.ActiveDaysLeft)+" more days.":"The job offer listing time has expired.",Tags$1.Tags().text(x$1))];
   return Tags$1.Tags().NewTag("div",x);
  });
  periodForm=Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
  {
   var f$1;
   return b.Bind((f$1=Controls$2.Checkbox(false),Enhance$3.WithTextLabel("Extend Period",f$1)),function(a)
   {
    var f$2,f$3;
    return b.ReturnFrom(a?(f$2=function(a$1)
    {
     return{
      $:1,
      $0:a$1
     };
    },function(f$4)
    {
     return Formlet$1.Map(f$2,f$4);
    }((f$3=Client$23.ListingPeriodForm(args.User,args.PeriodLabelsAndPrices,null),Enhance$3.WithTextLabel("Listing period",f$3)))):Formlet$1.Return(null));
   });
  })));
  f=(b$1=Formlet$1.Do(),b$1.Delay(function()
  {
   return b$1.Bind(expInfo,function()
   {
    return b$1.ReturnFrom(periodForm);
   });
  }));
  return Enhance$1.WithStep(4,"Listing period",f);
 };
 Client$23.PeriodForm=function(user,labelsAndPrices)
 {
  var f;
  return Enhance$3.WithFormContainer((f=Client$23.ListingPeriodForm(user,labelsAndPrices,null),Enhance$3.WithTextLabel("Listing period",f)));
 };
 Client$23.ConfirmUpdateForm=function(actDays,period)
 {
  var info,f,b;
  info=function()
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7;
   x=[(x$1=[Tags$1.Tags().text(actDays<0?"Posting this job will make it publicly visible for ":"Posting this job will extend the period of visibility with "),(x$2=[(x$3=period.Label.toLowerCase(),Tags$1.Tags().text(x$3))],Tags$1.Tags().NewTag("strong",x$2)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$1)),(x$4=[Tags$1.Tags().text(" The total the cost is "),(x$5=[(x$6=String(period.Price),Tags$1.Tags().text(x$6))],Tags$1.Tags().NewTag("strong",x$5)),Tags$1.Tags().text(" credits, which will be deducted from your FPish credits balance.")],Tags$1.Tags().NewTag("p",x$4)),(x$7=[Tags$1.Tags().text("Please confirm that you agree with these terms.")],Tags$1.Tags().NewTag("p",x$7))];
   return Tags$1.Tags().NewTag("div",x);
  };
  f=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","box")],Tags$1.Tags().NewTag("div",x)),[el]);
  };
  return function(f$1)
  {
   return Formlet$1.MapElement(f,f$1);
  }((b=Formlet$1.Do(),b.Delay(function()
  {
   var f$1;
   return b.Bind((f$1=Formlet$1.OfElement(info),Formlet$1.InitWith(null,f$1)),function()
   {
    var a;
    return b.Bind((a=Controls$2.Checkbox(false),Data.Validator().IsTrue("You need to agree with the terms.",a)),function()
    {
     return b.Return();
    });
   });
  })));
 };
 Client$23.ConfirmPostForm=function(period)
 {
  var conf,a,f,f$1;
  conf=(a=Controls$2.Checkbox(false),Data.Validator().IsTrue("You need to agree with the terms.",a));
  f=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","box")],Tags$1.Tags().NewTag("div",x)),[el]);
  };
  return function(f$2)
  {
   return Formlet$1.MapElement(f,f$2);
  }(Data.$(Data.$(Formlet$1.Return(function()
  {
   return function()
   {
    return null;
   };
  }),(f$1=Formlet$1.OfElement(function()
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7;
   x=[(x$1=[Tags$1.Tags().text("Posting this job will make it publicly visible for "),(x$2=[(x$3=period.Label.toLowerCase(),Tags$1.Tags().text(x$3))],Tags$1.Tags().NewTag("strong",x$2)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$1)),(x$4=[Tags$1.Tags().text(" The total the cost is "),(x$5=[(x$6=String(period.Price),Tags$1.Tags().text(x$6))],Tags$1.Tags().NewTag("strong",x$5)),Tags$1.Tags().text(" credits, which will be deducted from your FPish credits balance.")],Tags$1.Tags().NewTag("p",x$4)),(x$7=[Tags$1.Tags().text("Please confirm that you agree with these terms.")],Tags$1.Tags().NewTag("p",x$7))];
   return Tags$1.Tags().NewTag("div",x);
  }),Formlet$1.InitWith(null,f$1))),conf));
 };
 Client$23.JobInfoForm=function(job)
 {
  var canApply,f,descr,f$1,f$2,a,reqs,f$3,f$4,a$1,tags,f$5,abs,f$6,f$7,a$2,f$8;
  canApply=(f=Controls$2.Checkbox(job.CanApply),Enhance$3.WithTextLabel("Users can apply on FPish",f));
  descr=Enhance$3.WithLabelAbove((f$1=(f$2=Enhance$3.WithValidationIcon((a=(Controls$3.AdvancedHtmlEditor(Client$23.EditorParams()))(job.Description),Data.Validator().IsNotEmpty("Enter non empty description",a))),Enhance$3.WithCssClass("rich-editor",f$2)),Enhance$3.WithTextLabel("Job description",f$1)));
  reqs=Enhance$3.WithLabelAbove((f$3=(f$4=Enhance$3.WithValidationIcon((a$1=(Controls$3.AdvancedHtmlEditor(Client$23.EditorParams()))(job.Requirements),Data.Validator().IsNotEmpty("Enter a non empty value",a$1))),Enhance$3.WithCssClass("rich-editor",f$4)),Enhance$3.WithTextLabel("Requirements",f$3)));
  tags=(f$5=UserControls.SelectedTagsFormOneOrMore(job.Tags),Enhance$3.WithTextLabel("Tags",f$5));
  abs=(f$6=Enhance$3.WithLabelAbove((f$7=Enhance$3.WithValidationIcon((a$2=Controls$2.TextArea(job.Abstract),Data.Validator().IsNotEmpty("Enter a non empty value.",a$2))),Enhance$3.WithTextLabel("Abstract",f$7))),Enhance$3.WithCssClass("",f$6));
  f$8=Data.$(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(canApply$1,abs$1,descr$1,reqs$1,tags$1)
  {
   return{
    CanApply:canApply$1,
    Abstract:abs$1,
    Description:descr$1,
    Requirements:reqs$1,
    Tags:tags$1
   };
  },5)),canApply),abs),descr),reqs),tags);
  return Enhance$1.WithStep(3,"Job specifications",f$8);
 };
 Client$23.LocationForm=function(job)
 {
  var tel,f,f$1,locations,f$2,f$3;
  tel=(f=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","remote-panel")],Tags$1.Tags().NewTag("div",x)),[el]);
  },function(f$4)
  {
   return Formlet$1.MapElement(f,f$4);
  }(Enhance$3.WithFormContainer((f$1=Controls$2.Checkbox(job.IsTelecommutePossible),Enhance$3.WithTextLabel("Possible to work remotely",f$1)))));
  locations=Enhance$3.WithLabelAbove((f$2=Client$23.LocationForms(job.Locations),Enhance$3.WithTextLabel("Location(s)",f$2)));
  f$3=Data.$(Data.$(Formlet$1.Return(function(tel$1)
  {
   return function(locs)
   {
    return{
     IsTelecommutePossible:tel$1,
     Locations:locs
    };
   };
  }),tel),locations);
  return Enhance$1.WithStep(2,"Locations",f$3);
 };
 Client$23.CompanyForm=function(job)
 {
  var compName,f,a,compUrl,f$1,compLogoUrl,f$2,compDescr,f$3,f$4;
  compName=(f=Enhance$3.WithValidationIcon((a=Controls$2.Input(job.CompanyName),Data.Validator().IsNotEmpty("You must enter a non empty company name.",a))),Enhance$3.WithTextLabel("Company name",f));
  compUrl=(f$1=Controls$2.Input(job.CompanyWebSiteUrl),Enhance$3.WithTextLabel("Company URL",f$1));
  compLogoUrl=(f$2=Controls$2.Input(job.CompanyLogoUrl),Enhance$3.WithTextLabel("Company logo URL",f$2));
  compDescr=Enhance$3.WithLabelAbove((f$3=Controls$2.TextArea(job.CompanyDescription),Enhance$3.WithTextLabel("Company description",f$3)));
  f$4=Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(function(name,url,lUrl,descr)
  {
   return{
    Name:name,
    Description:descr,
    Url:url,
    LogoUrl:lUrl
   };
  },4)),compName),compUrl),compLogoUrl),compDescr);
  return Enhance$1.WithStep(1,"Company Info",f$4);
 };
 Client$23.JobTitleForm=function(job)
 {
  var f,a,f$1;
  f=Enhance$3.WithValidationIcon((a=(f$1=Controls$2.Input(job.Title),Enhance$3.WithCssClass("title",f$1)),Data.Validator().IsNotEmpty("You must enter a non empty title.",a)));
  return Enhance$3.WithTextLabel("Job title",f);
 };
 Client$23.ListingPeriodForm=function(user,labelAndPeriods,def)
 {
  var b;
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   var v,m;
   return b.Bind(Enhance$3.WithFormContainer((v=(m=function(lp)
   {
    return[lp.Label+" ("+String(lp.Price)+" credits )",lp];
   },function(l)
   {
    return List.map(m,l);
   }(labelAndPeriods)),Controls$2.RadioButtonGroup(def,v))),function(a)
   {
    return b.ReturnFrom(user.Credit<a.Price?Formlet$1.InitWithFailure(FormletHelpers.ErrorF("You do not have enough credits for this option. Please top up your credits\r\n                            before proceeding or select a shorter period.")):Formlet$1.Return(a));
   });
  });
 };
 Client$23.LocationForms=function(locs)
 {
  var p,p$1,rest,fst,x,f,restLocs,fstLoc;
  function locationForm(loc)
  {
   var city,f$1,a,state,f$2,zip,f$3,country,f$4,a$1,f$5;
   city=(f$1=Enhance$3.WithValidationIcon((a=Controls$2.Input(loc.City),Data.Validator().IsNotEmpty("Enter non empty city",a))),Enhance$3.WithTextLabel("City",f$1));
   state=(f$2=Controls$2.Input(loc.State),Enhance$3.WithTextLabel("State",f$2));
   zip=(f$3=Controls$2.Input(loc.Zip),Enhance$3.WithTextLabel("Zip",f$3));
   country=(f$4=Enhance$3.WithValidationIcon((a$1=Controls$2.Input(loc.Country),Data.Validator().IsNotEmpty("Enter non empty country",a$1))),Enhance$3.WithTextLabel("Country",f$4));
   f$5=function(elem)
   {
    var x$1;
    return Operators$1.add((x$1=[Attr.Attr().NewAttr("class","job-location")],Tags$1.Tags().NewTag("div",x$1)),[elem]);
   };
   return function(f$6)
   {
    return Formlet$1.MapElement(f$5,f$6);
   }(Data.$(Data.$(Data.$(Data.$(Formlet$1.Return(Runtime.Curried(JobLocation.New,4)),city),state),zip),country));
  }
  p=(p$1=locs.$==1?[locs.$0,locs.$1]:[JobLocation.get_Empty(),List.T.Empty],(rest=p$1[1],(fst=p$1[0],[locationForm(fst),(x=List.map(locationForm,rest),(f=locationForm(JobLocation.get_Empty()),Formlet.Many(f,x)))])));
  restLocs=p[1];
  fstLoc=p[0];
  return Data.$(Data.$(Formlet$1.Return(function(l)
  {
   return function(ls)
   {
    return new List.T({
     $:1,
     $0:l,
     $1:ls
    });
   };
  }),fstLoc),restLocs);
 };
 Client$23.EditorParams=function()
 {
  SC$5.$cctor();
  return SC$5.EditorParams;
 };
 SC$5.$cctor=Runtime.Cctor(function()
 {
  var i,B;
  SC$5.EditorParams=(i=AdvancedHtmlEditorConfiguration.get_Default(),(B={
   $:1,
   $0:List.ofArray([List.ofArray([{
    $:0
   },{
    $:1
   },{
    $:2
   },{
    $:3
   },{
    $:40
   },{
    $:15
   },{
    $:16
   },{
    $:40
   },{
    $:4
   },{
    $:5
   },{
    $:6
   },{
    $:7
   },{
    $:40
   },{
    $:9
   },{
    $:8
   },{
    $:40
   },{
    $:25
   },{
    $:40
   },{
    $:17
   },{
    $:18
   },{
    $:19
   },{
    $:40
   },{
    $:20
   },{
    $:22
   },{
    $:40
   },{
    $:21
   }]),List.T.Empty,List.T.Empty])
  },AdvancedHtmlEditorConfiguration.New({
   $:1,
   $0:608
  },{
   $:1,
   $0:250
  },i.Plugins,{
   $:1,
   $0:"top"
  },i.ToolbarAlign,i.StatusbarLocation,B)));
  SC$5.$cctor=Global.ignore;
 });
 Client$24.ExtendPeriodForm=function(args)
 {
  var form,b,b$1;
  form=(b=Formlet$1.Do(),b.Delay(function()
  {
   var f,b$2;
   return b.Bind((f=(b$2=Formlet$1.Do(),b$2.Delay(function()
   {
    return b$2.Bind(Client$23.ListingPeriodForm(args.User,args.PeriodLabelsAndPrices,{
     $:1,
     $0:0
    }),function(a)
    {
     return b$2.Bind(Client$23.ConfirmUpdateForm(args.ActiveDaysLeft,a),function()
     {
      return b$2.Return(a);
     });
    });
   })),UserControls.SetupForm("Extend",true,f)),function(a)
   {
    return b.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.JobOffer+Rpc.ExtendPeriod:-948662656",[args.JobId,a])),function(a$1)
    {
     return b.ReturnFrom(a$1?(Global.window.location.reload(true),FormletHelpers.SuccessF("The job listing period has been extended.")):FormletHelpers.ErrorF("Something went wrong, the listing period could not be extended."));
    });
   });
  }));
  b$1=Formlet$1.Do();
  return b$1.Delay(function()
  {
   return b$1.Bind(Controls.SmallButton("Extend"),function()
   {
    return b$1.Bind(Enhance$1.WithDialog("Extend job listing",form),function()
    {
     return b$1.Return();
    });
   });
  });
 };
 Client$24.SetActiveJob=function(jobId,job,rowId)
 {
  var p,title,rpc,msg,label,b;
  p=job.IsPublic?["Deactivate","Confirm deactivation of job","Are you sure you would like to deactivate this \r\n                        job and remove it from the public job listing",function(j)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.JobOffer+Rpc.DeactivateJob:-2074122232",[j]);
  }]:["Activate","Confirm activation of job","Are you sure you would like to activate this \r\n                        job and making it publicly visible.",function(j)
  {
   return(new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.JobOffer+Rpc.ActivateJob:-2074122232",[j]);
  }];
  title=p[1];
  rpc=p[3];
  msg=p[2];
  label=p[0];
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Controls.SmallButton(label),function()
   {
    return b.Bind(Formlet.Confirm({
     Title:title,
     Message:msg,
     YesLabel:"Yes",
     NoLabel:"No"
    }),function(a)
    {
     return b.Bind(a?(function()
     {
     }(Concurrency.Start(Concurrency.Delay(function()
     {
      var x;
      x=rpc(jobId);
      return Concurrency.Bind(x,function()
      {
       Global.window.location.reload(true);
       return Concurrency.Return(null);
      });
     }),null)),Formlet$1.Return()):Formlet$1.Never(),function()
     {
      return b.Return();
     });
    });
   });
  });
 };
 Client$24.Applicants=function(apps)
 {
  var jobRow,b;
  jobRow=function(app)
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7;
   x=List.ofArray([Operators$1.add((x$1=[Attr.Attr().NewAttr("class","date")],Tags$1.Tags().NewTag("td",x$1)),[(x$2=app.Date,Tags$1.Tags().text(x$2))]),Operators$1.add((x$3=[Attr.Attr().NewAttr("class","username")],Tags$1.Tags().NewTag("td",x$3)),List.ofSeq(Seq.delay(function()
   {
    var m,x$8,url,x$9,x$10;
    return[(m=app.UsernameUrl,m==null?(x$8=app.Username,Tags$1.Tags().text(x$8)):(url=m.$0,Operators$1.add((x$9=[Attr.Attr().NewAttr("href",url)],Tags$1.Tags().NewTag("a",x$9)),[(x$10=app.Username,Tags$1.Tags().text(x$10))])))];
   }))),Operators$1.add((x$4=[Attr.Attr().NewAttr("class","message")],Tags$1.Tags().NewTag("td",x$4)),[Operators$1.add((x$5=[(x$6=app.MessageUrl,Attr.Attr().NewAttr("href",x$6))],Tags$1.Tags().NewTag("a",x$5)),[(x$7=app.Title,Tags$1.Tags().text(x$7))])])]);
   return Tags$1.Tags().NewTag("tr",x);
  };
  b=Formlet$1.Do();
  return b.Delay(function()
  {
   return b.Bind(Controls.SmallButton(String(List.length(apps))),function()
   {
    var f;
    return b.ReturnFrom((f=Formlet$1.OfElement(function()
    {
     var rows,x,x$1,x$2,x$3,x$4;
     rows=List.map(jobRow,apps);
     return Operators$1.add((x=[Attr.Attr().NewAttr("class","job-application-listing")],Tags$1.Tags().NewTag("table",x)),[(x$1=[(x$2=[Tags$1.Tags().text("Date")],Tags$1.Tags().NewTag("th",x$2)),(x$3=[Tags$1.Tags().text("From")],Tags$1.Tags().NewTag("th",x$3)),(x$4=[Tags$1.Tags().text("Message")],Tags$1.Tags().NewTag("th",x$4))],Tags$1.Tags().NewTag("thead",x$1)),Tags$1.Tags().NewTag("tbody",rows)]);
    }),Enhance$1.WithDialog("Job inquires",f)));
   });
  });
 };
 Client$25.SubscribeForm=function(data)
 {
  var periodForm,b,b$1;
  periodForm=Enhance$3.WithFormContainer((b=Formlet$1.Do(),b.Delay(function()
  {
   return b.Bind(Enhance$3.WithFormContainer(Client$23.ListingPeriodForm(data.User,data.PeriodsLabelsAndPrices,null)),function(a)
   {
    return b.Bind(Client$25.ConfirmSubscribeForm(a),function()
    {
     return b.Return(a);
    });
   });
  })));
  b$1=Formlet$1.Do();
  return b$1.Delay(function()
  {
   return b$1.Bind(UserControls.SetupForm("Subscribe",true,periodForm),function(a)
   {
    return b$1.Bind(Formlet.LoadingFormlet((new AjaxRemotingProvider.New()).Async("FPish:FPish.Model.DeveloperSearchSubscription+Rpc.Subscribe:1339848257",[a])),function(a$1)
    {
     var url;
     return b$1.ReturnFrom(a$1?(url=data.RedirectUrl,Global.location.href=url,FormletHelpers.SuccessF("You are now subscribed.")):FormletHelpers.ErrorF("Something went wrong, your subscription \r\n                                could not be processed"));
    });
   });
  });
 };
 Client$25.ConfirmSubscribeForm=function(period)
 {
  var conf,a,f,f$1;
  conf=(a=Controls$2.Checkbox(false),Data.Validator().IsTrue("You need to agree with the terms.",a));
  f=function(el)
  {
   var x;
   return Operators$1.add((x=[Attr.Attr().NewAttr("class","box")],Tags$1.Tags().NewTag("div",x)),[el]);
  };
  return function(f$2)
  {
   return Formlet$1.MapElement(f,f$2);
  }(Data.$(Data.$(Formlet$1.Return(function()
  {
   return function()
   {
    return null;
   };
  }),(f$1=Formlet$1.OfElement(function()
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7;
   x=[(x$1=[Tags$1.Tags().text("Subscribing will grant you access to all developer profiles for a period of "),(x$2=[(x$3=period.Label.toLowerCase(),Tags$1.Tags().text(x$3))],Tags$1.Tags().NewTag("strong",x$2)),Tags$1.Tags().text(".")],Tags$1.Tags().NewTag("p",x$1)),(x$4=[Tags$1.Tags().text(" The total the cost is "),(x$5=[(x$6=String(period.Price),Tags$1.Tags().text(x$6))],Tags$1.Tags().NewTag("strong",x$5)),Tags$1.Tags().text(" credits, which will be deducted from your FPish credits balance.")],Tags$1.Tags().NewTag("p",x$4)),(x$7=[Tags$1.Tags().text("Please confirm that you agree with these terms.")],Tags$1.Tags().NewTag("p",x$7))];
   return Tags$1.Tags().NewTag("div",x);
  }),Formlet$1.InitWith(null,f$1))),conf));
 };
 Reset.RegisterPage=function()
 {
  var rvError,isLoading,r;
  rvError=Var.Create$1("");
  isLoading=Var.Create$1(false);
  r=function(name,email,pw,repw,street,street2,city,state,zip,country,phone,isCompany,compname,vatin,submitter)
  {
   var _this,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,t$12,t$13,t$14,t$15,t$16,t$17,t$18,t$19,t$20,t$21,t$22,t$23,t$24,t$25,t$26,t$27,t$28,t$29,t$30,t$31,t$32,t$33,t$34,t$35,N,a,N$1,v,a$1,head,E,a$2,E$1,v$1,a$3,head$1,P,a$4,P$1,v$2,a$5,head$2,R,a$6,R$1,v$3,a$7,head$3,S,a$8,S$1,v$4,a$9,head$4,C,a$10,C$1,v$5,a$11,head$5,Z,a$12,Z$1,v$6,a$13,head$6,C$2,a$14,a$15,a$16,v$7,a$17,a$18,C$3,a$19,C$4,a$20,a$21,a$22,a$23,a$24,a$25,a$26,I,v$8,I$1,v$9,C$5,a$27,C$6,v$10,a$28,head$7,R$2,a$29,a$30,head$8,I$2,S$2;
   _this=FPish_Templates.registercontrol((t=(t$1=(t$2=(t$3=(t$4=(t$5=(t$6=(t$7=(t$8=(t$9=(t$10=(t$11=(t$12=(t$13=(t$14=(t$15=(t$16=(t$17=(t$18=(t$19=(t$20=(t$21=(t$22=(t$23=(t$24=(t$25=(t$26=(t$27=(t$28=(t$29=(t$30=(t$31=(t$32=(t$33=(t$34=(t$35=List.T.Empty,new List.T({
    $:1,
    $0:{
     $:6,
     $0:"fullname",
     $1:name
    },
    $1:t$35
   })),(N=(a=View.Through$1(submitter.view,name),View$1.Map(Reset.ErrorHandler,a)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"nameerror",
     $1:N
    },
    $1:t$34
   }))),(N$1=List.ofArray([(v=(a$1=View.Through$1(submitter.view,name),View$1.Map(Reset.ErrorClass,a$1)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head={
    $:3,
    $0:"nameerr",
    $1:AttrProxy.Concat(N$1)
   },new List.T({
    $:1,
    $0:head,
    $1:t$33
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"email",
     $1:email
    },
    $1:t$32
   })),(E=(a$2=View.Through$1(submitter.view,email),View$1.Map(Reset.ErrorHandler,a$2)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"emailerror",
     $1:E
    },
    $1:t$31
   }))),(E$1=List.ofArray([(v$1=(a$3=View.Through$1(submitter.view,email),View$1.Map(Reset.ErrorClass,a$3)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$1,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$1={
    $:3,
    $0:"emailerr",
    $1:AttrProxy.Concat(E$1)
   },new List.T({
    $:1,
    $0:head$1,
    $1:t$30
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"password",
     $1:pw
    },
    $1:t$29
   })),(P=(a$4=View.Through$1(submitter.view,pw),View$1.Map(Reset.ErrorHandler,a$4)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"pwerror",
     $1:P
    },
    $1:t$28
   }))),(P$1=List.ofArray([(v$2=(a$5=View.Through$1(submitter.view,pw),View$1.Map(Reset.ErrorClass,a$5)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$2,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$2={
    $:3,
    $0:"pwerr",
    $1:AttrProxy.Concat(P$1)
   },new List.T({
    $:1,
    $0:head$2,
    $1:t$27
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"repassword",
     $1:repw
    },
    $1:t$26
   })),(R=(a$6=View.Through$1(submitter.view,repw),View$1.Map(Reset.ErrorHandler,a$6)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"repwerror",
     $1:R
    },
    $1:t$25
   }))),(R$1=List.ofArray([(v$3=(a$7=View.Through$1(submitter.view,repw),View$1.Map(Reset.ErrorClass,a$7)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$3,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$3={
    $:3,
    $0:"repwerr",
    $1:AttrProxy.Concat(R$1)
   },new List.T({
    $:1,
    $0:head$3,
    $1:t$24
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"street",
     $1:street
    },
    $1:t$23
   })),(S=(a$8=View.Through$1(submitter.view,street),View$1.Map(Reset.ErrorHandler,a$8)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"streeterror",
     $1:S
    },
    $1:t$22
   }))),(S$1=List.ofArray([(v$4=(a$9=View.Through$1(submitter.view,street),View$1.Map(Reset.ErrorClass,a$9)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$4,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$4={
    $:3,
    $0:"streeterr",
    $1:AttrProxy.Concat(S$1)
   },new List.T({
    $:1,
    $0:head$4,
    $1:t$21
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"street2",
     $1:street2
    },
    $1:t$20
   })),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"city",
     $1:city
    },
    $1:t$19
   })),(C=(a$10=View.Through$1(submitter.view,city),View$1.Map(Reset.ErrorHandler,a$10)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"cityerror",
     $1:C
    },
    $1:t$18
   }))),(C$1=List.ofArray([(v$5=(a$11=View.Through$1(submitter.view,city),View$1.Map(Reset.ErrorClass,a$11)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$5,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$5={
    $:3,
    $0:"cityerr",
    $1:AttrProxy.Concat(C$1)
   },new List.T({
    $:1,
    $0:head$5,
    $1:t$17
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"state",
     $1:state
    },
    $1:t$16
   })),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"zip",
     $1:zip
    },
    $1:t$15
   })),(Z=(a$12=View.Through$1(submitter.view,zip),View$1.Map(Reset.ErrorHandler,a$12)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"ziperror",
     $1:Z
    },
    $1:t$14
   }))),(Z$1=List.ofArray([(v$6=(a$13=View.Through$1(submitter.view,zip),View$1.Map(Reset.ErrorClass,a$13)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$6,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$6={
    $:3,
    $0:"ziperr",
    $1:AttrProxy.Concat(Z$1)
   },new List.T({
    $:1,
    $0:head$6,
    $1:t$13
   })))),(C$2=(a$14=[AttrModule.Class("mdl-textfield mdl-js-textfield")],(a$15=[(a$16=[(v$7=(a$17=View.Through$1(submitter.view,country),View$1.Map(Reset.ErrorClass,a$17)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$7,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")],(a$18=Reset.Countries(),Doc.Select(a$16,Global.id,a$18,country)))],Doc.Element("div",a$14,a$15))),new List.T({
    $:1,
    $0:{
     $:0,
     $0:"country",
     $1:C$2
    },
    $1:t$12
   }))),(C$3=(a$19=View.Through$1(submitter.view,country),View$1.Map(Reset.ErrorHandler,a$19)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"countryerror",
     $1:C$3
    },
    $1:t$11
   }))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"phone",
     $1:phone
    },
    $1:t$10
   })),(C$4=(a$20=[AttrModule.Class("input-holder")],(a$21=[(a$22=[AttrModule.Class("input-name")],(a$23=[Doc.TextNode("Representing a company")],Doc.Element("span",a$22,a$23))),(a$24=[AttrModule.Class("mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect custom-checkbox")],(a$25=[(a$26=[AttrModule.Class("mdl-checkbox__input")],Doc.CheckBox(a$26,isCompany))],Doc.Element("label",a$24,a$25)))],Doc.Element("div",a$20,a$21))),new List.T({
    $:1,
    $0:{
     $:0,
     $0:"companycheckbox",
     $1:C$4
    },
    $1:t$9
   }))),(I=AttrModule.Dynamic("class",(v$8=isCompany.RView(),View$1.Map(function(c)
   {
    return!c?"hidden":"";
   },v$8))),new List.T({
    $:1,
    $0:{
     $:3,
     $0:"iscompany",
     $1:I
    },
    $1:t$8
   }))),(I$1=AttrModule.Dynamic("class",(v$9=isCompany.RView(),View$1.Map(function(c)
   {
    return!c?"hidden":"helper";
   },v$9))),new List.T({
    $:1,
    $0:{
     $:3,
     $0:"iscompanyhelp",
     $1:I$1
    },
    $1:t$7
   }))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"companyname",
     $1:compname
    },
    $1:t$6
   })),(C$5=(a$27=View.Through$1(submitter.view,compname),View$1.Map(Reset.ErrorHandler,a$27)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"companyerror",
     $1:C$5
    },
    $1:t$5
   }))),(C$6=List.ofArray([(v$10=(a$28=View.Through$1(submitter.view,compname),View$1.Map(Reset.ErrorClass,a$28)),function(a$31)
   {
    return AttrModule.DynamicClass("inp-with-error",v$10,a$31);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$7={
    $:3,
    $0:"companyerr",
    $1:AttrProxy.Concat(C$6)
   },new List.T({
    $:1,
    $0:head$7,
    $1:t$4
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"vatin",
     $1:vatin
    },
    $1:t$3
   })),(R$2=List.ofArray([AttrModule.Handler("click",function()
   {
    return function()
    {
     Var.Set(rvError,"");
     return submitter.Trigger();
    };
   }),(a$29=View$1.Const("disabled"),(a$30=isLoading.v,AttrModule.DynamicPred("disabled",a$30,a$29)))]),(head$8={
    $:3,
    $0:"register",
    $1:AttrProxy.Concat(R$2)
   },new List.T({
    $:1,
    $0:head$8,
    $1:t$2
   })))),(I$2=AttrModule.DynamicClass("hidden",isLoading.v,function(v$11)
   {
    return!v$11;
   }),new List.T({
    $:1,
    $0:{
     $:3,
     $0:"isloading",
     $1:I$2
    },
    $1:t$1
   }))),(S$2=rvError.v,new List.T({
    $:1,
    $0:{
     $:2,
     $0:"servererror",
     $1:S$2
    },
    $1:t
   }))));
   return _this.OnAfterRender(function()
   {
    Global.componentHandler.upgradeDom();
   });
  };
  return function(a)
  {
   return Form.Render(Runtime.Curried(r,15),a);
  }(function()
  {
   var a,a$1,a$2,a$3,a$4,a$5,a$6,a$7;
   a=function(clientInfo)
   {
    Var.Set(isLoading,true);
    Var.Set(rvError,"");
    Concurrency.Start(Concurrency.Delay(function()
    {
     var x;
     x=(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc+Async.ComplexRegistration:-1043219845",[clientInfo]);
     return Concurrency.Bind(x,function(a$8)
     {
      var a$9,errmsg;
      a$9=a$8.$==1?(errmsg=a$8.$0,(Var.Set(rvError,errmsg),Concurrency.Return(null))):(Global.$("#resetPWModal").modal("show"),Concurrency.Return(null));
      return Concurrency.Combine(a$9,Concurrency.Delay(function()
      {
       Var.Set(isLoading,false);
       return Concurrency.Return(null);
      }));
     });
    }),null);
   };
   return function(a$8)
   {
    return Form.Run(a,a$8);
   }(Form.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Form.Return(Runtime.Curried(function(name,email,pw,street,street2,city,state,zip,country,phone,companyOption)
   {
    return ClientInfo.New(email,companyOption,name,pw,street,street2,city,state,zip,country,phone,null);
   },11)),(a$1=Form.Yield(""),Validation.IsNotEmpty("Required field",a$1))),(a$2=(a$3=Form.Yield(""),Validation.IsNotEmpty("Required field",a$3)),Validation.IsMatch("^.+@.+\\..+$","Please enter a valid email address.",a$2))),Reset.PasswordConfirmForm()),(a$4=Form.Yield(""),Validation.IsNotEmpty("Required field",a$4))),Form.Yield("")),(a$5=Form.Yield(""),Validation.IsNotEmpty("Required field",a$5))),Form.Yield("")),(a$6=Form.Yield(""),Validation.IsNotEmpty("Required field",a$6))),(a$7=Form.Yield("United States"),Validation.IsNotEmpty("Required field",a$7))),Form.Yield("")),Reset.CompanyForm(null,false))));
  }());
 };
 Reset.Countries=function()
 {
  SC$6.$cctor();
  return SC$6.Countries;
 };
 Reset.rvIsCompany=function()
 {
  SC$6.$cctor();
  return SC$6.rvIsCompany;
 };
 Reset.CompanyForm=function(u,isItSet)
 {
  var compName,b,a,a$1,b$1;
  compName=Form.Yield(Operators.DefaultArg((b=function(u$1)
  {
   var m;
   m=function(comp)
   {
    return comp.Name;
   };
   return function(o)
   {
    return o==null?null:{
     $:1,
     $0:m(o.$0)
    };
   }(u$1.CompanyInfo);
  },function(o)
  {
   return o==null?null:b(o.$0);
  }(u)),""));
  a=function(isChecked,name,vatin)
  {
   var a$2;
   return isChecked?Strings.Trim(vatin)===""?{
    $:1,
    $0:(a$2={
     $:1,
     $0:Strings.Trim(vatin)
    },CompanyInfo.Make(name,a$2))
   }:{
    $:1,
    $0:CompanyInfo.Make(name,null)
   }:null;
  };
  return function(a$2)
  {
   return Form.Map(function($1)
   {
    return a($1[0],$1[1],$1[2]);
   },a$2);
  }((a$1=function(a$2)
  {
   var n,iC;
   return a$2.$==0?(n=a$2.$0[1],(iC=a$2.$0[0],(!iC?true:iC?Strings.Trim(n)!=="":false)?a$2:{
    $:1,
    $0:List.ofArray([ErrorMessage.Create(compName,"Company name is required")])
   })):a$2;
  },function(a$2)
  {
   return Form.MapResult(a$1,a$2);
  }(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Form.Return(Runtime.Curried3(function(isChecked,name,vatin)
  {
   return[isChecked,name,vatin];
  })),Form.Yield(isItSet)),compName),Form.Yield(Operators.DefaultArg((b$1=function(u$1)
  {
   var b$2;
   b$2=function(comp)
   {
    var m;
    m=Global.id;
    return function(o)
    {
     return o==null?null:{
      $:1,
      $0:m(o.$0)
     };
    }(comp.VAT);
   };
   return function(o)
   {
    return o==null?null:b$2(o.$0);
   }(u$1.CompanyInfo);
  },function(o)
  {
   return o==null?null:b$1(o.$0);
  }(u)),""))))));
 };
 Reset.PasswordConfirmForm=function()
 {
  var first,a,a$1,a$2;
  first=Form.Yield("");
  a=function(t)
  {
   return t[0];
  };
  return function(a$3)
  {
   return Form.Map(a,a$3);
  }((a$1=function(a$3)
  {
   var pw2,pw1;
   return a$3.$==0?(pw2=a$3.$0[1],(pw1=a$3.$0[0],pw1===pw2?a$3:{
    $:1,
    $0:List.ofArray([ErrorMessage.Create(first,"The passwords must be the same")])
   })):a$3;
  },function(a$3)
  {
   return Form.MapResult(a$1,a$3);
  }(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Form.Return(function(pw1)
  {
   return function(pw2)
   {
    return[pw1,pw2];
   };
  }),Validation.IsNotEmpty("Required field",first)),(a$2=Form.Yield(""),Validation.IsNotEmpty("Required field",a$2))))));
 };
 Reset.RegModal=function()
 {
  var t,f;
  return FPish_Templates.registermodal((t=List.T.Empty,new List.T({
   $:1,
   $0:{
    $:4,
    $0:"redirect",
    $1:(f=function()
    {
     Global.$("#resetPWModal").modal("hide");
    },function()
    {
     return function()
     {
      return f();
     };
    })
   },
   $1:t
  })));
 };
 Reset.Modal=function()
 {
  var t,f;
  return FPish_Templates.resetpwmodal((t=List.T.Empty,new List.T({
   $:1,
   $0:{
    $:4,
    $0:"redirect",
    $1:(f=function()
    {
     Global.$("#resetPWModal").modal("hide");
    },function()
    {
     return function()
     {
      return f();
     };
    })
   },
   $1:t
  })));
 };
 Reset.ResetPasswordPage=function(token)
 {
  var rvOther,rvServer,isLoading,r;
  rvOther=Var.Create$1("");
  rvServer=Var.Create$1("");
  isLoading=Var.Create$1(false);
  r=function(pw1,pw2,submitter)
  {
   var _this,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,P,a,P$1,v,a$1,head,R,a$2,R$1,v$1,a$3,head$1,R$2,a$4,a$5,head$2,I,S;
   _this=FPish_Templates.resetpwcontrol((t=(t$1=(t$2=(t$3=(t$4=(t$5=(t$6=(t$7=(t$8=List.T.Empty,new List.T({
    $:1,
    $0:{
     $:6,
     $0:"password",
     $1:pw1
    },
    $1:t$8
   })),(P=(a=View.Through$1(submitter.view,pw1),View$1.Map(Reset.ErrorHandler,a)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"pwerror",
     $1:P
    },
    $1:t$7
   }))),(P$1=List.ofArray([(v=(a$1=View.Through$1(submitter.view,pw1),View$1.Map(Reset.ErrorClass,a$1)),function(a$6)
   {
    return AttrModule.DynamicClass("inp-with-error",v,a$6);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head={
    $:3,
    $0:"pwerr",
    $1:AttrProxy.Concat(P$1)
   },new List.T({
    $:1,
    $0:head,
    $1:t$6
   })))),new List.T({
    $:1,
    $0:{
     $:6,
     $0:"repassword",
     $1:pw2
    },
    $1:t$5
   })),(R=(a$2=View.Through$1(submitter.view,pw2),View$1.Map(Reset.ErrorHandler,a$2)),new List.T({
    $:1,
    $0:{
     $:2,
     $0:"repwerror",
     $1:R
    },
    $1:t$4
   }))),(R$1=List.ofArray([(v$1=(a$3=View.Through$1(submitter.view,pw2),View$1.Map(Reset.ErrorClass,a$3)),function(a$6)
   {
    return AttrModule.DynamicClass("inp-with-error",v$1,a$6);
   }(Global.id)),AttrModule.Class("mdl-textfield__input")]),(head$1={
    $:3,
    $0:"repwerr",
    $1:AttrProxy.Concat(R$1)
   },new List.T({
    $:1,
    $0:head$1,
    $1:t$3
   })))),(R$2=List.ofArray([AttrModule.Handler("click",function()
   {
    return function()
    {
     Var.Set(rvServer,"");
     return submitter.Trigger();
    };
   }),(a$4=View$1.Const("disabled"),(a$5=isLoading.v,AttrModule.DynamicPred("disabled",a$5,a$4)))]),(head$2={
    $:3,
    $0:"reset",
    $1:AttrProxy.Concat(R$2)
   },new List.T({
    $:1,
    $0:head$2,
    $1:t$2
   })))),(I=AttrModule.DynamicClass("hidden",isLoading.v,function(v$2)
   {
    return!v$2;
   }),new List.T({
    $:1,
    $0:{
     $:3,
     $0:"isloading",
     $1:I
    },
    $1:t$1
   }))),(S=rvServer.v,new List.T({
    $:1,
    $0:{
     $:2,
     $0:"servererror",
     $1:S
    },
    $1:t
   }))));
   return _this.OnAfterRender(function()
   {
    Global.componentHandler.upgradeDom();
   });
  };
  return function(a)
  {
   return Form.Render(Runtime.Curried3(r),a);
  }(function()
  {
   var fpw1,a,a$1,a$2,a$3;
   fpw1=Form.Yield("");
   a=function(pw)
   {
    Var.Set(isLoading,true);
    Concurrency.Start(Concurrency.Delay(function()
    {
     var x;
     x=(new AjaxRemotingProvider.New()).Async("FPish:FPish.User+Rpc.ResetPassword:22339411",[token,pw]);
     return Concurrency.Bind(x,function(a$4)
     {
      var e;
      return a$4.$==1?(e=a$4.$0,(Var.Set(isLoading,false),Var.Set(rvServer,e),Concurrency.Return(null))):(Var.Set(isLoading,false),Global.$("#resetPWModal").modal("show"),Concurrency.Return(null));
     });
    }),null);
   };
   return function(a$4)
   {
    return Form.Run(a,a$4);
   }(Form.WithSubmit((a$1=function(t)
   {
    return t[0];
   },function(a$4)
   {
    return Form.Map(a$1,a$4);
   }((a$2=function(a$4)
   {
    var p2,p1;
    return a$4.$==0?(p2=a$4.$0[1],(p1=a$4.$0[0],p1===p2?a$4:{
     $:1,
     $0:List.ofArray([ErrorMessage.Create(fpw1,"Passwords must be the same")])
    })):a$4;
   },function(a$4)
   {
    return Form.MapResult(a$2,a$4);
   }(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Form.Return(function(pw1)
   {
    return function(pw2)
    {
     return[pw1,pw2];
    };
   }),Validation.IsNotEmpty("Required field",fpw1)),(a$3=Form.Yield(""),Validation.IsNotEmpty("Required field",a$3)))))))));
  }());
 };
 Reset.ErrorClass=function(res)
 {
  var e,a,m;
  return res.$==1?(e=res.$0,(a=List.tryHead((m=function(e$1)
  {
   return e$1.message;
  },function(l)
  {
   return List.map(m,l);
  }(e))),(a!=null?a.$==1:false)?true:false)):false;
 };
 Reset.ErrorHandler=function(res)
 {
  var e,err,m;
  return res.$==1?(e=res.$0,(err=List.tryHead((m=function(e$1)
  {
   return e$1.message;
  },function(l)
  {
   return List.map(m,l);
  }(e))),Operators.DefaultArg(err,""))):"";
 };
 SC$6.$cctor=Runtime.Cctor(function()
 {
  SC$6.rvIsCompany=Var.Create$1(false);
  SC$6.Countries=List.ofArray(["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of the","Cook Islands","Costa Rica","Côte d\u2019Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji Islands","Finland","France","French Guiana","French Polynesia","French Southern territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]);
  SC$6.$cctor=Global.ignore;
 });
 LoginContent=Client$26.LoginContent=Runtime.Class({
  get_Body:function()
  {
   var $this,x,m,u,url,v,a,r;
   $this=this;
   x=Operators$1.add(Tags$1.Tags().NewTag("div",[]),[]);
   m=$this._Data[0];
   m.$==0?(u=m.$0,url=$this._Data[1]+"/"+u.username,v=(a=(r={},r.url=url,r.method="POST",r.xhrFields={
    withCredentials:true
   },r),Global.jQuery.ajax(a))):void 0;
   return x;
  }
 },Web.Control,LoginContent);
 FPish_Templates.registercontrol=function(h)
 {
  var n,e;
  n={
   $:1,
   $0:"registercontrol"
  };
  e=function()
  {
   return Global.jQuery.parseHTML("<div class=\"register login-control mdl-card\">\r\n    <div class=\"mdl-card__title\"><div class=\"login-title centered-text\">WebSharper Support</div></div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        <h5>User information:</h5>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-account-outline\"></span> Full Name (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"text\" ws-attr=\"NameErr\" ws-var=\"FullName\">\r\n            </div>\r\n            <div class=\"err\">${NameError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-email-outline\"></span> Email (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"email\" ws-attr=\"EmailErr\" ws-var=\"Email\">\r\n            </div>\r\n            <div class=\"err\">${EmailError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-lock-outline\"></span> Password (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"password\" ws-attr=\"PwErr\" ws-var=\"Password\">\r\n            </div>\r\n            <div class=\"err\">${PwError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-lock-outline\"></span> Repeat password (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"password\" ws-attr=\"RePwErr\" ws-var=\"RePassword\">\r\n            </div>\r\n            <div class=\"err\">${RePwError}</div>\r\n        </div>\r\n        <hr>\r\n        <h5>Billing information:</h5>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-map-marker\"></span> Street (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"text\" ws-attr=\"StreetErr\" ws-var=\"Street\">\r\n            </div>\r\n            <div class=\"err\">${StreetError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-map-marker\"></span> Street (cont)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"text\" ws-var=\"Street2\" class=\"mdl-textfield__input\">\r\n            </div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-city\"></span> City (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"text\" ws-attr=\"CityErr\" ws-var=\"City\">\r\n            </div>\r\n            <div class=\"err\">${CityError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-map\"></span> State</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"text\" ws-var=\"State\" class=\"mdl-textfield__input\">\r\n            </div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-email-outline\"></span> Zip (*)</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"text\" ws-attr=\"ZipErr\" ws-var=\"Zip\">\r\n            </div>\r\n            <div class=\"err\">${ZipError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-earth\"></span> Country (*)</span>\r\n            <div ws-replace=\"Country\"></div>\r\n            <div class=\"err\">${CountryError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-phone\"></span> Phone</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"tel\" ws-var=\"Phone\" class=\"mdl-textfield__input\">\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <div ws-replace=\"CompanyCheckbox\"></div>\r\n        </div>\r\n        <div ws-attr=\"IsCompany\">\r\n            <div class=\"input-holder\">\r\n                <span class=\"input-name\"><span class=\"mdi mdi-domain\"></span> Company Name (*)</span>\r\n                <div class=\"mdl-textfield mdl-js-textfield\">\r\n                    <label class=\"mdl-textfield__label\"></label>\r\n                    <input type=\"text\" ws-var=\"CompanyName\" ws-attr=\"CompanyErr\">\r\n                </div>\r\n                <div class=\"err\">${CompanyError}</div>\r\n            </div>\r\n            <div class=\"input-holder\">\r\n                <span class=\"input-name\"><span class=\"mdi mdi-currency-eur\"></span> VATIN (**)</span>\r\n                <div class=\"mdl-textfield mdl-js-textfield\">\r\n                    <label class=\"mdl-textfield__label\"></label>\r\n                    <input type=\"text\" ws-var=\"VATIN\" class=\"mdl-textfield__input\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"helper\">(*): Required field.</div>\r\n        <div class=\"helper\" ws-attr=\"IsCompanyHelp\">(**): VAT Identification Number. As an EU company (outside Hungary), you can account for the VAT, and supplying us with your VATIN allows us not to charge you for VAT.</div>\r\n        <div class=\"input-holder login\">\r\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" ws-attr=\"Register\">Register</button>\r\n        </div>\r\n        <div class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" ws-attr=\"IsLoading\"></div>\r\n        <div class=\"error\">${ServerError}</div>\r\n    </div>\r\n</div>");
  };
  return h?Doc.GetOrLoadTemplate("login",n,e,h):Doc.PrepareTemplate("login",n,e);
 };
 FPish_Templates.registermodal=function(h)
 {
  var n,e;
  n={
   $:1,
   $0:"registermodal"
  };
  e=function()
  {
   return Global.jQuery.parseHTML("<div id=\"resetPWModal\" class=\"modal fade\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Registration</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">X</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div>You have successfully registered.</div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" ws-onclick=\"Redirect\">Ok</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>");
  };
  return h?Doc.GetOrLoadTemplate("register",n,e,h):Doc.PrepareTemplate("register",n,e);
 };
 FPish_Templates.resetpwmodal=function(h)
 {
  var n,e;
  n={
   $:1,
   $0:"resetpwmodal"
  };
  e=function()
  {
   return Global.jQuery.parseHTML("<div id=\"resetPWModal\" class=\"modal fade\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Reset password</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">X</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div>You have successfully resetted your password.</div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" ws-onclick=\"Redirect\">Ok</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>");
  };
  return h?Doc.GetOrLoadTemplate("reset",n,e,h):Doc.PrepareTemplate("reset",n,e);
 };
 FPish_Templates.resetpwcontrol=function(h)
 {
  var n,e;
  n={
   $:1,
   $0:"resetpwcontrol"
  };
  e=function()
  {
   return Global.jQuery.parseHTML("<div class=\"register login-control mdl-card\">\r\n    <div class=\"mdl-card__title\"><div class=\"login-title centered-text\">WebSharper Support</div></div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-lock-outline\"></span> New Password</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"password\" ws-attr=\"PwErr\" ws-var=\"Password\">\r\n            </div>\r\n            <div class=\"err\">${PwError}</div>\r\n        </div>\r\n        <div class=\"input-holder\">\r\n            <span class=\"input-name\"><span class=\"mdi mdi-lock-outline\"></span> Repeat password</span>\r\n            <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <label class=\"mdl-textfield__label\"></label>\r\n                <input type=\"password\" ws-attr=\"RePwErr\" ws-var=\"RePassword\">\r\n            </div>\r\n            <div class=\"err\">${RePwError}</div>\r\n        </div>\r\n        <div class=\"input-holder login\">\r\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" ws-attr=\"Reset\">Reset my password</button>\r\n        </div>\r\n        <div class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" ws-attr=\"IsLoading\"></div>\r\n        <div class=\"error\">${ServerError}</div>\r\n    </div>\r\n</div>");
  };
  return h?Doc.GetOrLoadTemplate("login",n,e,h):Doc.PrepareTemplate("login",n,e);
 };
}());
