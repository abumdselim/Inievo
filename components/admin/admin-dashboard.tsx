"use client"

import {
  Bell,
  FileText,
  Globe,
  LayoutDashboard,
  Menu,
  Settings,
  ShieldCheck,
  ShoppingBag,
  X,
} from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type SectionStatus = "Published" | "Draft" | "Maintenance"
type LeadStage = "New" | "Qualified" | "Proposal" | "Won" | "Lost"
type UserRole = "Owner" | "Admin" | "Editor" | "Support"

type SiteSection = {
  id: string
  name: string
  route: string
  owner: string
  updated: string
  status: SectionStatus
  visible: boolean
}

type BlogPost = {
  id: string
  title: string
  slug: string
  status: "Published" | "Draft"
  featured: boolean
  updated: string
}

type ShopProduct = {
  id: string
  name: string
  sku: string
  price: number
  stock: number
  published: boolean
}

type Lead = {
  id: string
  name: string
  source: string
  stage: LeadStage
  assignedTo: string
}

type TeamMember = {
  id: string
  name: string
  email: string
  role: UserRole
  active: boolean
}

const initialSections: SiteSection[] = [
  {
    id: "home",
    name: "Home",
    route: "/",
    owner: "Marketing",
    updated: "2h ago",
    status: "Published",
    visible: true,
  },
  {
    id: "about",
    name: "About",
    route: "/about",
    owner: "Brand",
    updated: "1d ago",
    status: "Published",
    visible: true,
  },
  {
    id: "blog",
    name: "Blog",
    route: "/blog",
    owner: "Content",
    updated: "4h ago",
    status: "Published",
    visible: true,
  },
  {
    id: "shop",
    name: "Shop",
    route: "/shop",
    owner: "Commerce",
    updated: "6h ago",
    status: "Published",
    visible: true,
  },
  {
    id: "contact",
    name: "Contact",
    route: "/contact",
    owner: "Sales",
    updated: "3d ago",
    status: "Published",
    visible: true,
  },
  {
    id: "demo",
    name: "Demo",
    route: "/demo",
    owner: "Sales",
    updated: "5h ago",
    status: "Published",
    visible: true,
  },
  {
    id: "client",
    name: "Client Portal",
    route: "/client",
    owner: "Operations",
    updated: "8h ago",
    status: "Published",
    visible: true,
  },
  {
    id: "auth",
    name: "Auth",
    route: "/auth/login",
    owner: "Security",
    updated: "2d ago",
    status: "Published",
    visible: true,
  },
  {
    id: "legal",
    name: "Legal",
    route: "/privacy",
    owner: "Legal",
    updated: "1w ago",
    status: "Draft",
    visible: true,
  },
]

const initialPosts: BlogPost[] = [
  {
    id: "bp-1",
    title: "How to Build Trust Into Every Click",
    slug: "build-trust-into-every-click",
    status: "Published",
    featured: true,
    updated: "3h ago",
  },
  {
    id: "bp-2",
    title: "Design Sprints for Fast-Moving Teams",
    slug: "design-sprints-fast-moving-teams",
    status: "Published",
    featured: false,
    updated: "1d ago",
  },
  {
    id: "bp-3",
    title: "2026 Conversion Benchmarks",
    slug: "2026-conversion-benchmarks",
    status: "Draft",
    featured: false,
    updated: "4d ago",
  },
]

const initialProducts: ShopProduct[] = [
  {
    id: "p-1",
    name: "Launch Sprint",
    sku: "IN-LAUNCH-01",
    price: 1299,
    stock: 18,
    published: true,
  },
  {
    id: "p-2",
    name: "Growth Playbook",
    sku: "IN-GROW-02",
    price: 799,
    stock: 42,
    published: true,
  },
  {
    id: "p-3",
    name: "SEO Foundation Pack",
    sku: "IN-SEO-03",
    price: 499,
    stock: 0,
    published: false,
  },
]

const initialLeads: Lead[] = [
  {
    id: "l-1",
    name: "Aston Digital",
    source: "Contact Form",
    stage: "Proposal",
    assignedTo: "Dalia",
  },
  {
    id: "l-2",
    name: "Northlane Clinic",
    source: "Demo Request",
    stage: "Qualified",
    assignedTo: "Omar",
  },
  {
    id: "l-3",
    name: "Rivon Studios",
    source: "Referral",
    stage: "Won",
    assignedTo: "Aya",
  },
]

