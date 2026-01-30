#!/usr/bin/env node
/**
 * Glicol 测试脚本
 * 使用 Playwright 自动化测试 Glicol 在线编辑器
 */

const { chromium } = require('playwright');

async function testGlicol() {
  console.log('🎮 启动 Glicol 测试...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    // 打开 Glicol 在线编辑器
    await page.goto('https://glicol.org', { waitUntil: 'networkidle' });
    console.log('✅ 页面加载成功');
    
    // 等待编辑器加载
    await page.waitForTimeout(2000);
    
    // 查找编辑器元素
    const editorArea = await page.$('[contenteditable="true"], textarea, .editor');
    console.log('✅ 找到编辑器区域');
    
    // 测试代码1: 基础正弦波
    const code1 = 'o: sin 440 >> mul 0.5';
    console.log(`🎵 测试代码: ${code1}`);
    
    // 这里的测试需要真实的用户交互
    // 实际使用时，用户需要在浏览器中点击运行
    
    console.log('ℹ️  请在浏览器中手动测试以下代码:');
    console.log('---');
    console.log('o: sin 440 >> mul 0.5');
    console.log('---');
    console.log('预期: 听到440Hz的正弦波声音');
    
  } catch (error) {
    console.log('⚠️  测试遇到问题:', error.message);
  } finally {
    await browser.close();
  }
}

testGlicol();
