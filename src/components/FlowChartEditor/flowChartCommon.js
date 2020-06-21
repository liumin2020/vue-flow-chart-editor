// 获取树的广度
export function getTreeExtent (node) {
  let extend = 0
  node.forEach((item) => {
    if (item.children) {
      extend += getTreeExtent(item.children)
    } else {
      extend += 1
    }
  })
  return extend
}

// 获取树的深度
export function getTreeDeep (node) {
  let deep = 0
  node.forEach((item) => {
    if (item.children) {
      deep = Math.max(deep, getTreeDeep(item.children) + 1)
    } else {
      deep = Math.max(deep, 1)
    }
  })
  return deep
}