const initialTeam: TeamMember[] = [
  {
    id: "u-1",
    name: "Dalia Rahim",
    email: "dalia@inievo.com",
    role: "Owner",
    active: true,
  },
  {
    id: "u-2",
    name: "Omar Adel",
    email: "omar@inievo.com",
    role: "Admin",
    active: true,
  },
  {
    id: "u-3",
    name: "Leen Samir",
    email: "leen@inievo.com",
    role: "Editor",
    active: true,
  },
  {
    id: "u-4",
    name: "Yousef Karim",
    email: "yousef@inievo.com",
    role: "Support",
    active: false,
  },
]

const menuItems = [
  { value: "overview", label: "Overview", icon: LayoutDashboard },
  { value: "sections", label: "Site Sections", icon: Globe },
  { value: "blog", label: "Blog", icon: FileText },
  { value: "shop", label: "Shop", icon: ShoppingBag },
  { value: "leads", label: "Leads", icon: Bell },
  { value: "access", label: "Access", icon: ShieldCheck },
  { value: "settings", label: "Settings", icon: Settings },
] as const

function statusBadge(status: SectionStatus | "Draft" | "Published") {
  if (status === "Published") {
    return "bg-emerald-100 text-emerald-700 border-emerald-200"
  }

  if (status === "Maintenance") {
    return "bg-amber-100 text-amber-700 border-amber-200"
  }

  return "bg-slate-100 text-slate-700 border-slate-200"
}

function leadBadge(stage: LeadStage) {
  if (stage === "Won") {
    return "bg-emerald-100 text-emerald-700 border-emerald-200"
  }

  if (stage === "Lost") {
    return "bg-rose-100 text-rose-700 border-rose-200"
  }

  if (stage === "Proposal") {
    return "bg-blue-100 text-blue-700 border-blue-200"
  }

  return "bg-slate-100 text-slate-700 border-slate-200"
}

