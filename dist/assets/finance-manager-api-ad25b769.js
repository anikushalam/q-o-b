import{d as u}from"./decrypt-87f2d320.js";import{a,P as c,D as i}from"./MethodType-30df8d44.js";import{o as s}from"./index-244a15a9.js";const l=t=>t.query({query:e=>`/finance/${e.fid}/dashboard?mod_id=${e.mid}`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),f=t=>t.query({query:e=>`/finance/${e.fid}/all/bank/details?filter_by=${e.filter_by}&flow=${e.flow}`}),o=t=>t.query({query:e=>`/finance/${e}/ins/bank/query`}),d=t=>t.query({query:e=>`/finance/${e.fid}/dashboard/income?page=${e.page}&limit=${e.limit}`,keepUnusedDataFor:0,transformResponse:e=>u(e==null?void 0:e.encrypt),serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{let r=u(n);e.push(...r)}}),F=t=>t.query({query:e=>`/finance/${e}/dashboard/income/balance`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),y=t=>t.query({query:e=>`/finance/${e}/income/detail`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),h=t=>t.query({query:e=>`/finance/${e.fid}/dashboard/expense?page=${e.page}&limit=${e.limit}`,keepUnusedDataFor:0,transformResponse:e=>u(e==null?void 0:e.encrypt),serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{let r=u(n);e.push(...r)}}),A=t=>t.query({query:e=>`/finance/${e}/dashboard/expense/balance`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),S=t=>t.query({query:e=>`/finance/${e}/expense/detail`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),m=t=>t.query({query:e=>`/finance/${e}/dashboard/remain`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),$=t=>t.query({query:e=>`/finance/${e.finance}/remaining/fee/list?page=${e.page}&limit=${e.limit}&search=${(e==null?void 0:e.search)??""}`,keepUnusedDataFor:0,transformResponse:e=>{let n=u(e==null?void 0:e.encrypt);return n!=null&&n.search?{search:!0,list:n==null?void 0:n.list}:n==null?void 0:n.list},serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),p=t=>t.query({query:e=>`/finance/${e.fid}/all/bank/account?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>u(e==null?void 0:e.encrypt),serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{let r=u(n);e.push(...r)}}),q=t=>t.query({query:e=>`/finance/${e}/one/bank/account`,providesTags:["Finance_Bank"],transformResponse:e=>u(e==null?void 0:e.encrypt)}),k=t=>t.query({query:e=>`/finance/${e}/one/transport/receipt`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),M=t=>t.query({query:e=>`/finance/${e}/one/receipt`,transformResponse:e=>u(e==null?void 0:e.encrypt)}),R=t=>t.query({query:e=>`/finance/${e.fid}/all/master/head/query?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_master}:e==null?void 0:e.all_master,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),x=t=>t.mutation({query:e=>({url:`/finance/${e.fid}/fee/master/new`,method:a,body:e.addFeeHead})}),L=t=>t.mutation({query:e=>({url:`/finance/fee/master/${e.fmid}/edit/query`,method:c,body:e.updateFeeHead})}),E=t=>t.mutation({query:e=>({url:`/finance/${e.cid}/fee/category/delete/query`,method:i})}),Q=t=>t.query({query:e=>`/finance/depart/${e.did}/all/fee/structure?page=${e.page}&limit=${e.limit}&search=${e.search}&filter_by=${e.filterBy}&batch_by=${e.batchBy}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_structures}:e==null?void 0:e.all_structures,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),B=t=>t.mutation({query:e=>({url:`/finance/${e.fid}/fee/structure/new?flow=${e.flow}`,method:"POST",body:e.createFeesStructure})}),g=t=>t.query({query:e=>`/finance/one/${e}/structure`}),U=t=>t.mutation({query:e=>({url:`/finance/fee/structure/${e.sid}/retro/query?flow=${e.flow}`,method:c,body:e.updateStructure})}),I=t=>t.mutation({query:e=>({url:`/finance/${e.sid}/existing/retro/update/structure?flow=${e.flow}`,method:c,body:e.updateStructure})}),C=t=>t.mutation({query:e=>({url:`/finance/fee/structure/${e.sid}/retro/delete?flow=${e.flow}`,method:i})}),_=t=>t.mutation({query:e=>({url:`/finance/${e.fid}/fee/master/${e.fhid}/destroy/query`,method:i})}),H=t=>t.mutation({query:e=>({url:`/finance/${e==null?void 0:e.fid}/income?user_query=${e.user_query??""}`,method:a,body:e==null?void 0:e.fData})}),O=t=>t.mutation({query:e=>({url:`/finance/${e==null?void 0:e.fid}/expense?is_inventory=${e.is_inventory}&user_query=${e.user_query}`,method:a,body:e==null?void 0:e.fData})}),z=t=>t.query({query:e=>`/finance/${e.id}/all/export/excel/array?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_excel}:e==null?void 0:e.all_excel,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),v=t=>t.mutation({query:e=>({url:`/finance/${e.id}/export/excel/${e.xlsxId}/edit`,method:c,body:e.excelUpdate})}),w=t=>t.mutation({query:e=>({url:`/finance/${e.id}/export/excel/${e.xlsxId}/destroy/query`,method:i})}),T=t=>t.mutation({query:e=>({url:`/finance/${e.fid}/add/bank/query?flow=${e.flow}&flow_id=${e.flow_id}`,method:a,body:e.bankDetails})}),P=t=>t.mutation({query:e=>({url:`/finance/${e.bid}/bank/account/query?delete_pic=${e.delete_pic??""}`,method:c,body:e.bankDetails}),invalidatesTags:["Finance_Bank"]}),N=t=>t.mutation({query:e=>({url:`/finance/${e}/bank/account/destroy/query`,method:i})}),j=t=>t.query({query:e=>`/finance/${e}/master/deposit/query`,transformResponse:e=>e==null?void 0:e.master,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),G=t=>t.query({query:e=>`/finance/${e.fmid}/master/all/deposit/array?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_students}:e==null?void 0:e.all_students,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),D=t=>t.mutation({query:e=>({url:`/finance/${e.fmid}/refund/deposit/${e.sid}/query`,method:c,body:e.refundDeposit})}),J=t=>t.query({query:e=>`/finance/${e.fid}/master/all/refund/deposit/history?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_receipts}:e==null?void 0:e.all_receipts,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),K=t=>t.mutation({query:e=>({url:`/role/permission/${e.fid}/finance/moderator`,method:a,body:e.addModerator})}),V=t=>t.query({query:e=>`/role/permission/${e.fid}/all/finance/moderator?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_mods}:e==null?void 0:e.all_mods,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),W=t=>t.mutation({query:e=>({url:`/role/permission/update/finance/mod/${e.modId}`,method:c,body:e.updateModerator})}),X=t=>t.mutation({query:e=>({url:`/role/permission/${e.fid}/destroy/finance/mod/${e.modId}`,method:i})}),Y=t=>t.mutation({query:e=>({url:`/finance/select/${e.fid}/secondary/structure/query`,method:c,body:e.secondaryData})}),Z=t=>t.query({query:e=>`/finance/${e.fid}/all/exempt/query?page=${e.page}&limit=${e.limit}`,transformResponse:e=>e==null?void 0:e.all_exempt,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),b=t=>t.query({query:e=>`/admin/repay/query/institute/${e.fid}?page=${e==null?void 0:e.page}&limit=${e==null?void 0:e.limit}&search=${e==null?void 0:e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.repay}:e==null?void 0:e.repay,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),ee=t=>t.query({query:e=>`/pay/history/to?uid=${e.uid}&page=${e.page}&limit=${e.limit}&filter=${e.filter}&search=${(e==null?void 0:e.search)??""}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.history}:e==null?void 0:e.history,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),te=t=>t.query({query:e=>`/finance/${e}/all/fee/category/query`,transformResponse:e=>e==null?void 0:e.all_fees_format,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),ne=t=>t.mutation({query:e=>({url:`/finance/${e.fid}/fee/category/new`,method:a,body:e.createCategory})}),re=t=>t.mutation({query:e=>({url:`/extra/excel/to/json/query/fee/category/${e.fid}`,method:c,body:e.excelFile})}),ce=t=>t.mutation({query:e=>({url:`/extra/excel/to/json/${e.did}/query/fee/structure/${e.fid}`,method:c,body:e.excelFile})}),ue=t=>t.mutation({query:e=>({url:`/extra/excel/to/json/query/fee/head/master/${e.fid}`,method:c,body:e.excelFile})}),ae=t=>t.mutation({query:e=>({url:`/feed/filter/by/student/statistics/${e.bid}/query`,method:c})}),ie=t=>t.query({query:e=>`/finance/${e}/all/department/query`,transformResponse:e=>e==null?void 0:e.all_department,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),se=t=>t.query({query:e=>`/finance/all/internal/fee/${e.fid}?page=${e.page}&limit=${e.limit}&search=${(e==null?void 0:e.search)??""}`,keepUnusedDataFor:0,providesTags:["Finance_Internal_Fees"],transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.all_fees}:e==null?void 0:e.all_fees,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),le=t=>t.mutation({query:e=>({url:`/finance/internal/fee/${e.fid}`,method:a,body:e.inernalBody}),invalidatesTags:["Finance_Internal_Fees"]}),fe=t=>t.mutation({query:e=>({url:"/feed/filter/by/student/statistics/excel/export/query",method:c,body:e.exportBody})}),oe=t=>t.mutation({query:e=>({url:`/feed/filter/by/fees/statistics/${e.fid}/query?module_type=${e.moduleType}`,method:c,body:e.statisticsBody})}),de=t=>t.query({query:e=>`/feed/filter/by/overall/fees/statistics/${e}/query`,transformResponse:e=>u(e==null?void 0:e.encrypt),serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Fe=t=>t.query({query:e=>`/ins/student/${e}`,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),ye=t=>t.query({query:e=>`/fees/student/${e}`,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),he=t=>t.query({query:e=>`/admission/${e}/fees`,transformResponse:e=>u(e==null?void 0:e.encrypt),serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Ae=t=>t.query({query:e=>`/fees/student/${e.sid}/internal/fees/query?page=${e.page}&limit=${e.limit}`,keepUnusedDataFor:0,transformResponse:e=>e==null?void 0:e.all_internal,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Se=(t,e)=>t.mutation({query:n=>({url:`/extra/send/filtered/message/query?id=${(n==null?void 0:n.id)??""}`,method:c,body:n.sendMessage})}),me=(t,e)=>t.mutation({query:n=>({url:`/extra/send/one/student/filtered/message/query?id=${(n==null?void 0:n.id)??""}`,method:c,body:n.sendMessage})}),$e=t=>t.query({query:e=>`/extra/all/filtered/message/${e.id}/query?page=${e.page}&limit=${e.limit}&flow=${e.flow}`,keepUnusedDataFor:0,transformResponse:e=>e==null?void 0:e.all_message,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),pe=t=>t.mutation({query:e=>({url:`/extra/edit/${e.sid}/gr/unique/query`,method:c,body:e.grNumberContent})}),qe=t=>t.mutation({query:e=>({url:`/admission/${e.rcid}/add/scholar/number/query`,method:c,body:e.scholarData})}),ke=t=>t.mutation({query:e=>({url:`/admission/${e.rid}/drop/fees/${e.sid}/query`,method:c})}),Me=t=>t.mutation({query:e=>({url:`/admission/${e.aid}/retro/structure/${e.appId}/one/student/${e.sid}/query`,method:c,body:e.updateStrucutre})}),Re=t=>t.mutation({query:e=>({url:`/extra/excel/to/json/${e.aid}/query/scholarship/${e.scid}`,method:c,body:e.excelFile})}),xe=t=>t.mutation({query:e=>({url:`/admission/paid/government/grant/fee/${e.sid}/student/${e.appId}`,method:a,body:e.governmentData})}),Le=t=>t.mutation({query:e=>({url:`/admission/paid/already/card/government/grant/fee/${e.sid}/student/${e.appId}`,method:a,body:e.governmentData})}),Ee=t=>t.query({query:e=>`/manage/admin/all/user?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.user}:e==null?void 0:e.user,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Qe=t=>t.query({query:e=>`/exam/${e.did}/classmaster/${e.bid}?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.classMaster}:e==null?void 0:e.classMaster,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Be=t=>t.query({query:e=>`/ins/${e.id}/departmentmasterclass-detail/${e.did}`,transformResponse:e=>e==null?void 0:e.classMaster,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),ge=t=>t.query({query:e=>`/ins/${e}/one-batch`,transformResponse:e=>e==null?void 0:e.allBatch,serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Ue=t=>t.query({query:e=>`/search/${e.id}/staff?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.staff}:e==null?void 0:e.staff,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Ie=t=>t.query({query:e=>`/ins/${e.id}/approve-student/list?page=${e.page}&limit=${e.limit}&search=${e.search}`,keepUnusedDataFor:0,transformResponse:e=>e!=null&&e.search?{search:!0,list:e==null?void 0:e.studentIns}:e==null?void 0:e.studentIns,serializeQueryArgs:({endpointName:e})=>e,merge:(e,n)=>{if(n!=null&&n.search)return n==null?void 0:n.list;e.push(...n)},forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),Ce=t=>t.query({query:e=>`/user/${e}/all/stats/query`,transformResponse:e=>u(e.encrypt),serializeQueryArgs:({endpointName:e})=>e,forceRefetch({currentArg:e,previousArg:n}){return e!==n}}),_e=s.injectEndpoints({endpoints:t=>({financeDashboardMaster:l(t),financeBankDetailFilter:f(t),donot:o(t),financeIncome:d(t),financeIncomeBalance:F(t),financeIncomeDetail:y(t),financeExpense:h(t),financeExpenseBalance:A(t),financeExpenseDetail:S(t),financeRemainBalance:m(t),financeFeeList:$(t),financeAllBank:p(t),financeOneBankDetail:q(t),financeTransportReceipt:k(t),financeReceipt:M(t),financeAllFeeHeadMaster:R(t),financeAddFeeHeadMaster:x(t),financeUpdateFeeHeadMaster:L(t),financeDeleteFeesCategory:E(t),financeAddFeesStructure:B(t),financeFeeStructureDetail:g(t),financeUpdateFeesStructure:U(t),financeUpdateRetroFeesStructure:I(t),financeDeleteFeesStructure:C(t),financeDeleteFeesHead:_(t),financeAllExcel:z(t),financeUpdateExcel:v(t),financeDeleteExcel:w(t),financeAddBank:T(t),financeUpdateBank:P(t),financeDeleteBank:N(t),financeMasterDeposit:j(t),financeMasterDepositAll:G(t),financeMarkRefundDeposit:D(t),financeAllDepositRefund:J(t),financeAddModerator:K(t),financeModerator:V(t),financeUpdateModerator:W(t),financeDeleteModerator:X(t),financeMarkAsSecondaryCategory:Y(t),financeAllExemption:Z(t),financeAddIncome:H(t),financeAddExpense:O(t),financeAllSettlement:b(t),financeAllTransaction:ee(t),financeAllFeesCategory:te(t),financeAddFeesCategory:ne(t),financeAddExcelCategory:re(t),financeAddExcelStructure:ce(t),financeAddExcelFeeHead:ue(t),financeStudentStatitics:ae(t),financeAllInternalFee:se(t),financeAddInternalFees:le(t),instituteAllDepartment:ie(t),financeStudentStatisticsExport:fe(t),financeFeeStatitics:oe(t),financeAllFeeStructure:Q(t),financeOverallFeeStatistics:de(t),oneStudentProfile:Fe(t),oneStudentFeesStat:ye(t),oneStudentAdmissionFees:he(t),oneStudentInternalFees:Ae(t),financeSendAllStudentMessage:Se(t),financeSendOneStudentMessage:me(t),financeAllStudentMessageHistory:$e(t),financeStudentGrChange:pe(t),financeAddScholarNumber:qe(t),financeDropStudentOneAdmissionFees:ke(t),financeUpdateStudentFeeStructure:Me(t),financeAllotScholarshipExcel:Re(t),financeAllotScholarship:xe(t),financeAllotScholarshipNewAddFees:Le(t),departmentBatchAllClassMaster:Qe(t),universalPlateformUser:Ee(t),departmentAllBatch:ge(t),instituteAllStaff:Ue(t),instituteAllStudent:Ie(t),departmentAllClassMaster:Be(t),userAllStats:Ce(t)})}),{useFinanceDashboardMasterQuery:He,useFinanceBankDetailFilterQuery:un,useDonotQuery:an,useFinanceIncomeQuery:Oe,useFinanceIncomeBalanceQuery:ze,useFinanceIncomeDetailQuery:ve,useFinanceExpenseQuery:we,useFinanceExpenseBalanceQuery:Te,useFinanceExpenseDetailQuery:Pe,useFinanceRemainBalanceQuery:sn,useFinanceFeeListQuery:Ne,useFinanceAllBankQuery:je,useFinanceOneBankDetailQuery:Ge,useFinanceTransportReceiptQuery:ln,useFinanceReceiptQuery:De,useFinanceAllFeeHeadMasterQuery:Je,useFinanceAddFeeHeadMasterMutation:Ke,useFinanceUpdateFeeHeadMasterMutation:Ve,useFinanceDeleteFeesCategoryMutation:We,useFinanceAddFeesStructureMutation:Xe,useFinanceFeeStructureDetailQuery:Ye,useFinanceUpdateFeesStructureMutation:Ze,useFinanceUpdateRetroFeesStructureMutation:be,useFinanceDeleteFeesStructureMutation:et,useFinanceDeleteFeesHeadMutation:tt,useFinanceAllExcelQuery:nt,useFinanceUpdateExcelMutation:rt,useFinanceDeleteExcelMutation:ct,useFinanceAddBankMutation:ut,useFinanceUpdateBankMutation:at,useFinanceDeleteBankMutation:it,useFinanceMasterDepositQuery:st,useFinanceMasterDepositAllQuery:lt,useFinanceMarkRefundDepositMutation:ft,useFinanceAllDepositRefundQuery:ot,useFinanceAddModeratorMutation:dt,useFinanceModeratorQuery:Ft,useFinanceUpdateModeratorMutation:yt,useFinanceDeleteModeratorMutation:ht,useFinanceMarkAsSecondaryCategoryMutation:At,useFinanceAllExemptionQuery:St,useFinanceAddIncomeMutation:mt,useFinanceAddExpenseMutation:$t,useFinanceAllSettlementQuery:pt,useFinanceAllTransactionQuery:qt,useFinanceAllFeesCategoryQuery:kt,useFinanceAddFeesCategoryMutation:Mt,useFinanceAddExcelCategoryMutation:Rt,useFinanceAddExcelStructureMutation:xt,useFinanceAddExcelFeeHeadMutation:Lt,useFinanceStudentStatiticsMutation:Et,useFinanceAllInternalFeeQuery:Qt,useFinanceAddInternalFeesMutation:Bt,useInstituteAllDepartmentQuery:gt,useFinanceStudentStatisticsExportMutation:Ut,useFinanceFeeStatiticsMutation:It,useFinanceAllFeeStructureQuery:Ct,useFinanceOverallFeeStatisticsQuery:_t,useOneStudentProfileQuery:Ht,useOneStudentFeesStatQuery:Ot,useOneStudentAdmissionFeesQuery:zt,useOneStudentInternalFeesQuery:vt,useFinanceSendAllStudentMessageMutation:wt,useFinanceSendOneStudentMessageMutation:Tt,useFinanceAllStudentMessageHistoryQuery:Pt,useFinanceStudentGrChangeMutation:Nt,useFinanceAddScholarNumberMutation:jt,useFinanceDropStudentOneAdmissionFeesMutation:Gt,useFinanceUpdateStudentFeeStructureMutation:Dt,useFinanceAllotScholarshipExcelMutation:Jt,useFinanceAllotScholarshipMutation:Kt,useFinanceAllotScholarshipNewAddFeesMutation:Vt,useDepartmentBatchAllClassMasterQuery:Wt,useUniversalPlateformUserQuery:Xt,useDepartmentAllBatchQuery:Yt,useInstituteAllStaffQuery:Zt,useInstituteAllStudentQuery:bt,useDepartmentAllClassMasterQuery:en,useUserAllStatsQuery:tn}=_e,fn=t=>{const{data:e,refetch:n,isLoading:r}=He(t.data,{skip:t.skip});return{financeDashboardMaster:e,financeDashboardMasterRefetch:n,financeDashboardMasterLoading:r}},on=t=>{const{data:e,refetch:n,isLoading:r}=Oe(t.data,{skip:t.skip});return{financeIncome:e,financeIncomeRefetch:n,financeIncomeLoading:r}},dn=t=>{const{data:e,refetch:n,isLoading:r}=ze(t.fid,{skip:t.skip});return{financeIncomeBalance:e,financeIncomeBalanceRefetch:n,financeIncomeBalanceLoading:r}},Fn=t=>{const{data:e,refetch:n,isLoading:r}=ve(t.incomeId,{skip:t.skip});return{financeIncomeDetail:e,financeIncomeDetailRefetch:n,financeIncomeDetailLoading:r}},yn=t=>{const{data:e,refetch:n,isLoading:r}=we(t.data,{skip:t.skip});return{financeExpense:e,financeExpenseRefetch:n,financeExpenseLoading:r}},hn=t=>{const{data:e,refetch:n,isLoading:r}=Te(t.fid,{skip:t.skip});return{financeExpenseBalance:e,financeExpenseBalanceRefetch:n,financeExpenseBalanceLoading:r}},An=t=>{const{data:e,refetch:n,isLoading:r}=Pe(t.expenseId,{skip:t.skip});return{financeExpenseDetail:e,financeExpenseDetailRefetch:n,financeExpenseDetailLoading:r}},Sn=t=>{const{data:e,refetch:n,isLoading:r}=Ne(t.data,{skip:t.skip});return{financeFeeList:e,financeFeeListRefetch:n,financeFeeListLoading:r}},mn=t=>{const{data:e,refetch:n,isLoading:r}=je(t.data,{skip:t.skip});return{financeAllBank:e,financeAllBankRefetch:n,financeAllBankLoading:r}},$n=t=>{const{data:e,refetch:n,isLoading:r}=Ge(t.bid,{skip:t.skip});return{financeOneBankDetail:e,financeOneBankDetailRefetch:n,financeOneBankDetailLoading:r}},pn=t=>{const{data:e,refetch:n,isLoading:r}=De(t.rid,{skip:t.skip});return{financeReceipt:e,financeReceiptRefetch:n,financeReceiptLoading:r}},qn=t=>{const{data:e,refetch:n,isLoading:r}=Je(t.data,{skip:t.skip});return{financeAllFeeHeadMaster:e,financeAllFeeHeadMasterRefetch:n,financeAllFeeHeadMasterLoading:r}},kn=()=>{const[t]=Ke();return[t]},Mn=()=>{const[t]=Ve();return[t]},Rn=()=>{const[t]=We();return[t]},xn=()=>{const[t]=Xe();return[t]},Ln=t=>{const{data:e,refetch:n,isLoading:r}=Ye(t.fsid,{skip:t.skip});return{financeFeeStructureDetail:e,financeFeeStructureDetailRefetch:n,financeFeeStructureDetailLoading:r}},En=()=>{const[t]=Ze();return[t]},Qn=()=>{const[t]=be();return[t]},Bn=()=>{const[t]=et();return[t]},gn=()=>{const[t]=tt();return[t]},Un=t=>{const{data:e,refetch:n,isLoading:r}=nt(t.data,{skip:t.skip});return{financeAllExcel:e,financeAllExcelRefetch:n,financeAllExcelLoading:r}},In=()=>{const[t]=rt();return[t]},Cn=()=>{const[t]=ct();return[t]},_n=()=>{const[t]=ut();return[t]},Hn=()=>{const[t]=at();return[t]},On=()=>{const[t]=it();return[t]},zn=t=>{const{data:e,refetch:n,isLoading:r}=st(t.fid,{skip:t.skip});return{financeMasterDeposit:e,financeMasterDepositRefetch:n,financeMasterDepositLoading:r}},vn=t=>{const{data:e,refetch:n,isLoading:r}=lt(t.data,{skip:t.skip});return{financeMasterDepositAll:e,financeMasterDepositAllRefetch:n,financeMasterDepositAllLoading:r}},wn=()=>{const[t]=ft();return[t]},Tn=t=>{const{data:e,refetch:n,isLoading:r}=ot(t.data,{skip:t.skip});return{financeAllDepositRefund:e,financeAllDepositRefundRefetch:n,financeAllDepositRefundLoading:r}},Pn=()=>{const[t]=dt();return[t]},Nn=t=>{const{data:e,refetch:n,isLoading:r}=Ft(t.data,{skip:t.skip});return{financeModerator:e,financeModeratorRefetch:n,financeModeratorLoading:r}},jn=()=>{const[t]=yt();return[t]},Gn=()=>{const[t]=ht();return[t]},Dn=()=>{const[t]=At();return[t]},Jn=()=>{const[t]=mt();return[t]},Kn=()=>{const[t]=$t();return[t]},Vn=t=>{const{data:e,refetch:n,isLoading:r}=St(t.data,{skip:t.skip});return{financeAllExemption:e,financeAllExemptionRefetch:n,financeAllExemptionLoading:r}},Wn=t=>{const{data:e,refetch:n,isLoading:r}=pt(t.data,{skip:t.skip});return{financeAllSettlement:e,financeAllSettlementRefetch:n,financeAllSettlementLoading:r}},Xn=t=>{const{data:e,refetch:n,isLoading:r}=qt(t.data,{skip:t.skip});return{financeAllTransaction:e,financeAllTransactionRefetch:n,financeAllTransactionLoading:r}},Yn=t=>{const{data:e,refetch:n,isLoading:r}=kt(t.fid,{skip:t.skip});return{financeAllFeesCategory:e,financeAllFeesCategoryRefetch:n,financeAllFeesCategoryLoading:r}},Zn=()=>{const[t]=Mt();return[t]},bn=()=>{const[t]=Rt();return[t]},er=()=>{const[t]=xt();return[t]},tr=()=>{const[t]=Lt();return[t]},nr=()=>{const[t]=Et();return[t]},rr=t=>{const{data:e,refetch:n,isLoading:r}=gt(t.fid,{skip:t.skip});return{instituteAllDepartment:e,instituteAllDepartmentRefetch:n,instituteAllDepartmentLoading:r}},cr=t=>{const{data:e,refetch:n,isLoading:r}=Qt(t.data,{skip:t.skip});return{financeAllInternalFee:e,financeAllInternalFeeRefetch:n,financeAllInternalFeeLoading:r}},ur=()=>{const[t]=Bt();return[t]},ar=()=>{const[t]=Ut();return[t]},ir=()=>{const[t]=It();return[t]},sr=t=>{const{data:e,refetch:n,isLoading:r}=Ct(t.data,{skip:t.skip});return{financeAllFeeStructure:e,financeAllFeeStructureRefetch:n,financeAllFeeStructureLoading:r}},lr=t=>{const{data:e,refetch:n,isLoading:r}=_t(t.fid,{skip:t.skip});return{fnanceOverallFeeStatistics:e,fnanceOverallFeeStatisticsRefetch:n,fnanceOverallFeeStatisticsLoading:r}},fr=t=>{const{data:e,refetch:n,isLoading:r}=Ht(t.sid,{skip:t.skip});return{oneStudentProfile:e,oneStudentProfileRefetch:n,oneStudentProfileLoading:r}},or=t=>{const{data:e,refetch:n,isLoading:r}=zt(t.sid,{skip:t.skip});return{oneStudentAdmissionFees:e,oneStudentAdmissionFeesRefetch:n,oneStudentAdmissionFeesLoading:r}},dr=t=>{const{data:e,refetch:n,isLoading:r}=Ot(t.sid,{skip:t.skip});return{oneStudentFeesStat:e,oneStudentFeesStatRefetch:n,oneStudentFeesStatLoading:r}},Fr=t=>{const{data:e,refetch:n,isLoading:r}=vt(t.data,{skip:t.skip});return{oneStudentInternalFees:e,oneStudentInternalFeesRefetch:n,oneStudentInternalFeesLoading:r}},yr=()=>{const[t]=wt();return[t]},hr=()=>{const[t]=Tt();return[t]},Ar=t=>{const{data:e,refetch:n,isLoading:r}=Pt(t.data,{skip:t.skip});return{financeAllStudentMessageHistory:e,financeAllStudentMessageHistoryRefetch:n,financeAllStudentMessageHistoryLoading:r}},Sr=()=>{const[t]=Nt();return[t]},mr=()=>{const[t]=jt();return[t]},$r=()=>{const[t]=Gt();return[t]},pr=()=>{const[t]=Dt();return[t]},qr=()=>{const[t]=Jt();return[t]},kr=()=>{const[t]=Kt();return[t]},Mr=()=>{const[t]=Vt();return[t]},Rr=t=>{const{data:e,refetch:n,isLoading:r}=Xt(t);return{universalPlateformUser:e,universalPlateformUserRefetch:n,universalPlateformUserLoading:r}},xr=t=>{const{data:e,refetch:n,isLoading:r}=Wt(t.data,{skip:t.skip});return{departmentBatchAllClassMaster:e,departmentBatchAllClassMasterRefetch:n,departmentBatchAllClassMasterLoading:r}},Lr=t=>{const{data:e,refetch:n,isLoading:r}=Yt(t.did,{skip:t.skip});return{departmentAllBatch:e,departmentAllBatchRefetch:n,departmentAllBatchLoading:r}},Er=t=>{const{data:e,refetch:n,isLoading:r}=Zt(t.data,{skip:t.skip});return{instituteAllStaff:e,instituteAllStaffRefetch:n,instituteAllStaffLoading:r}},Qr=t=>{const{data:e,refetch:n,isLoading:r}=bt(t.data,{skip:t.skip});return{instituteAllStudent:e,instituteAllStudentRefetch:n,instituteAllStudentLoading:r}},Br=t=>{const{data:e,refetch:n,isLoading:r}=en(t.data,{skip:t.skip});return{departmentAllClassMaster:e,departmentAllClassMasterRefetch:n,departmentAllClassMasterLoading:r}},gr=t=>{const{data:e,refetch:n,isLoading:r}=tn(t.uid,{skip:t.skip});return{userAllStats:e,userAllStatsRefetch:n,userAllStatsLoading:r}};export{pn as $,Bn as A,En as B,Qn as C,Ln as D,er as E,Qr as F,qr as G,fn as H,mn as I,_n as J,On as K,Hn as L,$n as M,Sn as N,dn as O,Fn as P,Jn as Q,on as R,hn as S,An as T,Kn as U,yn as V,Rr as W,Vn as X,Cn as Y,In as Z,Un as _,dr as a,Xn as a0,Er as a1,Pn as a2,Gn as a3,jn as a4,Nn as a5,vn as a6,wn as a7,Tn as a8,zn as a9,nr as aa,xr as ab,ur as ac,cr as ad,ar as ae,ir as af,lr as ag,yr as ah,hr as ai,Ar as aj,Wn as ak,Fr as b,fr as c,Sr as d,kr as e,Mr as f,mr as g,$r as h,sr as i,pr as j,or as k,rr as l,Yn as m,Rn as n,Dn as o,Zn as p,bn as q,kn as r,gn as s,Mn as t,gr as u,tr as v,qn as w,Lr as x,Br as y,xn as z};
