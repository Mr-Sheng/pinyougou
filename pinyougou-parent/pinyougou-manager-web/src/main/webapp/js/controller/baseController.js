app.controller('baseController',function($scope){
	
	//分页控件配置：currentPage：当前页; totalItems:总记录数; itemsPerPage:每页记录数; perPageOptions:分页选项; onChange:页码变更时自动触发
	$scope.paginationConf = {
		 currentPage: 1,
		 totalItems: 10,
		 itemsPerPage: 10,
		 perPageOptions: [10, 20, 30, 40, 50],
		 onChange: function(){
		       $scope.reloadList();//重新加载
		 }
	};
	
	//刷新列表
	$scope.reloadList=function(){
		$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
	}
	
	//用户勾选的id集合
	$scope.selectIds=[];
	
	$scope.updateSelection=function($event,id){
		if($event.target.checked){
			//向集合添加元素
			$scope.selectIds.push(id);
		}else{
			var index = $scope.selectIds.indexOf(id);//查找值的位置
			$scope.selectIds.splice(index,1);//$scope.selectIds.splice(参数1，参数2):参数1：移除的位置；参数2：移除的个数
		}
	}
	
	
});