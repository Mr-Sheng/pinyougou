package com.pinyougou.sellergoods.service;
/**
 * 品牌接口
 * @author wxs
 *
 */

import java.util.List;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;
import entity.Result;

public interface BrandService {

	public List<TbBrand> findAll();
	
	/**
	 * 品牌分页
	 * @param pageNum：当前页
	 * @param pageSize：当前页大小
	 * @return
	 */
	public PageResult findPage(int pageNum,int pageSize);
	
	/**
	 * 商品增加
	 * @param tbBrand
	 * @return 
	 */
	public void add(TbBrand brand);
	
	/**
	 * 根据id查询实体
	 * @param id
	 * @return
	 */
	public TbBrand findOne(Long id);
	
	/**
	 * 修改
	 * @param brand
	 */
	public void update(TbBrand brand);
	
	/**
	 * 删除
	 * @param id
	 */
	public void delete(Long[] ids);
	
	/**
	 * 条件查询
	 * @param brand
	 * @param pageNum
	 * @param pageSize
	 * @return
	 */
	public PageResult findPage(TbBrand brand, int pageNum,int pageSize);
	
}
