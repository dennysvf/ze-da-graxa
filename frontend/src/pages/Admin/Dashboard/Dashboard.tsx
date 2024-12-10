import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../../layouts/AdminLayout'
import { Stack } from '../../../components/layout/Stack'
import { Grid } from '../../../components/layout/Grid'
import { SearchInput } from '../../../components/SearchInput'
import { DashboardKPI } from '../../../components/DashboardKPI'
import { DashboardChart } from '../../../components/DashboardChart'
import { OrderList } from '../../../components/OrderList'
import { SalesChart, TopProductsChart } from '../../../components/DashboardCharts'
import { ActivityList } from '../../../components/ActivityList'
import { dashboardService } from '../../../services/dashboard.mock'
import { ordersService } from '../../../services/orders.mock'
import styles from './Dashboard.module.scss'

export function Dashboard() {
  const [metrics, setMetrics] = useState<any>(null)
  const [orders, setOrders] = useState<any[]>([])
  const [salesData, setSalesData] = useState<any>(null)
  const [topProducts, setTopProducts] = useState<any[]>([])
  const [activities, setActivities] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadDashboardData() {
      try {
        setIsLoading(true)
        const [metricsData, ordersData, salesChartData, topProductsData, activitiesData] = await Promise.all([
          dashboardService.getDashboardMetrics(),
          ordersService.getOrders({ sortBy: 'date' }),
          dashboardService.getSalesChartData(),
          dashboardService.getTopProducts(),
          dashboardService.getRecentActivities()
        ])

        setMetrics(metricsData)
        setOrders(ordersData.slice(0, 5))
        setSalesData(Object.entries(salesChartData.salesByDay).map(([date, value]) => ({
          date,
          value
        })))
        setTopProducts(topProductsData)
        setActivities(activitiesData)
      } catch (error) {
        console.error('Erro ao carregar dados do dashboard:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  if (isLoading) {
    return (
      <AdminLayout currentPath="dashboard">
        <div>Carregando...</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout currentPath="dashboard">
      <Stack spacing="xl">
        <SearchInput
          placeholder="Buscar pedidos, produtos ou clientes..."
          className={styles.search}
        />
        <Grid columns={4} spacing="lg">
          <DashboardKPI
            title="Total de Vendas"
            value={metrics?.totalSales.value ?? 0}
            trend={metrics?.totalSales.trend}
            icon="trending_up"
            isCurrency
          />
          <DashboardKPI
            title="Pedidos do Mês"
            value={metrics?.orderCount.value ?? 0}
            trend={metrics?.orderCount.trend}
            icon="shopping_cart"
          />
          <DashboardKPI
            title="Ticket Médio"
            value={metrics?.averageTicket.value ?? 0}
            trend={metrics?.averageTicket.trend}
            icon="receipt"
            isCurrency
          />
          <DashboardKPI
            title="Clientes Ativos"
            value={metrics?.activeCustomers.value ?? 0}
            trend={metrics?.activeCustomers.trend}
            icon="group"
          />
        </Grid>
        <Grid columns={2} spacing="lg">
          <DashboardChart title="Vendas por Período">
            <SalesChart data={salesData || []} />
          </DashboardChart>
          <DashboardChart title="Produtos Mais Vendidos">
            <TopProductsChart data={topProducts} />
          </DashboardChart>
        </Grid>
        <Grid columns={12} spacing="lg">
          <Grid.Item span={8}>
            <DashboardChart title="Últimos Pedidos">
              <OrderList
                orders={orders}
                showDetails={false}
                onOrderClick={(order) => {
                  window.location.href = `/admin/pedidos/${order.id}`
                }}
              />
            </DashboardChart>
          </Grid.Item>
          <Grid.Item span={4}>
            <DashboardChart title="Atividade Recente">
              <ActivityList activities={activities} loading={isLoading} />
            </DashboardChart>
          </Grid.Item>
        </Grid>
      </Stack>
    </AdminLayout>
  )
}