export function AdminDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [sections, setSections] = useState(initialSections)
  const [posts, setPosts] = useState(initialPosts)
  const [products, setProducts] = useState(initialProducts)
  const [leads, setLeads] = useState(initialLeads)
  const [team, setTeam] = useState(initialTeam)

  const filteredSections = useMemo(() => {
    const normalized = searchQuery.toLowerCase().trim()
    if (!normalized) {
      return sections
    }

    return sections.filter((section) => {
      return (
        section.name.toLowerCase().includes(normalized) ||
        section.route.toLowerCase().includes(normalized) ||
        section.owner.toLowerCase().includes(normalized)
      )
    })
  }, [sections, searchQuery])

  const overview = useMemo(() => {
    const publishedSections = sections.filter(
      (section) => section.status === "Published"
    ).length
    const blogDrafts = posts.filter((post) => post.status === "Draft").length
    const unpublishedProducts = products.filter(
      (product) => !product.published
    ).length
    const openLeads = leads.filter(
      (lead) => lead.stage !== "Won" && lead.stage !== "Lost"
    ).length

    return { publishedSections, blogDrafts, unpublishedProducts, openLeads }
  }, [sections, posts, products, leads])

  const setSectionVisibility = (id: string, visible: boolean) => {
    setSections((current) =>
      current.map((section) =>
        section.id === id ? { ...section, visible } : section
      )
    )
  }

  const setSectionStatus = (id: string, status: SectionStatus) => {
    setSections((current) =>
      current.map((section) =>
        section.id === id ? { ...section, status } : section
      )
    )
  }

  const setPostFeatured = (id: string, featured: boolean) => {
    setPosts((current) =>
      current.map((post) => (post.id === id ? { ...post, featured } : post))
    )
  }

  const setProductPublished = (id: string, published: boolean) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id ? { ...product, published } : product
      )
    )
  }

  const setLeadStage = (id: string, stage: LeadStage) => {
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, stage } : lead))
    )
  }

  const setUserRole = (id: string, role: UserRole) => {
    setTeam((current) =>
      current.map((member) => (member.id === id ? { ...member, role } : member))
    )
  }

  const setUserActive = (id: string, active: boolean) => {
    setTeam((current) =>
      current.map((member) =>
        member.id === id ? { ...member, active } : member
      )
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-72 border-r border-slate-200 bg-white">
        <div className="flex w-full flex-col">
          <div className="border-b border-slate-200 px-6 py-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-900 text-lg font-semibold text-white">
                I
              </div>
              <div>
                <p className="text-sm text-slate-500">Inievo</p>
                <p className="text-base font-semibold">Admin Control</p>
              </div>
            </Link>
          </div>
          <div className="flex-1 px-4 py-5">
            <p className="mb-3 px-2 text-xs font-medium uppercase tracking-wide text-slate-500">
              Console
            </p>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.value}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="border-t border-slate-200 px-6 py-4">
            <p className="text-sm font-medium">Primary Owner</p>
            <p className="text-xs text-slate-500">dalia@inievo.com</p>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur md:ml-72">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu className="size-4" />
            </Button>
            <div>
              <h1 className="text-base font-semibold sm:text-lg">Admin Dashboard</h1>
              <p className="text-xs text-slate-500 sm:text-sm">
                Control every section of your site from one panel.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>Publish Changes</Button>
          </div>
        </div>
      </header>

      {drawerOpen ? (
        <>
          <button
            type="button"
            aria-label="Close navigation drawer"
            className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200 bg-white p-4 md:hidden">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-base font-semibold">Admin Menu</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDrawerOpen(false)}
              >
                <X className="size-4" />
              </Button>
            </div>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.value}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      ) : null}

      <main className="p-4 pb-12 sm:p-6 md:ml-72 md:p-8">
        <Tabs defaultValue="overview" className="gap-4">
          <TabsList className="w-full justify-start overflow-x-auto rounded-xl">
            {menuItems.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardDescription>Sections Live</CardDescription>
                  <CardTitle>{overview.publishedSections}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Blog Drafts</CardDescription>
                  <CardTitle>{overview.blogDrafts}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Unpublished Products</CardDescription>
                  <CardTitle>{overview.unpublishedProducts}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Open Leads</CardDescription>
                  <CardTitle>{overview.openLeads}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Operations Summary</CardTitle>
                <CardDescription>
                  Snapshot across site, content, commerce, and team access.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-medium">Content Health</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {posts.filter((post) => post.status === "Published").length} published
                    posts, {posts.filter((post) => post.featured).length} featured.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-medium">Commerce Health</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {products.filter((product) => product.published).length} active products,
                    {" "}
                    {products.filter((product) => product.stock === 0).length} out of stock.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-medium">Lead Flow</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {leads.filter((lead) => lead.stage === "Proposal").length} active proposals
                    and {leads.filter((lead) => lead.stage === "Won").length} won deals.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-medium">Access Control</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {team.filter((member) => member.active).length} active users with
                    dashboard access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sections" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Site Sections</CardTitle>
                <CardDescription>
                  Control visibility and status for every major route.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search by route, owner, or section"
                />

                <div className="hidden md:block">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Section</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Visibility</TableHead>
                        <TableHead>Updated</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSections.map((section) => (
                        <TableRow key={section.id}>
                          <TableCell>
                            <p className="font-medium">{section.name}</p>
                            <p className="text-xs text-slate-500">{section.route}</p>
                          </TableCell>
                          <TableCell>{section.owner}</TableCell>
                          <TableCell>
                            <select
                              className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm"
                              value={section.status}
                              onChange={(event) =>
                                setSectionStatus(
                                  section.id,
                                  event.target.value as SectionStatus
                                )
                              }
                            >
                              <option value="Published">Published</option>
                              <option value="Draft">Draft</option>
                              <option value="Maintenance">Maintenance</option>
                            </select>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Switch
                                checked={section.visible}
                                onCheckedChange={(checked) =>
                                  setSectionVisibility(section.id, checked)
                                }
                              />
                              <span className="text-sm text-slate-600">
                                {section.visible ? "Visible" : "Hidden"}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>{section.updated}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-3 md:hidden">
                  {filteredSections.map((section) => (
                    <div key={section.id} className="rounded-lg border border-slate-200 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium">{section.name}</p>
                          <p className="text-xs text-slate-500">{section.route}</p>
                        </div>
                        <Badge className={statusBadge(section.status)}>{section.status}</Badge>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-slate-600">Visibility</span>
                        <Switch
                          checked={section.visible}
                          onCheckedChange={(checked) =>
                            setSectionVisibility(section.id, checked)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Blog Controls</CardTitle>
                <CardDescription>
                  Update publish state and featured visibility for posts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-lg border border-slate-200 p-4 sm:flex sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="text-xs text-slate-500">/blog/{post.slug}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-0">
                      <Badge className={statusBadge(post.status)}>{post.status}</Badge>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">Featured</span>
                        <Switch
                          checked={post.featured}
                          onCheckedChange={(checked) =>
                            setPostFeatured(post.id, checked)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shop" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Shop Management</CardTitle>
                <CardDescription>
                  Manage inventory and publishing status for product catalog.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Published</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-xs text-slate-500">{product.sku}</p>
                        </TableCell>
                        <TableCell>${product.price.toLocaleString()}</TableCell>
                        <TableCell>
                          <span
                            className={
                              product.stock === 0 ? "text-rose-600 font-medium" : ""
                            }
                          >
                            {product.stock}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={product.published}
                            onCheckedChange={(checked) =>
                              setProductPublished(product.id, checked)
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lead Pipeline</CardTitle>
                <CardDescription>
                  Track and move leads from inquiries to closed deals.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-lg border border-slate-200 p-4 sm:flex sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-xs text-slate-500">
                        {lead.source} - Assigned to {lead.assignedTo}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-3 sm:mt-0">
                      <Badge className={leadBadge(lead.stage)}>{lead.stage}</Badge>
                      <select
                        className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm"
                        value={lead.stage}
                        onChange={(event) =>
                          setLeadStage(lead.id, event.target.value as LeadStage)
                        }
                      >
                        <option value="New">New</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Proposal">Proposal</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Admin Access</CardTitle>
                <CardDescription>
                  Control who can manage dashboard data and content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {team.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.email}</p>
                        </TableCell>
                        <TableCell>
                          <select
                            className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm"
                            value={member.role}
                            onChange={(event) =>
                              setUserRole(member.id, event.target.value as UserRole)
                            }
                          >
                            <option value="Owner">Owner</option>
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editor</option>
                            <option value="Support">Support</option>
                          </select>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Switch
                              checked={member.active}
                              onCheckedChange={(checked) =>
                                setUserActive(member.id, checked)
                              }
                            />
                            <span className="text-sm text-slate-600">
                              {member.active ? "Active" : "Disabled"}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Global Site Settings</CardTitle>
                  <CardDescription>
                    Update key behavior for maintenance and indexing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                    <div>
                      <p className="text-sm font-medium">Maintenance mode</p>
                      <p className="text-xs text-slate-500">Display maintenance notice site-wide</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                    <div>
                      <p className="text-sm font-medium">Allow search engine indexing</p>
                      <p className="text-xs text-slate-500">Enable indexing for public pages</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                    <div>
                      <p className="text-sm font-medium">Require 2FA for admins</p>
                      <p className="text-xs text-slate-500">Apply to all Owner/Admin roles</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>
                    Jump into live areas of your site from admin.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href="/"
                    className="rounded-lg border border-slate-200 p-3 text-sm font-medium hover:bg-slate-100"
                  >
                    Marketing Home
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-lg border border-slate-200 p-3 text-sm font-medium hover:bg-slate-100"
                  >
                    Blog Hub
                  </Link>
                  <Link
                    href="/shop"
                    className="rounded-lg border border-slate-200 p-3 text-sm font-medium hover:bg-slate-100"
                  >
                    Shop Catalog
                  </Link>
                  <Link
                    href="/client"
                    className="rounded-lg border border-slate-200 p-3 text-sm font-medium hover:bg-slate-100"
                  >
                    Client Portal
                  </Link>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Admin Notes</CardTitle>
                <CardDescription>
                  This dashboard is functional at UI level and ready to connect to API or database
                  handlers for persistent writes.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
