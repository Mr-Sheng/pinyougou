//品牌控制层
app.controller("brandController",function($scope,$controller,brandService){
	
	//继承baseController
	$controller('baseController',{$scope:$scope});
	
	//查询所有商品
	$scope.findAll=function(){
		brandService.findAll().success(
			function(response){
				$scope.list = response;
			}
		)
	}
	
	//查询列表
	$scope.findPage=function(page,size){
		brandService.findPage(page,size).success(
			function(response){
				$scope.list = response.rows;//显示当前记录数
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}
		);
	}
	
	//商品保存
	$scope.save=function(){
		var object=null;
		if($scope.entity.id!=null){
			object=brandService.update($scope.entity);
		}else{
			object=brandService.add($scope.entity);
		}
		object.success(
			function(response){
				if(response.success){
					$scope.reloadList();
				}else{
					alert(response.message);
				}
			}
		);
	}
	
	//查询实体
	$scope.findOne=function(id){
		brandService.findOne(id).success(
			function(response){
				$scope.entity=response;
			}
		);
	}
	
	//删除
	$scope.dele=function(){
		brandService.dele($scope.selectIds).success(
			function(response){
				if(response.success){
					$scope.reloadList();
				}else{
					alert(response.message);
				}
			}
		);
	}
	
	$scope.searchEntity={};
	//条件查询
	$scope.search=function(page,size){
		brandService.search($scope.searchEntity,page,size).success(
			function(response){
				$scope.list = response.rows;//显示当前记录数
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}
		);
	}
	
});